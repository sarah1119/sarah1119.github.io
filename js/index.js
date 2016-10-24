$(function () {
    $("audio").get(0).play()
    $(".right ul li").eq(0).css({borderBottom:"2px solid #ee3113"})
    $("#canvas").css({width:$(".main").width()})
    // $(".leader li")
    $(window).on("scroll",function(){
        if($(window).scrollTop()<662){
            $(".right ul li").css({borderBottom:"none"})
            $(".right ul li").eq(0).css({borderBottom:"2px solid #ee3113"})
        }
        if($(window).scrollTop()>=662){
            $(".right ul li").css({borderBottom:"none"})
            $(".right ul li").eq(1).css({borderBottom:"2px solid #ee3113"})
        }
        if($(window).scrollTop()>=1562){
            $(".right ul li").css({borderBottom:"none"})
            $(".right ul li").eq(2).css({borderBottom:"2px solid #ee3113"})
        }
        if($(window).scrollTop()>=2224){
            $(".right ul li").css({borderBottom:"none"})
            $(".right ul li").eq(4).css({borderBottom:"2px solid #ee3113"})
        }
        if($(window).scrollTop()>=2886){
            $(".right ul li").css({borderBottom:"none"})
            $(".right ul li").eq(5).css({borderBottom:"2px solid #ee3113"})
        }
        // if($(window).scrollTop()>=3548){
        //     $(".right ul li").css({borderBottom:"none"})
        //     $(".right ul li").eq(5).css({borderBottom:"2px solid #ee3113"})
        // }
    })
    setTimeout(function(){
        $(".name1").addClass("active")
    },3000)
    setTimeout(function(){
        $(".smile").addClass("active")
    },6000)
    setTimeout(function(){
        $(".circle").addClass("active")
    },6800)
$(document).on("mousedown",false)
    // $(".progress-ring").loadingRing();






















})