/*  JAVASCRIPT DA PÁGINA   */
var busca = document.getElementById("busca");
var btnClear = document.getElementsByClassName("deleteIcon");// getElementsByClassName gera um array, para obter o elemento da div deve especificar sua posição dentro do array;

busca.addEventListener("input", ()=>{
if (busca.value.trim() !== "") {
    btnClear[0].style.display = "inline-block";

} else {
    btnClear[0].style.display = "none";
    }
});
    btnClear[0].addEventListener("click", ()=>{
        busca.value = "";
        btnClear[0].style.display = "none";
    });