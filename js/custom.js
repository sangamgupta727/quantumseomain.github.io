function package_signup(e, a) {
    $("#signupletscon").show(), $("#packMessage").html(""), $("#show-form").fadeIn("slow"), $("form#signupletscon input[name=packagetitle]").val(e), $("form#signupletscon input[name=packagetype]").val(a)
}

function package_insta_mojo_buy(e, a) {
    $("form#instamojo-signupletscon select option").hide();
    $("form#instamojo-signupletscon select option").attr('disabled','disabled');
    $("form#instamojo-signupletscon select").val('');
    $("#instamojo-signupletscon").show(), $("#instamojo-packMessage").html(""), $("#show-instamojo-form").fadeIn("slow"), $("form#instamojo-signupletscon input[name=packagetitle]").val(e), $("form#instamojo-signupletscon input[name=product_name]").val(a);
    $("form#instamojo-signupletscon select option.op-"+a.toLowerCase()).show();
     $("form#instamojo-signupletscon select option.op-"+a.toLowerCase()).removeAttr('disabled');
}

function xyz() {
    $(".case-study-slider").owlCarousel({
        dots: !0,
        nav: !1,
        loop: !0,
        mouseDrag: !0,
        margin: 0,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        responsiveClass: !0,
        responsiveRefreshRate: 1,
        responsive: {
            0: {
                items: 1,
                loop: !0
            },
            767: {
                items: 1,
                loop: !0
            }
        }
    })
}
$(document).ready(function() {
    $("#casestudy").mouseleave(function() {
        xyz()
    }), $(".spinner").addClass("loaded"), $(".overlay").addClass("loaded")
}), $(".close-frm, .close-package-form").click(function() {
    $("#show-form, #show-instamojo-form").fadeOut("slow")
}),$(".insta-mojo-5555").click(function() {
    $(" #show-instamojo-form").fadeIn("slow")
})
$(".seo-result-slide").owlCarousel({
    dots: !1,
    nav: !1,
    loop: !0,
    autoplayTimeout: 3500,
    autoplayHoverPause: !0,
    responsiveClass: !0,
    margin: 0,
    autoplay: !0,
    items: 1
}), $(".industitries").owlCarousel({
    dots: !1,
    nav: !1,
    loop: !0,
    autoplayTimeout: 3500,
    autoplayHoverPause: !0,
    responsiveClass: !0,
    margin: 0,
    autoplay: !0,
    items: 1
}), $(".testimonials").owlCarousel({
    dots: !1,
    nav: !1,
    loop: !0,
    margin: 0,
    items: 1,
    autoplay: !0,
    autoplayTimeout: 3500,
    autoplayHoverPause: !0
}), $(".testimonials-slide").owlCarousel({
    dots: !1,
    nav: !0,
    loop: !0,
    margin: 10,
    items: 4,
    autoplay: !0,
    autoplayTimeout: 3500,
    autoplayHoverPause: !0
}), $(".single-project").owlCarousel({
    dots: !1,
    nav: !0,
    loop: !0,
    margin: 0,
    items: 1,
    autoplay: !0,
    autoplayTimeout: 2500,
    autoplayHoverPause: !0
}), $(".owl-client").owlCarousel({
    dots: !1,
    nav: !1,
    loop: !0,
    margin: 0,
    autoplay: !0,
    autoplayTimeout: 2500,
    autoplayHoverPause: !0,
    responsive: {
        0: {
            items: 1,
            loop: !0
        },
        767: {
            items: 7,
            loop: !0
        }
    }
}), $(".service-slider").owlCarousel({
    dots: !1,
    nav: !0,
    loop: !0,
    margin: 0,
    autoplay: !0,
    autoplayTimeout: 3500,
    autoplayHoverPause: !0,
    responsive: {
        0: {
            items: 1,
            loop: !0
        },
        767: {
            items: 3,
            loop: !0
        }
    }
});
var owl = $(".case-study-slider");

