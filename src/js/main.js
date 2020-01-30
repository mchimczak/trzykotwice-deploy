import '../img/drASZ.png';
import '../img/drEG.png';
import '../img/drPB.png';
import '../img/oferta_galeria/s1.jpg';
import '../img/oferta_galeria/s2.jpg';
import '../img/oferta_galeria/s3.jpg';
import '../img/oferta_galeria/s4.jpg';
import '../img/oferta_galeria/s5.jpg';
import '../img/oferta_galeria/s6.jpg';
import "../assets/rodo.pdf";
import '../assets/wizyty.pdf';
import "../assets/WTO.pdf";
import "../assets/dokumentacja_medyczna.pdf";
import "../assets/oswiadczenie.pdf";
import "../assets/wniosek.pdf";
import "../assets/prawa_pacjenta.pdf";
import "../assets/skargi.pdf";
import "../assets/zasady_bezpiecznej_farmakoterapii.pdf";
import "../assets/farmakoterapia_przewlekla.pdf";
import "../assets/recepty.pdf";
import "../assets/stany_nagle.pdf";
import "../assets/szczepienia.pdf";
import "../assets/promocja_zdrowia.pdf";
import "../assets/swiateczna_pomoc.pdf";
import '../css/style.css';

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('body').classList.add('disable-scroll');
    //sidenav
    var sidenav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenav, {
        edge: 'right',
        closeOnClick: true
    });

    //collapsible
    var acordeon = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(acordeon, {
        inDuration: 200,
        outDuration: 200
    });

    
    var slider = document.querySelectorAll('.slider');
    var instances = M.Slider.init(slider, {
        interval: 3000,
        duration: 1000
    });

    if(window.innerWidth > 1200) {
        var instances = M.Slider.init(slider, {
            interval: 3000,
            duration: 1000,
            height: 500
        })
    }

    
    var modal = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modal, {});


    // LAZY LOAD IMG 
    const loadImages = (image) => {
        // console.log('switch');
        image.src = image.dataset.src

        observer.unobserve(image);
    };
    // const loadImages = (image) => {
    //     console.log('switch');
    //     const currentSrc = image.src;
    //     const newSrc = image.dataset.src;
    //     let splitUrl, srcFile, newUrl;

    //     if (image.classList.contains('sliderImg')) {
    //         image.src = newSrc
    //     } else {
    //         splitUrl = currentSrc.split('/'),
    //         srcFile = splitUrl[splitUrl.length - 1],
    //         newUrl = currentSrc.replace(srcFile, newSrc)
    //         image.src = newUrl
    //     }
    //     // newUrl == currentSrc ? '' : image.src = newUrl;
    //     observer.unobserve(image);
    // };
    
    const handleIntersection = (entries) => {
        entries.forEach(entry => entry.intersectionRatio > 0 ? loadImages(entry.target) : '');
    };
    
    const observerOptions = {
        rootMargin: '0px 0px 20% 0px',
        threshold: 0.1
    }
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => observer.observe(img));

  });


//   COOKIE FORM 

const cookieForm = document.querySelector('#cookieForm');
const CookieBtn = document.querySelector('#cookie');
// localStorage.clear();
const checkForCookies = () => {
  localStorage.getItem('cookieInfo') != null ? cookieForm.setAttribute('style', 'display: none') : ''
}
checkForCookies();
CookieBtn.addEventListener('click', function() {
    localStorage.setItem('cookieInfo', 'true');
    checkForCookies();
});


//   ON START LOADER ANIMATION 

  const heroTitle = document.querySelector('.hero__content p');
  const heroSubtitle = document.querySelector('.hero__content span');
  const heroBtn = document.querySelector('.hero__btn');
  const loader = document.querySelector('.loader__wrapper');
  const borders = document.querySelectorAll('.hero__content-border');
  
  loader.addEventListener('transitionend', function() {
      this.style.setProperty('display', 'none');
      heroSubtitle.classList.add('show');
      heroBtn.classList.add('show');
      borders.forEach( x => x.classList.add('active'));
  });
  
  window.addEventListener('load', () => {
    new Promise(resolve => resolve(
          document.querySelector('body').classList.remove('disable-scroll'),
          loader.style.setProperty('opacity', 0),
          heroTitle.classList.add('show')
    )).then(() => setTimeout(() => cookieForm.classList.add('active'), 4000));
  });

heroBtn.addEventListener('click', () => {
    window.location.replace('#o-nas');
})

const section_img = document.querySelector('.section__img')

if (window.innerWidth >= 768) {
    section_img.classList.add('container');
}

const offer__boxes = document.querySelectorAll('.offer__wrapper > li');
const offer_boxes_body = document.querySelectorAll(".offer__wrapper .collapsible-body")

if (window.innerWidth >= 768 && window.innerWidth <=1200) {
    // offer__boxes.classList.add('active')
    offer__boxes.forEach( box => {
        box.classList.add('active')
        box.style.pointerEvents = "none";
    })
    offer_boxes_body.forEach( box => {
        box.style.display = 'block'
    })
}


// HIDE MENU ON SCROLL 

    const navbar = document.querySelector('nav');
    const navlink = document.querySelectorAll('.nav__link');
    const logo = document.querySelector('.brand-logo');
    const contact__section = document.querySelector('.contact__section');
    const cnct_sec_btm = contact__section.offsetTop + contact__section.offsetHeight;
    let didScroll = false
    let lastScrollTop = 0;
    const minScrollPoint = 5;

    window.addEventListener('scroll', () => {
        didScroll = true;

        if(window.scrollY > cnct_sec_btm) {
            navbar.classList.add('nav--scrolled')
            logo.classList.add('brand-logo--enlarge')
            navlink.forEach(link => {
                link.classList.add('nav__link--txt_darken')
            })
        } else {
            navbar.classList.remove('nav--scrolled')
            logo.classList.remove('brand-logo--enlarge')
            navlink.forEach(link => {
                link.classList.remove('nav__link--txt_darken')
            })
        }
    })

    const hasScrolled = () => {
        const winScroll = window.scrollY

        if(Math.abs(lastScrollTop - winScroll) <= minScrollPoint) {
            return
        }
        if(Math.ceil(winScroll + window.innerHeight) >= document.body.scrollHeight) {
            return navbar.classList.remove('nav-up');
        }

        if(winScroll > lastScrollTop && winScroll > navbar.offsetHeight) {
            navbar.classList.add('nav-up')
        } else {
            // if(winScroll + window.innerHeight < document.documentElement.clientHeight) {
            navbar.classList.remove('nav-up')
            // }
        }

        lastScrollTop = winScroll
    }

    setInterval(() => {
        if(window.innerWidth < 1200) {
            if(didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }
    }, 250);
