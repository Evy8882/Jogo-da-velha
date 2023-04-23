var jogada = 'X'
var playing = true

const inverterJogada = () => {jogada == 'X' ? jogada = 'O' : jogada = 'X' }

const tabuleiro = {
    //linha 1
    'box1': '',
    'box2': '',
    'box3': '',
    //linha2
    'box4': '',
    'box5': '',
    'box6': '',
    //linha3
    'box7': '',
    'box8': '',
    'box9': '',
}

const verificarI = (ind)=> {
    if (ind == 'box1') {return tabuleiro.box1}
    if (ind == 'box2') {return tabuleiro.box2}
    if (ind == 'box3') {return tabuleiro.box3}
    if (ind == 'box4') {return tabuleiro.box4}
    if (ind == 'box5') {return tabuleiro.box5}
    if (ind == 'box6') {return tabuleiro.box6}
    if (ind == 'box7') {return tabuleiro.box7}
    if (ind == 'box8') {return tabuleiro.box8}
    if (ind == 'box9') {return tabuleiro.box9}
}
const alterarCasa = (ind)=> {
    if (ind == 'box1' && tabuleiro.box1 == '') {tabuleiro.box1 = `${jogada}`}
    if (ind == 'box2' && tabuleiro.box2 == '') {tabuleiro.box2 = `${jogada}`}
    if (ind == 'box3' && tabuleiro.box3 == '') {tabuleiro.box3 = `${jogada}`}
    if (ind == 'box4' && tabuleiro.box4 == '') {tabuleiro.box4 = `${jogada}`}
    if (ind == 'box5' && tabuleiro.box5 == '') {tabuleiro.box5 = `${jogada}`}
    if (ind == 'box6' && tabuleiro.box6 == '') {tabuleiro.box6 = `${jogada}`}
    if (ind == 'box7' && tabuleiro.box7 == '') {tabuleiro.box7 = `${jogada}`}
    if (ind == 'box8' && tabuleiro.box8 == '') {tabuleiro.box8 = `${jogada}`}
    if (ind == 'box9' && tabuleiro.box9 == '') {tabuleiro.box9 = `${jogada}`}
}
const updateTable = () => {
    for (i in tabuleiro){
        document.getElementById(i).innerHTML = verificarI(i)
    }
}
const clearTable = () => {
    tabuleiro.box1 = '';
    tabuleiro.box2 = '';
    tabuleiro.box3 = '';
    tabuleiro.box4 = '';
    tabuleiro.box5 = '';
    tabuleiro.box6 = '';
    tabuleiro.box7 = '';
    tabuleiro.box8 = '';
    tabuleiro.box9 = '';
    playing = true
    jogada = 'X'
    alertBox.style.visibility = "hidden";
    updateTable()
}

const marcar = (id) => {
    if (playing == 1){
        alterarCasa(id);
        inverterJogada();
        updateTable();
        winChecker();
    }
}

const winAlert = (winner) => {
    alertBox = document.querySelector(".alert");
    alertBox.innerHTML = `${winner} ganhou`
    alertBox.style.visibility = "visible";
}

const winChecker = () => {
    if (
        // Verificação horizontal:
        (tabuleiro.box1 == 'X' && tabuleiro.box2 == 'X' && tabuleiro.box3 == 'X') ||
        (tabuleiro.box4 == 'X' && tabuleiro.box5 == 'X' && tabuleiro.box6 == 'X') ||
        (tabuleiro.box7 == 'X' && tabuleiro.box8 == 'X' && tabuleiro.box9 == 'X') ||
        // Verificação vertical:
        (tabuleiro.box1 == 'X' && tabuleiro.box4 == 'X' && tabuleiro.box7 == 'X') ||
        (tabuleiro.box2 == 'X' && tabuleiro.box5 == 'X' && tabuleiro.box8 == 'X') ||
        (tabuleiro.box3 == 'X' && tabuleiro.box6 == 'X' && tabuleiro.box9 == 'X') ||
        // Verificação diagonal:
        (tabuleiro.box1 == 'X' && tabuleiro.box5 == 'X' && tabuleiro.box9 == 'X') ||
        (tabuleiro.box3 == 'X' && tabuleiro.box5 == 'X' && tabuleiro.box7 == 'X')
    
        ){
        playing = false
        winAlert("X")
    }
    if (
        // Verificação horizontal:
        (tabuleiro.box1 == 'O' && tabuleiro.box2 == 'O' && tabuleiro.box3 == 'O') ||
        (tabuleiro.box4 == 'O' && tabuleiro.box5 == 'O' && tabuleiro.box6 == 'O') ||
        (tabuleiro.box7 == 'O' && tabuleiro.box8 == 'O' && tabuleiro.box9 == 'O') ||
        // Verificação vertical:
        (tabuleiro.box1 == 'O' && tabuleiro.box4 == 'O' && tabuleiro.box7 == 'O') ||
        (tabuleiro.box2 == 'O' && tabuleiro.box5 == 'O' && tabuleiro.box8 == 'O') ||
        (tabuleiro.box3 == 'O' && tabuleiro.box6 == 'O' && tabuleiro.box9 == 'O') ||
        // Verificação diagonal:
        (tabuleiro.box1 == 'O' && tabuleiro.box5 == 'O' && tabuleiro.box9 == 'O') ||
        (tabuleiro.box3 == 'O' && tabuleiro.box5 == 'O' && tabuleiro.box7 == 'O')
    
        ){
        playing = false
        winAlert("O")
    }
}



updateTable()