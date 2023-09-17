// ==============services toggle

const serviceButtons= document.querySelectorAll('.service_item')
const serviceDetails= document.querySelector('.services_right')


const getService=(category) => {
   const details= servicesData.find((item)=>item.category===category)
    
   serviceDetails.innerHTML=`
   <h3>${details.title}</h3>
   ${details.description.map(paragraph => '<p>'+ paragraph +'</p>').join('')}`
}
const removeActiveClass=()=>{
    serviceButtons.forEach(buttons=>{ buttons.classList.remove('active')})
}

serviceButtons.forEach((item)=>{
    item.addEventListener('click',()=>{
        removeActiveClass()
        const serviceClass=item.classList[1];
       getService(serviceClass)
       item.classList.add('active')
    })
})
getService('frontend')


// ====================  mix it up  ==================
const containerEl=document.querySelector(".projects_container")

var mixer= mixitup(containerEl,{
    animation:{
        enable:false
    }
})

mixer.filter('*')

//========================= swiper js (testimonial)
const swiper = new Swiper('.swiper', {
   slidesPerView:1,
   spaceBetween:30,
   pagination:{
    el:'.swiper-pagination',
    clickable:true
   },
   breakpoints:{
    640:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    }
   }

  });




// ===========================  nav toggle small screens
  const navMenu=document.querySelector('.nav_menu')
const open=document.querySelector('.nav_toggle-open');
const close=document.querySelector('.nav_toggle-close');


function openMenu() {
  navMenu.style.display='flex'
  open.style.display='none'
  close.style.display='inline-block'
}

function closeMenu() {
    navMenu.style.display='none'
    open.style.display='inline-block'
    close.style.display='none'
  }
  

open.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);


// close nav menu on click of nav link on smaller  screens
const navItems=navMenu.querySelectorAll('a')
if (window.innerWidth<768) {
    navItems.forEach((items)=>{items.addEventListener('click',closeMenu)})
}


// ==============light and dark theme mode======

const themeBtn=document.querySelector('.nav_theme-btn')

themeBtn.addEventListener("click",()=>{
    let bodyclass=document.body.className
    if (!bodyclass) {
        bodyclass='dark'
        document.body.className=bodyclass
        // change toggle icon
        themeBtn.innerHTML='<i class="uil uil-sun"></i>'
        //save theme to local storage
        window.localStorage.setItem('theme',bodyclass)
    } else {
        bodyclass=''
        document.body.className=bodyclass
                // change toggle icon
                themeBtn.innerHTML='<i class="uil uil-moon"></i>'
                 //save theme to local storage
        window.localStorage.setItem('theme',bodyclass)
    }

})

// load theme on load

window.addEventListener('load',()=>{
    document.body.className=window.localStorage.getItem('theme')
})
