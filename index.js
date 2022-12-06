let homeEl =document.getElementById("value")
let gustEl =document.getElementById("value2")
let count = 0
 function home1(){
     count++
     homeEl.textContent = count
 }
 function home2(){
    count +=2 
      homeEl.textContent =count
 }
 function home3(){
     count +=3
      homeEl.textContent = count
 }
  function gust1(){
      count++
      gustEl.textContent = count
 }
 function gust2(){
      count +=2
      gustEl.textContent = count
 }
 function gust3(){
     count +=3
      gustEl.textContent =count
 }
  function reset(){
      count = 0
     homeEl.textContent = count
     gustEl.textContent = count
 }