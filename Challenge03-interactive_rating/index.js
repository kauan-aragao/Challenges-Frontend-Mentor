const rate1 = document.querySelector('#n1')
const rate2 = document.querySelector('#n2')
const rate3 = document.querySelector('#n3')
const rate4 = document.querySelector('#n4')
const rate5 = document.querySelector('#n5')
elements = [rate1,rate2,rate3,rate4,rate5]

const button = document.querySelector('#submit') 

elements.forEach(element => {
    element.classList.remove('rate-item-active')
    element.classList.add('rate-item-disabled')
})

function activeRate(id){
    console.log(elements)
    switch(id){
        case 1 :
            elements.forEach(element => {
                element.classList.remove('rate-item-active')
                element.classList.add('rate-item-disabled')
            })
            rate1.classList.add('rate-item-active')
            rate1.classList.remove('rate-item-disabled')
            break

        case 2:
            elements.forEach(element => {
                element.classList.remove('rate-item-active')
                element.classList.add('rate-item-disabled')
            })
            rate2.classList.add('rate-item-active')
            rate2.classList.remove('rate-item-disabled')
        break
       
        case 3:
            elements.forEach(element => {
                element.classList.remove('rate-item-active')
                element.classList.add('rate-item-disabled')
            })
            rate3.classList.add('rate-item-active')
            rate3.classList.remove('rate-item-disabled')
        break

        case 4:
            elements.forEach(element => {
                element.classList.remove('rate-item-active')
                element.classList.add('rate-item-disabled')
            })
            rate4.classList.add('rate-item-active')
            rate4.classList.remove('rate-item-disabled')
        break

        case 5:
            elements.forEach(element => {
                element.classList.remove('rate-item-active')
                element.classList.add('rate-item-disabled')
            })
            rate5.classList.add('rate-item-active')
            rate5.classList.remove('rate-item-disabled')
        break

    }
}

function appreciateRate(){
    if(rate1.classList.contains('rate-item-active')){
        document.getElementById('user-rate').innerHTML = 1
        document.getElementById('content-1').style.display = 'none'
        document.getElementById('content-2').style.display = 'flex'
    }
    if(rate2.classList.contains('rate-item-active')){
        document.getElementById('user-rate').innerHTML = 2
        document.getElementById('content-1').style.display = 'none'
        document.getElementById('content-2').style.display = 'flex'
    }
    if(rate3.classList.contains('rate-item-active')){
        document.getElementById('user-rate').innerHTML = 3
        document.getElementById('content-1').style.display = 'none'
        document.getElementById('content-2').style.display = 'flex'
    }
    if(rate4.classList.contains('rate-item-active')){
        document.getElementById('user-rate').innerHTML = 4
        document.getElementById('content-1').style.display = 'none'
        document.getElementById('content-2').style.display = 'flex'
    }
    if(rate5.classList.contains('rate-item-active')){
        document.getElementById('user-rate').innerHTML = 5
        document.getElementById('content-1').style.display = 'none'
        document.getElementById('content-2').style.display = 'flex'
    }
}
