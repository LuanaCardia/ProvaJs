function maior() {
    let n1 = Number(window.prompt('digite um número:'))
    let n2 = Number(window.prompt('digite outro numero'))
    
    
    let res = document.querySelector('section#saida')
    if (n1 > n2) {
    res.innerHTML = `<p>analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark> o maior valor é <strong>${n1}</strong></p>`
    } else if (n1 < n2) {
        res.innerHTML = `<p>analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark> o maior valor é <strong>${n2}</strong></p> `
    } else {
        res.innerHTML = `<p>analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark> ambos são <strong>IGUAIS</strong></p> `
    }
    
    }