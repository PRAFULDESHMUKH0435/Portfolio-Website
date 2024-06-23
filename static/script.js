$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Android Designer and Developer","Flutter Developer", "Software Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Android Designer and Developer","Flutter Developer", "Software Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

/////////////////CODE FOR MESSAGE SENDING

function gotowhatsapp() {
     var name = document.getElementById("username").value;
    var phone = document.getElementById("userSubject").value;
    var email = document.getElementById("useremail").value;
    var service = document.getElementById("usermessage").value;

    var url = "https://wa.me/+918999384981?text=" 
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "Email: " + email  + "%0a"
    + "Service: " + service; 

    window.open(url, '_blank').focus();
}
////////////////////
function  forBMI(){
    var url = "https://github.com/PRAFULDESHMUKH0435/BMICALCULATOR" 
    window.open(url, '_blank').focus();
}
function  forSAHAYAK(){
    var url = "https://github.com/PRAFULDESHMUKH0435/Sahayak-" 
    window.open(url, '_blank').focus();
}
function  forVAARTAHAR(){
    var url = "https://github.com/PRAFULDESHMUKH0435/Vaartahar" 
    window.open(url, '_blank').focus();
}
function  forINSECURECBS(){
    var url = "https://github.com/PRAFULDESHMUKH0435/Pentesting" 
    window.open(url, '_blank').focus();
}