function validatePhone(e) {
    return !!/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/.test(e)
}

function package_signuplets_form_validation(e) {
    var a = document.createElement("script"),
        t = document.createTextNode("gtag('event', 'conversion', {'send_to': 'AW-973940760/H2QICLKt8o8BEJjQtNAD'})");
    a.appendChild(t);
    var o = "form#" + e,
        s = $(o + " input[name=name]").val(),
        n = $(o + " input[name=email]").val(),
        i = $(o + " input[name=phone]").val(),
        l = $(o + " input[name=website]").val(),
        r = $(o + " textarea[name=message]").val(),
        u = $(o + " input[name=packagetype]").val(),
        c = $(o + " input[name=packagetitle]").val(),
        p = $(o + " input[name=current_page_url]").val();
    return $("#packMessage").removeClass("success").addClass("error"), "" == s.trim() ? ($("#packMessage").text("Please Enter Your Name"), $(o + " input[name=name]").focus(), !1) : "" == n.trim() ? ($("#packMessage").text("Please Enter Your Email"), $(o + " input[name=email]").focus(), !1) : /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(n) ? "" == i.trim() ? ($("#packMessage").text("Please Enter Your Phone Number"), $(o + " input[name=phone]").focus(), !1) : validatePhone(i) ? "" == l.trim() ? ($("#packMessage").text("Please Enter Your Website"), $(o + " input[name=website]").focus(), !1) : ($("#packMessage").html("Please Wait..."), $(o + ' :input[type="submit"]').prop("disabled", !0), $.ajax({
        type: "POST",
        url: "includes/form-process.php",
        data: "name=" + s + "&form_type=package&phone=" + i + "&website=" + l + "&packagetype=" + u + "&packagetitle=" + c + "&current_page_url=" + p + "&email=" + n + "&message=" + r,
        success: function(e) {
            "success" == e ? ($("#packMessage").text("Thank you for contacting us we will get back to you soon."), gtag("event", "conversion", {
                send_to: "AW-973940760/H2QICLKt8o8BEJjQtNAD"
            }), document.getElementsByTagName("head")[0].appendChild(a), ga("send", "event", "package-form", "Request", "package.html"), window.location.href = "https://www.ezrankings.org/thank-you.html", $(o + ' :input[type="submit"]').prop("disabled", !1), $("#packMessage").removeClass("error").addClass("success")) : $("#packMessage").text("Sorry there was an error sending your form."), $(o + " input[name=name]").val(""), $(o + " input[name=phone]").val(""), $(o + " input[name=website]").val(""), $(o + " input[name=email]").val(""), $(o + " textarea[name=message]").val(""), $(o).hide()
        }
    }), !1) : ($("#packMessage").text("Please Enter Valid Phone Number"), $(o + " input[name=phone]").focus(), !1) : ($("#packMessage").text("Please Enter Valid Email Address"), $(o + " input[name=email]").focus(), !1)
}
$(".case-study-slider").owlCarousel({
    dots: !0,
    nav: !1,
    loop: !0,
    mouseDrag: !0,
    margin: 0,
    autoplay: !0,
    autoplayTimeout: 3e3,
    autoplayHoverPause: !0,
    responsiveClass: !0,
    responsiveRefreshRate: 1,
    responsive: {
        0: {
            items: 1,
            loop: !0
        },
        767: {
            items: 1,
            loop: !0
        }
    }
}), $(document).ready(function() {
    $(window).scroll(function() {
        $(this).scrollTop() > 100 ? $("#scroll").fadeIn() : $("#scroll").fadeOut()
    }), $("#scroll").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 600), !1
    })
}), $(document).ready(function() {
    $(window).scroll(function() {
       $(this).scrollTop() > 300 ? $(".ftr_cta_blk, .google-rating-1, #alert-box").fadeIn() : $(".ftr_cta_blk, .google-rating-1, #alert-box").fadeOut()
    })
}), jQuery(window).scroll(function() {
    var e = jQuery(".fix-header");
    jQuery(window).scrollTop() >= 40 ? e.addClass("sticky") : e.removeClass("sticky")
}), $(document).ready(function() {
    setTimeout(function() {
        $('[data-toggle="tooltip"]').tooltip()
    }, 100), $('[data-toggle="tooltip"]').mouseleave(function() {
        $(this).tooltip("hide")
    })
}), $(".top-nav .bg-light ul li a").attr("data-toggle", "tooltip"), $(".top-nav .bg-light ul li a").attr("data-placement", "right"), $(document).ready(function() {
    $(".top-nav .bg-light ul li a").tooltip({
        delay: {
            show: 2e3,
            hide: 500
        }
    })
}), $(document).ready(function() {
    $(".accordion_head").click(function() {
        $(".accordion_body").is(":visible") && ($(".accordion_body").slideUp(300), $(".plusminus").text("+")), $(this).next(".accordion_body").is(":visible") ? ($(this).next(".accordion_body").slideUp(300), $(this).children(".plusminus").text("+")) : ($(this).next(".accordion_body").slideDown(300), $(this).children(".plusminus").text("_"))
    })
}), $("#read-more").click(function() {
    $(".readmoretxt").toggle()
}), $(".menu li").click(function() {
    var e = $(this).attr("data-filter");
    $(".items-wrapper").isotope({
        filter: e
    }), $(".menu li.active").removeClass("active"), $(this).addClass("active")
}), $(document).ready(function() {
    $(".items-wrapper").isotope({
        itemSelector: ".item"
    }), $(".menu li").on("click", "li", function() {
        var e = $(this).attr("data-filter");
        $(".items-wrapper").isotope({
            filter: e
        }), $(".menu li").removeClass("active"), $(this).addClass("active")
    })
}), jQuery(window).scroll(function() {
    var e = (jQuery(document).height() - jQuery(window).height() - jQuery(window).scrollTop()) / 800;
    e <= 0 ? jQuery(".port-details").fadeOut() : jQuery(".port-details").fadeIn("400"), jQuery(".port-details").css("opacity", e)
}), $(document).ready(function() {
    $("ul.navbar-nav li:nth-child(2) a").addClass("nav-link-list"), $("ul.navbar-nav li:nth-child(4) a").addClass("nav-link-list"), $("ul.navbar-nav li:nth-child(5) a").addClass("nav-link-list"), $("ul.navbar-nav li:nth-child(6) a").addClass("nav-link-list"), $("ul.navbar-nav li:nth-child(7) a").addClass("nav-link-list"), $("ul.navbar-nav li:nth-child(8) a").addClass("nav-link-list"), $("ul.dropdown li a ").removeClass("nav-link-list")
}), $(document).ready(function() {
    $(".nav-item").each(function() {
        var e = $(this);
        $("a.nav-link-list", e).click(function(a) {
            return a.preventDefault(), $div = $(".dropdown", e), $div.toggle(), $(".dropdown").not($div).hide(), !1
        })
    }), $("body").click(function() {
        $("#navbarSupportedContent .dropdown").hide()
    })
}), $(document).ready(function() {
    $(".top-menu.float-right ul li").click(function() {
        $(".top-menu.float-right .dropdown").css("display", "block")
    })
}), jQuery(document).ready(function() {
    jQuery(".toggle").click(function() {
        jQuery(".sidebar-contact").toggleClass("active"), jQuery(".toggle").toggleClass("active")
    })
});




