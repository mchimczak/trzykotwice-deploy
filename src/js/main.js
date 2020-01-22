import '../img/doctors.png';
import '../img/oferta_galeria/offer1.jpg';
import '../img/oferta_galeria/box2.jpg';
import '../img/oferta_galeria/offer3.jpg';
import '../img/oferta_galeria/offer4.png';
import '../img/oferta_galeria/box5.jpg';
import '../img/oferta_galeria/offer6.jpg';
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
            height: 600
        })
    }

    
    var modal = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modal, {});

  });


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
