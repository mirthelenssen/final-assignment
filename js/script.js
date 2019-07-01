var geklikt = false;
// var player = videojs('my-video');


$(document).ready(function () {

    $("#accordion").accordion({
        animate: 1200,
        heightStyle: "content"
    });

    $("#accoBtn").click(function () {
        if ($("#accoBtn").hasClass("active")) {
            $("#accoBtn").removeClass("active");
            $("#accoBtn").text("uit");
            $("accordion").accordion("disable");

        } else {
            $("#accoBtn").addClass("active");
            $("accordion").accordion("enable");
        }
    });


    $("#afspelen").click(function () {
        event.preventDefault();
    
        if (geklikt == false) {
            player.play();
            geklikt = true;
            $("#afspelen").css({ "background-image": "url(img/pause@2x.png)" });
    
        } else {
            player.pause();
            geklikt = false;
            $("#afspelen").css({

             });
        }
        console.log(geklikt);
    });
    
    $("#terugspoelen").click(function () {
        var time = currentTime();
        if(geklikt == false){
        player.currentTime(player.currentTime(time - 10));
    }
    });


    $('.slider').click(function () {
        event.preventDefault();
       
        if ($('.slider').hasClass("active")) {
            $('.slider').removeClass("active");
            $("body").addClass('themeswitch');
        } else {
            $('.slider').addClass("active");
            $('body').removeClass('themeswitch');
        };
    });


});