var a, b, c,
    submitContent,
    captcha,
    locked,
    validSubmit = false,
    timeoutHandle;

  // Generating a simple sum (a + b) to make with a result (c)
function generateCaptcha(){
  a = Math.ceil(Math.random() * 10);
  b = Math.ceil(Math.random() * 10);
  c = a + b;
  submitContent = '<span>' + a + '</span> + <span>' + b + '</span>' +
    ' = <input class="submit__input" type="text" maxlength="2" size="2" required />';
  $('.submit__generated').html(submitContent);

  init();
}


// Check the value 'c' and the input value.
function checkCaptcha(){
  if(captcha === c){
    // Pop the green valid icon
    $('.submit__generated')
      .removeClass('unvalid')
      .addClass('valid');
    $('.submit').removeClass('overlay');
    $('.submit__overlay').fadeOut('fast');

    $('.submit__error').addClass('hide');
    $('.submit__error--empty').addClass('hide');
    validSubmit = true;
  }
  else {
    if(captcha === ''){
      $('.submit__error').addClass('hide');
      $('.submit__error--empty').removeClass('hide');
    }
    else {
      $('.submit__error').removeClass('hide');
      $('.submit__error--empty').addClass('hide');
    }
    // Pop the red unvalid icon
    $('.submit__generated')
      .removeClass('valid')
      .addClass('unvalid');
    $('.submit').addClass('overlay');
    $('.submit__overlay').fadeIn('fast');
    validSubmit = false;
  }
  return validSubmit;
}

