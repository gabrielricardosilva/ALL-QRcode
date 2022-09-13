const btnAdicionar = document.querySelectorAll('.button-add')
const btnSubtrair = document.querySelectorAll('.button-sub')

btnAdicionar.forEach(item=>{
    item.addEventListener('click',()=>{
        item.nextSibling.setAttribute('class','editing')
        let span = document.querySelector('.editing')
        let calcPreco = document.querySelector('.preco-editing')
        let valor = span.textContent
        valor++
        item.nextSibling.textContent=valor
        span.removeAttribute('class','editing')
    })
})
btnSubtrair.forEach(item=>{
    item.addEventListener('click',()=>{
        item.previousSibling.setAttribute('class','editing')
        let span = document.querySelector('.editing')
        let valor = span.textContent
        if(valor>0){
          valor--  
        }
        item.previousSibling.textContent=valor
        span.removeAttribute('class','editing')
        
    })
})

