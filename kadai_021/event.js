const change = document.getElementById("btn");

change.addEventListener("click",()=>{
  setTimeout(()=>{
    document.getElementById("text").textContent = "ボタンがクリックされました";
  },2000);
});