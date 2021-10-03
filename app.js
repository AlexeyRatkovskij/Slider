const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')

let activeSlideIndex = 0
GetPhoto()
const slidesCount = mainSlide.querySelectorAll('div').length
setListener()


function setListener() {
    sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
    upBtn.addEventListener('click', () => {changeSlide('up')})
    downBtn.addEventListener('click', () => {changeSlide('down')})
    window.onresize = updateSizeWindow;
}

function updateSizeWindow(){
    mainSlide.style.transitionDuration = '0s';
    sidebar.style.transitionDuration = '0s';

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

function changeSlide(direction) {
    if (direction === 'up') {
        if ((activeSlideIndex < slidesCount-1) && (slidesCount != 1)) { 
            activeSlideIndex++
        } else {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        if (activeSlideIndex > 0) { 
            activeSlideIndex--
        } else {
            activeSlideIndex = slidesCount - 1 
        }
    }

    updateSizeWindow()
    mainSlide.style.removeProperty('transition-duration');
    sidebar.style.removeProperty('transition-duration');
}

function GetPhoto() {
    try {
        let photo_list = [
            {
                background: '229.99deg, #b4a69e -26%, #fdc07f 145%', 
                h1: 'Блинчики',
                p: 'Ням-нямка',
                img: 'https://images.unsplash.com/photo-1630661297756-15265d08960d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
                background: '229.99deg, #101010 100%, #fdd0a4 15%', 
                h1: 'Бургер',
                p: 'Ням-нямка',
                img: 'https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
            },
            {
                background: '229.99deg, #dab897 -26%, #b76a49 145%', 
                h1: 'Пирог',
                p: 'Ням-нямка',
                img: 'https://images.unsplash.com/photo-1631891349623-6bf9cec462ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
                background: '229.99deg, #422622 -26%, #ede8ec 145%', 
                h1: 'Оладушки',
                p: 'Ням-нямка',
                img: 'https://images.unsplash.com/photo-1630660116780-08adc1216529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
            },
            {
                background: '229.99deg, #a04800 -26%, #420900 145%', 
                h1: 'Пончик',
                p: 'Ням-нямка',
                img: 'https://images.unsplash.com/photo-1631143070457-c1aecc92abbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
            }
        ]
        const sidebar = document.querySelector('.sidebar')
        const mainSlide = document.querySelector('.main-slide')

        for (const photo of photo_list) {
            let div_style = document.createElement('div')
            div_style.style.background = `linear-gradient(${photo.background})`

            let h1 = document.createElement('h1')
            h1.textContent = photo.h1

            let p = document.createElement('p')
            p.textContent = photo.p

            sidebar.appendChild(div_style)
            div_style.appendChild(h1)
            div_style.appendChild(p)
        }
        photo_list.reverse()
        for (const photo of photo_list) {
            let div_img = document.createElement('div')
            div_img.className = "img_h"
            div_img.style.backgroundImage = `url('${photo.img}')`

            mainSlide.appendChild(div_img)
        }

    } catch (exeption) {
        throw exeption
    }
}