const input = document.querySelector(".contador")
function maisUm(){
    let valorAtual = Number(input.innerText);
    valorAtual += 1;
    input.innerText =valorAtual
}
function menosUm(){
    let valorAtual = Number(input.innerText);
    valorAtual -= 1;
    input.innerText =valorAtual
}