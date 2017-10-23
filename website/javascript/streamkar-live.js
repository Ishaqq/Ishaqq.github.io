$(document).ready(function() {
    //$("#header").height($(window).height());
    var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000);    
}

    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v += 1) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break
            }
        }
        return flag
    }

    function randNumber(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min)
    }
    if (!IsPC()) {
        if (navigator.userAgent.indexOf("iPad") > 0) {
            for (var i = 0; i < 18; i += 1) {
                $(".pics-wrap").append('<img src="images/talents-photo/' + (i + 1) + '.jpg" style="width:10%;"/>')
            }
            $(".pics-wrap img").css({
                "-webkit-filter": "none",
                "-moz-filter": "none",
                "-ms-filter": "none",
                "-o-filter": "none",
                "filter": "none"
            })
        } else {
            $(".pics-wrap").empty().append('<img src="images/photo.png" class="bg" style="width:10%;"/>')
        }
        $("#block").remove();
        //$("#header").removeClass("header").addClass("header-active");
        $("#mask").css("background", "rgba(0,0,0,0.15)");
       // $("#header h1").width($(window).width() * 0.9);
        //$("#header h2").css("top", $("#header h1").offset().top + $("#header h1").height() * 0.7).css("left", "45%");
        //$("#header .btn-wrap").css("top", $("#header h1").offset().top + $("#header h1").height() * 0.7);
        $("#section1-top-text,#section1-bottom-text,.section-1 .contain-top>div:nth-child(1) .line").addClass("show");
        $(".section-2 .contain-top>div:nth-child(1) h4,.section-2 .contain-top>div:nth-child(1) #section2-bottom-text,.section-2 .contain-top>div:nth-child(1) .line").addClass("show1");
        $(".pics-wrap img.bg").css({
            "-webkit-filter": "none",
            "-moz-filter": "none",
            "-ms-filter": "none",
            "-o-filter": "none",
            "filter": "none",
            "width":"10%",
        }).width($(window).width());
        $(".move-title-1").clone(true).appendTo(".section-1 .contain-top").addClass("move-title-1-active6-mob")
    } else {
        for (var i = 0; i < 18; i += 1) {
            
            //$(".pics-wrap").append('<img src="images/talents-photo/' + (i + 1) + '.jpg" style="width:10%;"/>')
        }
        $(".pics-wrap img").hover(function() {
            $(this).addClass("active")
        }, function() {
            $(this).removeClass("active")
        });
        setInterval(function() {
            (function() {
                var img = $(".pics-wrap img").eq(randNumber(0, 17));
                img.addClass("active");
                setTimeout(function() {
                    img.removeClass("active")
                }, 1000)
            })()
        }, 1000);
       // $("#header").addClass("header")
    }
    var swiper = new Swiper('.swiper-container', {
        effect: 'fade',
        autoplay: 3000,
        speed: 2000,
        loop: true,
        keyboardControl: false,
        mousewheelControl: false,
        resistance: true,
        resistanceRatio: 0,
        slideToClickedSlide: false,
        preventClicks: false,
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        fade: {
            slideShadows: false,
            shadow: false
        },
        onSlideChangeStart: function(swiper) {
            $(".show-wrap .gift-wrap img:nth-child(2),.show-wrap .gift-wrap img:nth-child(3),.show-wrap .gift-wrap img:nth-child(4),.show-wrap .gift-wrap img:nth-child(5),.show-wrap .gift-wrap img:nth-child(6),.show-wrap .gift-wrap img:nth-child(7)").css("opacity", 0);
            $(".gift-wrap .bubble1").removeClass("gift-bubble-active1");
            $(".gift-wrap .bubble2").removeClass("gift-bubble-active2");
            $(".gift-wrap .bubble5").removeClass("gift-bubble-active1");
            $(".gift-wrap .bubble3").removeClass("gift-bubble-active1");
            $(".gift-wrap .bubble4").removeClass("gift-bubble-active2");
            $(".gift-wrap .bubble6").removeClass("gift-bubble-active1");
            $(".gift-wrap .bubble").removeClass("gift-bubble-active3");
            var index = swiper.realIndex;
            if (index == 0) {
                setTimeout(function() {
                    $(".gift-wrap .bubble").addClass("gift-bubble-active3");
                    $(".gift-wrap .bubble6").addClass("gift-bubble-active1");
                    $(".gift-wrap .bubble3").addClass("gift-bubble-active1");
                    $(".gift-wrap .bubble4").addClass("gift-bubble-active2")
                }, 100)
            } else if (index == 1) {
                setTimeout(function() {
                    $(".gift-wrap .bubble").addClass("gift-bubble-active3");
                    $(".gift-wrap .bubble5").addClass("gift-bubble-active1")
                }, 100)
            } else if (index == 2) {
                setTimeout(function() {
                    $(".gift-wrap .bubble").addClass("gift-bubble-active3");
                    $(".gift-wrap .bubble1").addClass("gift-bubble-active1");
                    $(".gift-wrap .bubble2").addClass("gift-bubble-active2")
                }, 100)
            }
        }
    });
    $(".page-btn-wrap .left-btn").on("click", function() {
        swiper.slidePrev()
    });
    $(".page-btn-wrap .right-btn").on("click", function() {
        swiper.slideNext()
    });
    $(window).resize(function() {
        //$("#header").height($(window).height());
        $(".move-title-2").removeClass("move-title-2-active1 move-title-2-active2 move-title-2-active3 move-title-2-active4 move-title-2-active5");
        $(".move-title-1").removeClass("move-title-1-active1 move-title-1-active2 move-title-1-active3 move-title-1-active4 move-title-1-active5 move-title-1-active6");
        moveTitleRemoveFn()
    });
    var n = 1;
    var timer = null;
    var speed = 1000;
    var pos = [{
        w: "0%",
        h: "0%"
    }, {
        w: "24%",
        h: "0%"
    }, {
        w: "49%",
        h: "0%"
    }, {
        w: "74.37%",
        h: "0%"
    }, {
        w: "0%",
        h: "48%"
    }, {
        w: "24%",
        h: "48%"
    }, {
        w: "49%",
        h: "48%"
    }, {
        w: "74.37%",
        h: "48%"
    }];
    $(window).scroll(function() {
        var mob;
        mob = IsPC() ? 0 : $(".section-2 .move-title-2").height();
        if ($(window).scrollTop() > $(".section-2 ").offset().top + $(".section-2 .move-title-2").height() - mob) {
            if ($(window).width() > 1720) {
                $(".move-title-2").addClass("move-title-2-active1")
            } else if ($(window).width() > 1320) {
                $(".move-title-2").addClass("move-title-2-active2")
            } else if ($(window).width() > 820) {
                $(".move-title-2").addClass("move-title-2-active3")
            } else if ($(window).width() > 620) {
                $(".move-title-2").addClass("move-title-2-active4")
            } else {
                $(".move-title-2").addClass("move-title-2-active5")
            }
            moveTitleAddFn()
        } else {
            $(".move-title-2").removeClass("move-title-2-active1 move-title-2-active2 move-title-2-active3 move-title-2-active4 move-title-2-active5");
            moveTitleRemoveFn()
        }
        if ($(window).scrollTop() > $(".section-1 .contain-top").offset().top + $(".section-1 .move-title-1").height() * 4 / 5 && IsPC()) {
            if ($(window).width() > 1720) {
                $(".move-title-1").addClass("move-title-1-active1")
            } else if ($(window).width() > 1320) {
                $(".move-title-1").addClass("move-title-1-active2")
            } else if ($(window).width() > 820) {
                $(".move-title-1").addClass("move-title-1-active3")
            } else if ($(window).width() > 620) {
                $(".move-title-1").addClass("move-title-1-active4")
            } else if ($(window).width() > 420) {
                $(".move-title-1").addClass("move-title-1-active5")
            } else {
                $(".move-title-1").addClass("move-title-1-active6")
            }
        } else {
            $(".move-title-1").removeClass("move-title-1-active1 move-title-1-active2 move-title-1-active3 move-title-1-active4 move-title-1-active5 move-title-1-active6")
        }
        if ($(window).scrollTop() > $("#header").height() * 1 / 2 && $(window).scrollTop() < $(".section-1 .contain-bottom").offset().top + $(".section-1 .contain-bottom").height() * 1 / 4 && IsPC()) {
            $(".move-title-1 h4").css({
                "opacity": "1",
                "-webkit-transform": "translateY(0)",
                "-moz-transform": "translateY(0)",
                "-ms-transform": "translateY(0)",
                "-o-transform": "translateY(0)",
                "transform": "translateY(0)"
            });
            $(".move-title-1 p").css({
                "opacity": "1",
                "-webkit-transform": "translateY(0)",
                "-moz-transform": "translateY(0)",
                "-ms-transform": "translateY(0)",
                "-o-transform": "translateY(0)",
                "transform": "translateY(0)"
            });
            $(".move-title-1 .line").css({
                "opacity": "1",
                "-webkit-transform": "translateY(0)",
                "-moz-transform": "translateY(0)",
                "-ms-transform": "translateY(0)",
                "-o-transform": "translateY(0)",
                "transform": "translateY(0)"
            })
        } else {
            $(".move-title-1 h4").css({
                "opacity": "0",
                "-webkit-transform": "translateY(-50%)",
                "-moz-transform": "translateY(-50%)",
                "-ms-transform": "translateY(-50%)",
                "-o-transform": "translateY(-50%)",
                "transform": "translateY(-50%)"
            });
            $(".move-title-1 p").css({
                "opacity": "0",
                "-webkit-transform": "translateY(-50%)",
                "-moz-transform": "translateY(-50%)",
                "-ms-transform": "translateY(-50%)",
                "-o-transform": "translateY(-50%)",
                "transform": "translateY(-50%)"
            });
            $(".move-title-1 .line").css({
                "opacity": "0",
                "-webkit-transform": "translateY(-50%)",
                "-moz-transform": "translateY(-50%)",
                "-ms-transform": "translateY(-50%)",
                "-o-transform": "translateY(-50%)",
                "transform": "translateY(-50%)"
            })
        }
        if ($(window).scrollTop() > $(".section-1 .contain-bottom").offset().top + $(".section-1 .contain-bottom").height() * 1 / 2 && $(window).scrollTop() < $(".section-2 .contain-bottom").offset().top + $(".section-2 .contain-bottom").height() * 1 / 4 && IsPC()) {
            $(".move-title-2 h4").css({
                "opacity": "1",
                "-webkit-transform": "translateY(0)",
                "-moz-transform": "translateY(0)",
                "-ms-transform": "translateY(0)",
                "-o-transform": "translateY(0)",
                "transform": "translateY(0)"
            });
            $(".move-title-2 p").css({
                "opacity": "1",
                "-webkit-transform": "translateY(0)",
                "-moz-transform": "translateY(0)",
                "-ms-transform": "translateY(0)",
                "-o-transform": "translateY(0)",
                "transform": "translateY(0)"
            });
            $(".move-title-2 .line").css({
                "opacity": "1",
                "-webkit-transform": "translateY(0)",
                "-moz-transform": "translateY(0)",
                "-ms-transform": "translateY(0)",
                "-o-transform": "translateY(0)",
                "transform": "translateY(0)"
            })
        } else {
            $(".move-title-2 h4").css({
                "opacity": "0",
                "-webkit-transform": "translateY(-50%)",
                "-moz-transform": "translateY(-50%)",
                "-ms-transform": "translateY(-50%)",
                "-o-transform": "translateY(-50%)",
                "transform": "translateY(-50%)"
            });
            $(".move-title-2 p").css({
                "opacity": "0",
                "-webkit-transform": "translateY(-50%)",
                "-moz-transform": "translateY(-50%)",
                "-ms-transform": "translateY(-50%)",
                "-o-transform": "translateY(-50%)",
                "transform": "translateY(-50%)"
            });
            $(".move-title-2 .line").css({
                "opacity": "0",
                "-webkit-transform": "translateY(-50%)",
                "-moz-transform": "translateY(-50%)",
                "-ms-transform": "translateY(-50%)",
                "-o-transform": "translateY(-50%)",
                "transform": "translateY(-50%)"
            })
        }
        if ($(window).scrollTop() > $(".section-2 .contain-top").offset().top + $(".section-2 .contain-top").height()) {
            clearInterval(timer);
            timeFn()
        } else {
            clearInterval(timer);
            n = 1;
            $(".decoration-pics-wrap .bg").css({
                left: pos[n - 1].w,
                top: pos[n - 1].h
            })
        }
    });
    $(".decoration-pics-wrap li").on("click", function() {
        $(".decoration-pics-wrap .bg").css({
            left: pos[$(this).index() - 1].w,
            top: pos[$(this).index() - 1].h
        });
        $(".decoration img").attr("src", "images/streamkarFaceEffect/" + $(this).index() + ".png");
        n = $(this).index();
        clearInterval(timer);
        timeFn()
    });
    $(".decoration-pics-wrap li").hover(function() {
        $(this).click();
        $(this).children("img").addClass("decoration-pics-wrap-active");
        clearInterval(timer)
    }, function() {
        $(this).children("img").removeClass("decoration-pics-wrap-active");
        clearInterval(timer);
        timeFn()
    });
    $(".decoration-btn-wrap .decoration-left-btn").on("click", function() {
        n = --n < 1 ? 8 : n;
        $(".decoration img").attr("src", "images/streamkarFaceEffect/" + n + ".png");
        $(".decoration-pics-wrap .bg").css({
            left: pos[n - 1].w,
            top: pos[n - 1].h
        });
        $(".decoration-pics-wrap li img").removeClass("decoration-pics-wrap-active");
        $(".decoration-pics-wrap li:nth-of-type(" + n + ") img").addClass("decoration-pics-wrap-active");
        clearInterval(timer);
        timeFn()
    });
    $(".decoration-btn-wrap .decoration-right-btn").on("click", function() {
        n = ++n > 8 ? 1 : n;
        $(".decoration img").attr("src", "img/face/" + n + ".png");
        $(".decoration-pics-wrap .bg").css({
            left: pos[n - 1].w,
            top: pos[n - 1].h
        });
        $(".decoration-pics-wrap li img").removeClass("decoration-pics-wrap-active");
        $(".decoration-pics-wrap li:nth-of-type(" + n + ") img").addClass("decoration-pics-wrap-active");
        clearInterval(timer);
        timeFn()
    });

    function timeFn() {
        timer = setInterval(function() {
            n = ++n > 8 ? 1 : n;
            $(".decoration img").attr("src", "images/streamkarFaceEffect/" + n + ".png");
            $(".decoration-pics-wrap .bg").css({
                left: pos[n - 1].w,
                top: pos[n - 1].h
            });
            $(".decoration-pics-wrap li img").removeClass("decoration-pics-wrap-active");
            $(".decoration-pics-wrap li:nth-of-type(" + n + ") img").addClass("decoration-pics-wrap-active")
        }, speed)
    }

    function moveTitleAddFn() {
        $(".section-2 .contain-top>div:nth-child(1) h4").css("color", "black");
        $(".section-2 .contain-top>div:nth-child(1) p").css("color", "#9a9a9b");
        $(".section-2 .contain-top>div:nth-child(1) .line").css("background", "#3eb4a8")
    }

    function moveTitleRemoveFn() {
        $(".section-2 .contain-top>div:nth-child(1) h4").css("color", "white");
        $(".section-2 .contain-top>div:nth-child(1) p").css("color", "white");
        $(".section-2 .contain-top>div:nth-child(1) .line").css("background", "white")
    }
    var loverTimer, loveSetTimer1, loveSetTimer2, loveSetTimer3, loveSetTimer4, loveSetTimer5, loveSetTimer5, loveSetTimer6, loveSetTimer7, loveSetTimer8, loveSetTimer9, loveSetTimer10;

    function loveFn() {
        loveSetTimer1 = setTimeout(function() {
            $(".love-wrap").append('<img src="img/' + randNumber(9, 13) + '.png" class="love' + 1 + '"/>')
        }, randNumber(0, 500));
        loveSetTimer2 = setTimeout(function() {
            $(".love-wrap").append('<img src="img/' + randNumber(9, 13) + '.png" class="love' + 2 + '"/>')
        }, randNumber(500, 1500));
        loveSetTimer3 = setTimeout(function() {
            $(".love-wrap").append('<img src="img/' + randNumber(9, 13) + '.png" class="love' + 3 + '"/>')
        }, randNumber(1000, 2000));
        loveSetTimer4 = setTimeout(function() {
            $(".love-wrap").append('<img src="img/' + randNumber(9, 13) + '.png" class="love' + 4 + '"/>')
        }, randNumber(2000, 3000));
        loveSetTimer5 = setTimeout(function() {
            $(".love-wrap").append('<img src="img/' + randNumber(9, 13) + '.png" class="love' + 5 + '"/>')
        }, randNumber(1500, 2500));
        loverTimer = setInterval(function() {
            loveSetTimer6 = setTimeout(function() {
                $(".love-wrap").append('<img src="img/' + 9 + '.png" class="love' + randNumber(1, 5) + '"/>')
            }, randNumber(1000, 3500));
            loveSetTimer7 = setTimeout(function() {
                $(".love-wrap").append('<img src="img/' + 10 + '.png" class="love' + randNumber(1, 5) + '"/>')
            }, randNumber(1000, 3500));
            loveSetTimer8 = setTimeout(function() {
                $(".love-wrap").append('<img src="img/' + 11 + '.png" class="love' + randNumber(1, 5) + '"/>')
            }, randNumber(1000, 3500));
            loveSetTimer9 = setTimeout(function() {
                $(".love-wrap").append('<img src="img/' + 12 + '.png" class="love' + randNumber(1, 5) + '"/>')
            }, randNumber(1000, 3500));
            loveSetTime10 = setTimeout(function() {
                $(".love-wrap").append('<img src="img/' + 13 + '.png" class="love' + randNumber(1, 5) + '"/>')
            }, randNumber(1000, 3500));
            if ($(".love-wrap img").length > 3) {
                clearInterval(loverTimer)
            }
        }, 2500)
    }
    loveFn();
    var hidden, state, visibilityChange;
    var lock = true;
    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
        state = "visibilityState"
    } else if (typeof document.mozHidden !== "undefined") {
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange";
        state = "mozVisibilityState"
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
        state = "msVisibilityState"
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
        state = "webkitVisibilityState"
    }

    function clearTimerFn() {
        clearInterval(loverTimer);
        clearTimeout(loveSetTimer1);
        clearTimeout(loveSetTimer2);
        clearTimeout(loveSetTimer3);
        clearTimeout(loveSetTimer4);
        clearTimeout(loveSetTimer5);
        clearTimeout(loveSetTimer6);
        clearTimeout(loveSetTimer7);
        clearTimeout(loveSetTimer8);
        clearTimeout(loveSetTimer9);
        clearTimeout(loveSetTimer10)
    }
    document.addEventListener(visibilityChange, function() {
        if (lock) {
            clearTimerFn();
            $(".love-wrap").empty();
            lock = false
        } else {
            clearTimerFn();
            loveFn();
            lock = true
        }
    }, false);
    var val = "en";
    var info = {
        en: {
            facebook: "https://www.facebook.com/kitty.live.EN/",
            linkedin: "javascript:void(0);",
            instagram: "https://www.instagram.com/kittyliveth/",
            youtube: "javascript:void(0);",
            email: "mailto:support.en@kitty.live.com",
            title: {
                headTitle: "Always Be With You",
                title1: {
                    top: "MANIFOLD OPTIONS",
                    bottom: "Streamkar blows your mind by offering live broadcast that you have never seen."
                },
                title2: {
                    top: "",
                    bottom: "Try to pick your favorite profile photo from Streamkar Face now, have a better performance while live broadcasting"
                }
            }
        },
        th: {
            facebook: "https://www.facebook.com/kitty.live.th/",
            linkedin: "javascript:void(0);",
            instagram: "https://www.instagram.com/kittyliveth/",
            youtube: "https://www.youtube.com/channel/UCNGvQC8rKDEUKuAUjGdjyIA",
            email: "mailto:support.th@kitty.live.com",
            title: {
                headTitle: "à¹ƒà¸«à¹‰à¹€à¸£à¸²à¸­à¸¢à¸¹à¹ˆà¹€à¸„à¸µà¸¢à¸‡à¸‚à¹‰à¸²à¸‡à¸„à¸¸à¸“ à¸—à¸¸à¸à¸—à¸µà¹ˆ à¸—à¸¸à¸à¹€à¸§à¸¥à¸²",
                title1: {
                    top: "à¹€à¸™à¸·à¹‰à¸­à¸«à¸²à¹ƒà¸™à¹à¸­à¸žà¸¥à¸´à¹€à¸„à¸Šà¸±à¸™à¸—à¸µà¹ˆà¸«à¸¥à¸²à¸à¸«à¸¥à¸²à¸¢",
                    bottom: "à¸«à¸²à¸à¸„à¸¸à¸“à¹€à¸šà¸·à¹ˆà¸­à¸à¸±à¸šà¸à¸²à¸£à¸­à¸­à¸™à¹„à¸¥à¸™à¹Œà¹à¸šà¸šà¹€à¸”à¸´à¸¡à¹† à¸¡à¸²à¹€à¸›à¸´à¸”à¸›à¸£à¸°à¸ªà¸šà¸à¸²à¸£à¸“à¹Œà¹ƒà¸«à¸¡à¹ˆà¹„à¸›à¸à¸±à¸šà¹€à¸£à¸²"
                },
                title2: {
                    top: "",
                    bottom: "à¹€à¸žà¸·à¹ˆà¸­à¹ƒà¸«à¹‰à¸à¸²à¸£à¹„à¸¥à¸Ÿà¹Œà¸‚à¸­à¸‡à¸„à¸¸à¸“à¸¡à¸µà¸Šà¸µà¸§à¸´à¸•à¸Šà¸µà¸§à¸² à¹à¸•à¹ˆà¸‡à¹à¸•à¹‰à¸¡à¸ªà¸µà¸ªà¸±à¸™à¹ƒà¸«à¹‰à¸¡à¸²à¸à¸‚à¸¶à¹‰à¸™ à¸œà¹ˆà¸²à¸™à¸Ÿà¸±à¸‡à¸à¹Œà¸Šà¸±à¹ˆà¸™à¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸ˆà¸±à¸šà¹ƒà¸šà¸«à¸™à¹‰à¸²à¸‚à¸­à¸‡à¸„à¸¸à¸“à¸‚à¸“à¸°à¹„à¸¥à¸Ÿà¹Œ à¹€à¸¥à¸·à¸­à¸à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¹„à¸”à¹‰ à¸•à¸²à¸¡à¸Šà¸­à¸šà¹ƒà¸ˆ"
                }
            }
        },
        id: {
            facebook: "https://www.facebook.com/kitty.live.ID/",
            linkedin: "javascript:void(0);",
            instagram: "https://www.instagram.com/kitty.live.id/",
            youtube: "javascript:void(0);",
            email: "mailto:support.id@kitty.live.com",
            title: {
                headTitle: "Always be with you",
                title1: {
                    top: "Beragam Pilihan",
                    bottom: "Streamkar memberikan pengalaman yang lebih menyenangkan dari apa yang sudah pernah kamu lihat."
                },
                title2: {
                    top: "",
                    bottom: "Pilih foto profil favorit kamu dari Kitty Face sekarang, dan jadilah diri kamu yang unik dan lucu saat siaran"
                }
            }
        },
        sp: {
            facebook: "https://www.facebook.com/kitty.live.SP/",
            linkedin: "javascript:void(0);",
            instagram: "https://www.instagram.com/kittyliveth/",
            youtube: "javascript:void(0);",
            email: "mailto:support.sp@kitty.live.com",
            title: {
                headTitle: "Siempre contigo",
                title1: {
                    top: "MÃºltiple opciones",
                    bottom: "Streamkar te refresca la mente a travÃ©s de videos en vivo , experiencia que nuncas has vivido."
                },
                title2: {
                    top: "",
                    bottom: "Escoge tu favorita mÃ¡scara de Streamkar Face para tu perfil para tener mejor desempeÃ±o en la emisiÃ³n cada vez que vas a hacer."
                }
            }
        }
    };
    $("#language").on("click", function(event) {
        event.stopPropagation();
        $("#language-wrap").show()
    });
    $(document).on("click", function() {
        $("#language-wrap").hide()
    });
    $("#language-wrap").on("click", function(event) {
        val = event.target.lang;
        languageFn();
        $("#language-wrap").hide()
    });

    function languageFn() {
        $("#language").html($("#language-wrap li[lang='" + val + "']").html());
        if (val == "en") {
            $(".brand-wrap .youtube-btn").hide();
            $(".brand-wrap .in-btn").hide();
            $(".brand-wrap .fb-btn").show().attr("href", info.en.facebook);
            $(".brand-wrap .ins-btn").show().attr("href", info.en.instagram);
            $(".brand-wrap .email-btn").show().attr("href", info.en.email);
            $(".top .top-fa").attr("href", info.en.facebook);
            $(".top .top-ins").attr("href", info.en.instagram);
            $("#top-text").text(info.en.title.headTitle);
            $(".section-1 .contain-top h4").text(info.en.title.title1.top);
            $(".section-1 .contain-top p").text(info.en.title.title1.bottom);
            $(".section-2 .contain-top p").text(info.en.title.title2.bottom);
            $(".section-2 .contain-top>div:nth-child(1) h4").css("font-weight", "100")
        } else if (val == "th") {
            $(".brand-wrap .fb-btn").show().attr("href", info.th.facebook);
            $(".brand-wrap .in-btn").show().attr("href", info.th.linkedin);
            $(".brand-wrap .ins-btn").show().attr("href", info.th.instagram);
            $(".brand-wrap .youtube-btn").show().attr("href", info.th.youtube);
            $(".brand-wrap .email-btn").show().attr("href", info.th.email);
            $(".top .top-fa").attr("href", info.th.facebook);
            $(".top .top-ins").attr("href", info.th.instagram);
            $("#top-text").text(info.th.title.headTitle);
            $(".section-1 .contain-top h4").text(info.th.title.title1.top);
            $(".section-1 .contain-top p").text(info.th.title.title1.bottom);
            $(".section-2 .contain-top p").text(info.th.title.title2.bottom);
            $(".section-2 .contain-top>div:nth-child(1) h4").css("font-weight", "900");
            if (!IsPC()) {
                if ($(window).width() < 420) {
                    $(".section-1 .contain-top h4").css("font-size", "20px")
                } else if ($(window).width() < 820) {
                    $(".section-1 .contain-top h4").css("font-size", "40px")
                }
            }
        } else if (val == "id") {
            $(".brand-wrap .fb-btn").show().attr("href", info.id.facebook);
            $(".brand-wrap .in-btn").show().attr("href", info.id.linkedin);
            $(".brand-wrap .ins-btn").show().attr("href", info.id.instagram);
            $(".brand-wrap .youtube-btn").hide();
            $(".brand-wrap .email-btn").show().attr("href", info.id.email);
            $(".top .top-fa").attr("href", info.id.facebook);
            $(".top .top-ins").attr("href", info.id.instagram);
            $("#top-text").text(info.id.title.headTitle);
            $(".section-1 .contain-top h4").text(info.id.title.title1.top);
            $(".section-1 .contain-top p").text(info.id.title.title1.bottom);
            $(".section-2 .contain-top p").text(info.id.title.title2.bottom);
            $(".section-2 .contain-top>div:nth-child(1) h4").css("font-weight", "100")
        } else if (val == "sp") {
            $(".brand-wrap .fb-btn").show().attr("href", info.sp.facebook);
            $(".brand-wrap .in-btn").hide();
            $(".brand-wrap .ins-btn").show().attr("href", info.sp.instagram);
            $(".brand-wrap .youtube-btn").hide();
            $(".brand-wrap .email-btn").show().attr("href", info.sp.email);
            $(".top .top-fa").attr("href", info.sp.facebook);
            $(".top .top-ins").attr("href", info.sp.instagram);
            $("#top-text").text(info.sp.title.headTitle);
            $(".section-1 .contain-top h4").text(info.sp.title.title1.top);
            $(".section-1 .contain-top p").text(info.sp.title.title1.bottom);
            $(".section-2 .contain-top p").text(info.sp.title.title2.bottom);
            $(".section-2 .contain-top>div:nth-child(1) h4").css("font-weight", "100")
        }
    }
    languageFn()
});