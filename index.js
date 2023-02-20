                        // aside js
const asideHeader = document.querySelectorAll('#aside-header')

asideHeader.forEach( item => {
    item.addEventListener('click',()=>{
        const svg = item.querySelector('.item-link-svg')
        const ul = item.parentNode.querySelector('.aside-hide-ul')
        const menuLi = item.parentNode.querySelectorAll('.aside-menu-item-header-ul-item')
        menuLi.forEach(li => {
            const a = li.querySelector('.aside-menu-item-header-ul-link')
            cleanItemActive(a)
            li.addEventListener('click',(e)=>{
                e.preventDefault()
                menuLi.forEach( li => {
                    const a = li.querySelector('.aside-menu-item-header-ul-link')
                    cleanItemActive(a)
                })
                a.classList.add('item-active')    
            })
        })
        if(item.classList.contains('item-active')){
           removeItemActive(item,svg,ul)    
        }
        else{
            for(items of asideHeader){
                items.classList.remove('item-active')
                items.querySelector('.item-link-svg').classList.remove('svg-active')
                items.parentNode.querySelector('.aside-hide-ul').classList.add('hide')
            }
                addItemActive(item,svg,ul)
        }
        
       
                
    })
})

function cleanItemActive(a){
    a.classList.remove('item-active')
}
function addItemActive(item,svg,ul){
    item.classList.add('item-active')
    svg.classList.add('svg-active')
    ul.classList.remove('hide')
}
function removeItemActive(item,svg,ul){
    item.classList.remove('item-active')
    svg.classList.remove('svg-active')
    ul.classList.add('hide')
}
        // main.js
const cards  = document.querySelectorAll('.card')


cards.forEach((card => {
    card.addEventListener('click',()=>{
        const buttonPlus = card.querySelector('.button-plus-span')
        if(card.classList.contains('card-active')){
            buttonPlus.classList.remove('button-plus-active')
            card.classList.remove('card-active')
        }else{
            buttonPlus.classList.add('button-plus-active')
            card.classList.add('card-active')
        }
    })
}))


