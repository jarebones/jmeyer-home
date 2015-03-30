$(document).ready(function(){

    $('.hidden').css('display','none');

    $( "#filter button" ).each(function() {

        $(this).on("click", function(){

            var filter = $(this).attr('class');         

            if ( $(this).attr('class') == 'all' ) {
                $('.hidden').contents().appendTo('#posts').hide().show('slow');
                $( "#filter button" ).removeClass('active');
                $(this).addClass('active');
                $("#filter button").attr("disabled", false);
                $(this).attr("disabled", true);
            } else {
                $('.post').appendTo('.hidden');
                $('.hidden').contents().appendTo('#posts').hide().show('slow');
                $('.post:not(.' + filter + ')').appendTo('.hidden').hide('slow');
                $( "#filter button" ).removeClass('active');
                $(this).addClass('active');
                $("#filter button").attr("disabled", false);
                $(this).attr("disabled", true);
            };
          
        });

    });

    $(".carousel-inner button").click(function(){
        toPortfolio();
    })


//Firefox
$("body").on('DOMMouseScroll', function(e){
    var $currentSection = $("section:in-viewport").attr("id");
    if(e.originalEvent.detail > 0) {
        //scroll down
        switch ($currentSection){
            case "mainSection":
                $('html, body').stop().animate({
                    scrollTop: $("#aboutSection").offset().top
                }, 1500, 'easeInOutExpo');
                break;

            case "aboutSection":
                $('html, body').stop().animate({
                    scrollTop: $("#workSection").offset().top
                }, 1500, 'easeInOutExpo');
                break;
            
            case "workSection":
                $('html, body').stop().animate({
                    scrollTop: $("#contactSection").offset().top
                }, 1500, 'easeInOutExpo');
                break;
            
            case "contactSection":
                //do nothing
                break;        
        }
    }else {
        //scroll up
        switch ($currentSection){
            case "mainSection":
                //do nothing
                break;

            case "aboutSection":
                $('html, body').stop().animate({
                    scrollTop: $("#mainSection").offset().top
                }, 1500, 'easeInOutExpo');
                break;
            
            case "workSection":
                $('html, body').stop().animate({
                    scrollTop: $("#aboutSection").offset().top
                }, 1500, 'easeInOutExpo');
                break;
            
            case "contactSection":
                $('html, body').stop().animate({
                    scrollTop: $("#workSection").offset().top
                }, 1500, 'easeInOutExpo');
                break;        
        }
    }

    console.log($currentSection);

    //prevent page fom scrolling
    return false;
});

 //IE, Opera, Safari
 $("body").on('mousewheel', function(e){
    var $currentSection = $("section:in-viewport").attr("id");
    
     if(e.originalEvent.wheelDelta < 0) {
         //scroll down
         switch ($currentSection){
            case "mainSection":
                $('html, body').stop().animate({
                    scrollTop: $("#aboutSection").offset().top
                }, 1500, 'easeInOutExpo');
                break;

            case "aboutSection":
                $('html, body').stop().animate({
                    scrollTop: $("#workSection").offset().top
                }, 1500, 'easeInOutExpo');
                break;
            
            case "workSection":
                $('html, body').stop().animate({
                    scrollTop: $("#contactSection").offset().top
                }, 1500, 'easeInOutExpo');
                break;
            
            case "contactSection":
                //do nothing
                break;        
        }
     }else {
         //scroll up
         switch ($currentSection){
            case "mainSection":
                //do nothing
                break;

            case "aboutSection":
                $('html, body').stop().animate({
                    scrollTop: $("#mainSection").offset().top
                }, 1500, 'easeInOutExpo');
                break;
            
            case "workSection":
                $('html, body').stop().animate({
                    scrollTop: $("#aboutSection").offset().top
                }, 1500, 'easeInOutExpo');
                break;
            
            case "contactSection":
                $('html, body').stop().animate({
                    scrollTop: $("#workSection").offset().top
                }, 1500, 'easeInOutExpo');
                break;        
        }
     }

     console.log($currentSection);

     //prevent page fom scrolling
     return false;
 });

})

$(window).load(function() {
 
    //setTimeout(function(){
    	$("#navBar").hide();
    	$(".nav").css("visibility", "visible");
    	$(".navbar").css("visibility", "visible");
        $('body').addClass('loaded');
        setTimeout(function(){
        	$("#navBar").fadeIn(1000,function(){
        		//do nothing
        	});
    	}, 1000);
    //}, 3000);
 
});

function toPortfolio(section) {

    $("#workCarousel").fadeOut(500,function(){
        $("#workPortfolio").fadeIn(500,function(){
            //do nothing
        });
    });
}

function toCarousel() {

    $("#workPortfolio").fadeOut(500,function(){
        $("#workCarousel").fadeIn(500,function(){
            //do nothing
        });
    });
}

var footer = $('#footer'),
    extra = 10; // In case you want to trigger it a bit sooner than exactly at the bottom.

footer.css({ opacity: '0', display: 'block' });

$(window).scroll(function() {
       
   var scrolledLength = ( $(window).height() + extra ) + $(window).scrollTop(),
       documentHeight = $(document).height();

    
    console.log( 'Scroll length: ' + scrolledLength + ' Document height: ' + documentHeight )
       
        
   if( scrolledLength >= documentHeight ) {
       
       footer
          .addClass('bottom')
          .stop().animate({ bottom: '0', opacity: '1' }, 300);

   }
   else if ( scrolledLength <= documentHeight && footer.hasClass('bottom') ) {           
        footer
           .removeClass('bottom')
           .stop().animate({ bottom: '-100', opacity: '0' }, 300);

   } 
});

function showPopup(id){
    $("#"+id).bPopup();
}