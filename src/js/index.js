import * as $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import '@scss/main.scss'
import 'owl.carousel'

$(function() {

    $(document).ready(function() {

        //preloader
        setTimeout(function() {
            let preloader = $('#page-preloader');
            if ( !preloader.hasClass('done') ) {
                preloader.addClass('done');
            }
        }, 1000);

        //upload photo
        $('.custom-file-input').on('change', function(){
            let imageUrl = 'img/photos/ava.jpg';
            $('.profile-photo').css('background-image', 'url(' + imageUrl + ')');
        });

        //slider login page
        $('.owl-carousel.login-slider').owlCarousel({
            loop:true,
            autoWidth:true,
            items: 1,
            responsive:{
                0:{
                    margin:21,
                    items:1
                },
                992:{
                    nav: true,
                    navText: ['<div class="icon-arrow-left"></div>', '<div class="icon-arrow-right"></div>'],
                    margin:80,
                    items:2
                }
            }
        });

        //slider (Profile gallery)
        $('.owl-carousel.user-profile-slider').owlCarousel({
            items: 1,
            dots:true
        });
        $('.owl-carousel.user-profile-gallery').owlCarousel({
            loop:true,
            autoWidth:true,
            items: 4,
            margin: 15
        });

        //gallery on desktop
        $('.user-profile-gallery').on('click', '.user-profile-gallery__img', function(){
            let url = $(this).attr('src');
            $('.profile-photo-img').attr('src', url);
        });

    });


});