! function(e, i, t, a) {
    "use strict";

    function n() {
        l = e(i).width(), p = e(i).height()
    }

    function s() {
        n(), e('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function() {
            var i = u["swiper-" + e(this).attr("id")],
                t = e(this),
                a = c(t),
                n = i.params.centeredSlides;
            if (i.params.slidesPerView = a, i.reInit(), !n) {
                var s = t.find(".pagination span"),
                    o = s.hide().slice(0, s.length + 1 - a);
                o.length <= 1 || a >= t.find(".swiper-slide").length ? t.addClass("pagination-hidden") : t.removeClass("pagination-hidden"), o.show()
            }
        })
    }

    function o() {
        var t = e(".wpc-navigation"),
            a = e(".site-header").find(".header-top");
        e(i).scrollTop() > a.outerHeight() ? t.addClass("sticky") : t.removeClass("sticky")
    }

    function r() {
        var i = 0;
        e(".swiper-container").each(function() {
            var t = e(this),
                a = "swiper-unique-id-" + i;
            t.addClass("swiper-" + a + " initialized").attr("id", a), t.find(".pagination").addClass("pagination-" + a);
            var n = parseInt(t.attr("data-autoplay"), 10),
                s = t.attr("data-mode"),
                o = t.attr("data-slides-per-view");
            o = "responsive" == o ? c(t) : parseInt(o, 10);
            var r = parseInt(t.attr("data-loop"), 10),
                d = parseInt(t.attr("data-speed"), 10),
                l = parseInt(t.attr("data-center"), 10);
            if (u["swiper-" + a] = new Swiper(".swiper-" + a, {
                    speed: d,
                    pagination: ".pagination-" + a,
                    loop: r,
                    paginationClickable: !0,
                    autoplay: n,
                    slidesPerView: o,
                    keyboardControl: !0,
                    calculateHeight: !0,
                    simulateTouch: !0,
                    roundLengths: !0,
                    centeredSlides: l,
                    mode: s || "horizontal",
                    onInit: function(e) {},
                    onSlideChangeEnd: function(e) {
                        1 === r ? e.activeLoopIndex : e.activeIndex
                    },
                    onSlideChangeStart: function(i) {
                        t.find(".swiper-slide.active").removeClass("active");
                        var a = +t.find(".swiper-slide-active").attr("data-i"),
                            n = e(".featured-tab"),
                            s = n.parent().parent();
                        s.find(".featured-tab").removeClass("active"), s.children().eq(a).find(".featured-tab").addClass("active")
                    }
                }), u["swiper-" + a].reInit(), "responsive" == t.attr("data-slides-per-view")) {
                var p = t.find(".pagination span"),
                    f = p.hide().slice(0, p.length + 1 - o);
                f.length <= 1 || o >= t.find(".swiper-slide").length ? t.addClass("pagination-hidden") : t.removeClass("pagination-hidden"), f.show()
            }
            t.find(".default-active").length && u["swiper-" + a].swipeTo(t.find(".swiper-slide").index(t.find(".default-active")), 0), i++
        })
    }

    function c(e) {
        return l >= g ? parseInt(e.attr("data-add-slides"), 10) : l >= v ? parseInt(e.attr("data-lg-slides"), 10) : l >= h ? parseInt(e.attr("data-md-slides"), 10) : l >= f ? parseInt(e.attr("data-sm-slides"), 10) : parseInt(e.attr("data-xs-slides"), 10)
    }

    function d(i, t) {
        if (!i) return console.info("no img selector"), !1;
        var a, n, s;
        e(i).each(function() {
            s = e(this), n = s.data("s-hidden"), a = s.closest(t), a = a.length ? a : s.parent(), a.css("background-image", "url(" + this.src + ")").addClass("wpc-back-bg"), n ? s.css("visibility", "hidden") : s.hide()
        })
    }
    var l, p, u = [],
        f = 768,
        h = 992,
        v = 1200,
        g = 1600,
        w = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);
    n(), d(".wpc-bg-img"), e(".c-page-banner").length && e(".c-page-banner").addClass("rendered"), e(i).on("load", function() {
        r(), e(".jstf-gallery").length && e(".jstf-gallery").justifiedGallery({
            margins: 10,
            captions: !1,
            rowHeight: 200
        }), e(".jstf-gallery").justifiedGallery().on("jg.complete", function(i) {
            e(".popup-gallery").length && e(".popup-gallery").lightGallery({
                loop: !1,
                hideControlOnEnd: !0,
                download: !1,
                thumbnail: !1
            })
        }), e(".popup-img").length && e(".popup-img").lightGallery({
            loop: !1,
            selector: "this",
            download: !1
        })
    }), e(i).on("scroll", function() {
        o()
    }), e(i).on("resize", function() {
        e(i).width() > 767 ? e("html").css({
            "overflow-x": "hidden",
            "overflow-y": "auto"
        }) : e(i).width() <= 767 && e(".wpc-navigation").hasClass("active") && e("html").css("overflow", "hidden")
    }), w ? i.addEventListener("orientationchange", function() {
        s()
    }, !1) : e(i).resize(function() {
        s()
    });
    var m = e(".menu-item-has-children > a").append('<span class="fa fa-angle-down"></span>');
    e(".nav-menu-icon").on("click", function(i) {
        e(this).toggleClass("active"), e(".wpc-navigation").toggleClass("active"), e(".wpc-navigation").hasClass("active") ? e("html").css("overflow", "hidden") : e("html").css({
            "overflow-x": "hidden",
            "overflow-y": "auto"
        })
    }), m.find("span").on("click", function(i) {
        e(this).closest("li").toggleClass("active")
    }), e(".swiper-arrow-left").on("click", function() {
        u["swiper-" + e(this).parent().attr("id")].swipePrev()
    }), e(".swiper-arrow-right").on("click", function() {
        u["swiper-" + e(this).parent().attr("id")].swipeNext()
    }), e(".swiper-outer-left").on("click", function() {
        u["swiper-" + e(this).parent().find(".swiper-container").attr("id")].swipePrev()
    }), e(".swiper-outer-right").on("click", function() {
        u["swiper-" + e(this).parent().find(".swiper-container").attr("id")].swipeNext()
    }), e(".featured-tab").on("click", function() {
        var i = e(this),
            t = i.parent().index(),
            a = i.parent().parent();
        return a.find(".featured-tab").removeClass("active"), i.addClass("active"), e(".c-tabs-slider").find(".pagination .swiper-pagination-switch").eq(t).click(), !1
    }), e(".second-menu-icon").on("click", function() {
        e(".c-sidepop").fadeIn(function() {
            e(".close-sidepop").fadeIn(200)
        }), setTimeout(function() {
            e(".c-sidepop").addClass("active")
        }, 0)
    }), e(".close-sidepop").on("click", function() {
        e(".c-sidepop").removeClass("active").fadeOut(), e(".close-sidepop").hide()
    }), e(".c-sidepop").on("click", function(i) {
        var t = i.target;
        t == this && (e(this).removeClass("active").fadeOut(), e(".close-sidepop").hide())
    }), e(".js-contact-form").submit(function(i) {
        function t(i, t) {
            setTimeout(function() {
                e(".ajax-result").find(i).show().text(t)
            }, 500)
        }
        var a = "mail.php",
            n = this;
        e(n).find('[name="fields[code]"]').remove(), e.ajax({
            type: "POST",
            url: a,
            data: e(n).serialize()
        }).done(function(i) {
            var a = e.parseJSON(i);
            a instanceof Array ? (e(".wpc-tooltip").tooltipster("hide"), e(a[0]).tooltipster("show"), e(".success").hide()) : (t(".success", i), e(".wpc-tooltip").tooltipster("hide"), e(".wpc-tooltip").val(""))
        }).error(function(e) {
            t(".error", e)
        }), i.preventDefault()
    }), e(".wpc-tooltip").tooltipster({
        trigger: "custom",
        position: "bottom-left"
    }), e(".c-form-inp input").on("focus", function() {
        e(this).tooltipster("hide")
    }), e(".header-options .fa-search").on("click", function() {
        return e(".search-popup").addClass("open"), !1
    }), e(".search-form .close").on("click", function() {
        return e(".search-popup").removeClass("open"), !1
    }), e(".input").focusin(function() {
        e(".input-field").addClass("active")
    }), e(".input").focusout(function() {
        e(".input-field").removeClass("active")
    }), e(".search-popup").on("click", function(i) {
        var t = i.target;
        t == this && (e(this).removeClass("open"), e(".input-field").removeClass("active"))
    }), e(t).on("keyup", function(i) {
        27 == i.keyCode && (e(".c-sidepop").hasClass("active") && (e(".c-sidepop").removeClass("active").fadeOut(), e(".close-sidepop").hide()), e(".search-popup").hasClass("open") && e(".search-popup").removeClass("open"))
    }), e(".scroll-to-id").on("click", function(i) {
        i.preventDefault();
        var t = e(this).attr("href");
        e("html, body").animate({
            scrollTop: e(t).offset().top - 50
        }, 750)
    }), e(".like-btn").on("click", function() {
        return e(this).toggleClass("active"), !1
    })
}(jQuery, window, document);