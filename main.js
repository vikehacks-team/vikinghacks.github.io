$(document).ready(function (){
    $("#clickSponsors").click(function (){
            $('html, body').animate({
                scrollTop: $(".Sponsorship").offset().top - 80
            }, 500);
    });
    $("#clickSchedule").click(function (){
            $('html, body').animate({
                scrollTop: $(".Schedule").offset().top - 70
            }, 500);
    });
    $("#clickFaq").click(function (){
            $('html, body').animate({
                scrollTop: $(".FAQ").offset().top - 120
            }, 500);
    });
    $("#clickAbout").click(function (){
            $('html, body').animate({
                scrollTop: $(".About").offset().top - 80
            }, 500);
    });
    $("#clickHome").click(function (){
            $('html, body').animate({
                scrollTop: $("body").offset().top
            }, 500);
    });