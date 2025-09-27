// ===== 연도 표시 =====
const params = new URLSearchParams(location.search);
const year = params.get("year") || new Date().getFullYear();
document.getElementById("title").textContent = `${year} 장위동교회 청년반 사진첩`;

// ===== 사이드 패널 열고 닫기 =====
const panel   = document.getElementById("sidePanel");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("menuOpen");
const closeBtn= document.getElementById("panelClose");

function setPanel(open){
  panel.classList.toggle("open", open);
  panel.setAttribute("aria-hidden", String(!open));
  openBtn.setAttribute("aria-expanded", String(open));
  overlay.toggleAttribute("hidden", !open);
  overlay.classList.toggle("show", open);
}
openBtn.addEventListener("click", ()=> setPanel(true));
closeBtn.addEventListener("click", ()=> setPanel(false));
overlay.addEventListener("click", ()=> setPanel(false));
document.addEventListener("keydown", (e)=>{ if(e.key==="Escape") setPanel(false); });

// ===== 월 리스트 + 아코디언 생성 =====
const monthList = document.getElementById("monthList");
const accordion = document.getElementById("accordion");

// 갤러리에서 불러올 최대 파일 수 (예: 1~20까지 시도)
const maxPhotos = 30;

for (let m = 1; m <= 12; m++) {
  // 메뉴 항목
  const li = document.createElement("li");
  li.textContent = `${m}월`;
  li.dataset.target = `month${m}`;
  monthList.appendChild(li);

  // 아코디언 섹션
  const sec = document.createElement("section");
  sec.id = `month${m}`;
  sec.className = "month-section";
  sec.innerHTML = `
    <h2>${m}월 사진첩</h2>
    <div class="gallery" id="gallery-${m}"></div>
  `;
  accordion.appendChild(sec);

  // 갤러리에 이미지 삽입
  const gallery = sec.querySelector(".gallery");
  for (let i = 1; i <= maxPhotos; i++) {
    const img = document.createElement("img");
    img.src = `img/${year}/${m}월/${i}.jpg`;
    img.alt = `${year}년 ${m}월 사진 ${i}`;
    img.onerror = () => img.remove(); // 파일 없으면 제거
    gallery.appendChild(img);
  }
}

// ===== 아코디언 동작 =====
const sections = document.querySelectorAll(".month-section");
monthList.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    const targetId = li.dataset.target;
    const targetEl = document.getElementById(targetId);

    if (targetEl.classList.contains("open")) {
      targetEl.classList.remove("open");
      return;
    }
    sections.forEach(sec => sec.classList.remove("open"));
    targetEl.classList.add("open");
    targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

    setPanel(false); // 메뉴 닫기
  });
});

// ===== 뒤로가기 버튼 =====
function goBack() {
  if (document.referrer) {
    history.back();
  } else {
    window.location.href = "index.html";
  }
}
window.goBack = goBack;

/* ===== 라이트박스: 확대보기 + 넘기기 ===== */
const lightbox   = document.getElementById("lightbox");
const lbImg      = document.getElementById("lightbox-img");
const lbCloseBtn = document.getElementById("lbClose");
const lbPrevBtn  = document.getElementById("lbPrev");
const lbNextBtn  = document.getElementById("lbNext");

let currentList = [];   // 현재 갤러리의 이미지 노드 배열
let currentIdx  = 0;    // 현재 인덱스

function openLightbox(list, idx){
  currentList = list;
  currentIdx  = idx;
  lbImg.src   = currentList[currentIdx].src;
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden","false");
}

function closeLightbox(){
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden","true");
  lbImg.src = "";
}

function showPrev(){
  if(!currentList.length) return;
  currentIdx = (currentIdx - 1 + currentList.length) % currentList.length;
  lbImg.src  = currentList[currentIdx].src;
}

function showNext(){
  if(!currentList.length) return;
  currentIdx = (currentIdx + 1) % currentList.length;
  lbImg.src  = currentList[currentIdx].src;
}

// 썸네일 클릭 → 라이트박스 오픈 (이벤트 위임)
document.addEventListener("click", (e)=>{
  const img = e.target;
  if (img.tagName === "IMG" && img.closest(".gallery")) {
    const gallery = img.closest(".gallery");
    const imgsArr = Array.from(gallery.querySelectorAll("img"));
    const idx     = imgsArr.indexOf(img);
    openLightbox(imgsArr, idx);
  }
});

// 닫기/이동 버튼
lbCloseBtn.addEventListener("click", closeLightbox);
lbPrevBtn .addEventListener("click", (e)=>{ e.stopPropagation(); showPrev(); });
lbNextBtn .addEventListener("click", (e)=>{ e.stopPropagation(); showNext(); });

// 배경 클릭 시 닫기 (이미지 자체 클릭은 무시)
lightbox.addEventListener("click", (e)=>{
  if(e.target === lightbox) closeLightbox();
});

// 키보드 컨트롤
document.addEventListener("keydown", (e)=>{
  if(!lightbox.classList.contains("show")) return;
  if(e.key === "Escape") closeLightbox();
  if(e.key === "ArrowLeft")  showPrev();
  if(e.key === "ArrowRight") showNext();
});

// 터치 스와이프(모바일)
let touchX = null;
lightbox.addEventListener("touchstart", (e)=>{ touchX = e.changedTouches[0].clientX; }, {passive:true});
lightbox.addEventListener("touchend", (e)=>{
  if(touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  const TH = 40; // 민감도
  if(dx >  TH) showPrev();
  if(dx < -TH) showNext();
  touchX = null;
}, {passive:true});

