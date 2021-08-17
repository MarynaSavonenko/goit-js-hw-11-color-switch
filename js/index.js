//Data//
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
//CONST//
  const startBtn = document.querySelector(".js-start");
  const stopBtn = document.querySelector(".js-stop");
  let timerId = null;
  

  startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        let color = colors[Math.floor(Math.random()*colors.length)];
        document.body.style.backgroundColor = color;
        startBtn.disabled = true;
    }, 1000);
  });
  
  // По клику на Стоп вызовем clearInterval и передадим
  // аргументом ID того счетчика который надо остановить
  stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false;
  });
  