function unlock(){ locked = false; }


// Refresh button click - Reset the captcha
$('.submit__control i.fa-refresh').on('click', function(){
  if (!locked) {
    locked = true;
    setTimeout(unlock, 500);
    generateCaptcha();
    setTimeout(checkCaptcha, 0);
  }
});


// init the action handlers - mostly useful when 'c' is refreshed
function init(){
	$('form#letsconnect_form').on('submit', function(e){
		e.preventDefault();
		if($('.submit__generated').hasClass('valid')){
		  // var formValues = [];
		  captcha = $('form#letsconnect_form .submit__input').val();
		  if(captcha !== ''){
			captcha = Number(captcha);
		  }

		  checkCaptcha();

		  if(validSubmit === true){
			validSubmit = false;
			// Temporary direct 'success' simulation
			// submitted();
		  }
		}
		else {
		  return false;
		}
	});

	// Captcha input result handler
	$('form#letsconnect_form .submit__input').on('propertychange change keyup input paste', function(){
		// Prevent the execution on the first number of the string if it's a 'multiple number string'
		// (i.e: execution on the '1' of '12')
		window.clearTimeout(timeoutHandle);
		timeoutHandle = window.setTimeout(function(){
		  captcha = $('form#letsconnect_form .submit__input').val();
		  if(captcha !== ''){
			captcha = Number(captcha);
		  }
		  checkCaptcha();
		},150);
	});

	// Add the ':active' state CSS when 'enter' is pressed
	$('form#letsconnect_form')
    .on('keydown', function(e) {
      if (e.which === 13) {
        if($('.submit-form').hasClass('overlay')){
          checkCaptcha();
        } else {
          $('.submit-form').addClass('enter-press');
        }
      }
    })
    .on('keyup', function(e){
      if (e.which === 13) {
        $('.submit-form').removeClass('enter-press');
      }
    });
}

generateCaptcha();


$(document).on({
    "contextmenu": function(e) {
        console.log("ctx menu button:", e.which); 

        // Stop the context menu
        e.preventDefault();
    },
    "mousedown": function(e) { 
        console.log("normal mouse down:", e.which); 
    },
    "mouseup": function(e) { 
        console.log("normal mouse up:", e.which); 
    }
});

$("#seobtn-move").click(function() {
 $('html, body').animate({
    scrollTop: $("#seo-packages-section").offset().top
 }, 500);
});
$(" .hero-btn a").click(function() {
 $('html, body').animate({
    scrollTop: $("#faq-section").offset().top
 }, 500);
});


$(document).ready(function() {
    var s = $("#seo-packages-section");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top & windowpos <=1700) {
            s.addClass("stick", 2000);
        } else {
            s.removeClass("stick", 2000); 
        }
    });
});

$(document).ready(function() {
    var s = $("#faq-section");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top & windowpos <=5000) {
            s.addClass("stick");
        } else {
            s.removeClass("stick"); 
        }
    });
});