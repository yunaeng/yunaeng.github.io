const time = document.querySelector('.header__time')

function getClock() {
  const date = new Date()
  const hour = String(date.getHours()).padStart(2, '0')
  const Minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  time.innerText = `${hour}:${Minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000)