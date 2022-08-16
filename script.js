let num = document.getElementById('txtnum')
let tab = document.getElementById('tabMult')
let tab2 = document.getElementById('tabAdi')
let tab3 = document.getElementById('tabSub')
const box = document.querySelector('.box')

function tabuadaMulti(n) {
    const itens = [];
    for (let cont = 1; cont <= 10; cont++) {
        const item = document.createElement('option')
        item.text = `${n} X ${cont} = ${n*cont}`
        itens.push(item)
    }
    tab.replaceChildren(...itens);
}

function tabuadaAdc(n) {
    const itens = [];
    for (let cont = 1; cont <= 10; cont++) {
        const item = document.createElement('option')
        item.text = `${n} + ${cont} = ${n+cont}`
        itens.push(item)
    }
    tab2.replaceChildren(...itens);
}

function tabuadaSubt(n) {
    const itens = [];
    for (let cont = 1; cont <= 10; cont++) {
        const item = document.createElement('option')
        item.text = `${n} - ${cont} = ${n-cont}`
        itens.push(item)
    }
    tab3.replaceChildren(...itens);
}
function tabuada() {
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tabuadaMulti(n);
        tabuadaAdc(n);
        tabuadaSubt(n);
        num.value = ''
    }
}