
(function($) {
    "use strict";
    
    
    $(document).on ('ready', function (){
        
        // -------------------- Navigation Scroll
        $(window).on('scroll', function (){   
          var sticky = $('.theme-menu-wrapper'),
          scroll = $(window).scrollTop();
          if (scroll >= 190) sticky.addClass('fixed');
          else sticky.removeClass('fixed');

        });

        // ------------------------------ Theme Menu 
        var menu= $("#mega-menu-holder");
          if(menu.length) {
            menu.slimmenu({
              resizeWidth: '991',
              animSpeed:'medium',
              indentChildren: true,
            });
          }


        // ------------------------------- WOW Animation 
        var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       80,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();


        
        // -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });     
        });
        
        // -------------------- From Bottom to Top Button
            //Check to see if the window is top if not then display button
        $(window).on('scroll', function (){
          if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
          } else {
            $('.scroll-top').fadeOut();
          }
        });
            //Click event to scroll to top
        $('.scroll-top').on('click', function() {
          $('html, body').animate({scrollTop : 0},1500);
          return false;
        });



        // --------------------------- Theme Main Banner Slider One
        var banner = $("#theme-main-banner");
        if (banner.length) {
          banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
            height: '780px',
            pagination: true,
            navigation: false,
            thumbnails: false,
            playPause: false,
            pauseOnClick: false,
            autoPlay:true,
            hover: false,
            overlayer: true,
            loader: 'none',
            minHeight: '400px',
            time: 6000,
          });
        };





        // ----------------------------- Counter Function
        var timer = $('.timer');
        if(timer.length) {
            timer.appear(function () {
              timer.countTo();
          })
        }

        // ------------------------------------- Fancybox
        var fancy = $ (".fancybox");
        if(fancy.length) {
          fancy.fancybox({
            arrows: true,
            animationEffect: "zoom-in-out",
            transitionEffect: "zoom-in-out",
          });
        }


         // ------------------------------ Language Switcher
         var plang = $('#polyglotLanguageSwitcher');
         if (plang.length) {
              plang.polyglotLanguageSwitcher({
                effect: 'fade',
                        testMode: true,
                        onChange: function(evt){
                            alert("The selected language is: "+evt.selectedItem);
                        }
                      //      ,afterLoad: function(evt){
                      //          alert("The selected language has been loaded");
                      //      },
                      //      beforeOpen: function(evt){
                      //          alert("before open");
                      //      },
                      //      afterOpen: function(evt){
                      //          alert("after open");
                      //      },
                      //      beforeClose: function(evt){
                      //          alert("before close");
                      //      },
                      //      afterClose: function(evt){
                      //          alert("after close");
                      //      }
              });
          };


        // ------------------------------- Feature Slider
        var tSlider = $ (".top-features-slide");
        if(tSlider.length) {
            tSlider.owlCarousel({
              loop:true,
              nav:false,
              dots:false,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    500:{
                        items:2
                    },
                    992:{
                        items:3
                    },
                    1300:{
                        items:4,
                        autoplay:false,
                    }
                },
          })
        }


        // ------------------------------- Testimonial Slider 
        var mSlider = $ (".testimonial-slider");
        if(mSlider.length) {
            mSlider.owlCarousel({
              loop:true,
              nav:false,
              dots:true,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1000,
              autoplayHoverPause:true,
              lazyLoad:true,
              items:1
          })
        }


        // ------------------------------- Partner Slider
        var pSlider = $ (".partner-slider");
        if(pSlider.length) {
            pSlider.owlCarousel({
              loop:true,
              nav:false,
              dots:false,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    },
                    1200:{
                        items:5
                    }
                },
          })
        }

        // -------------------------------  Latest News Slider
        var rpSlider = $ (".latest-news-slider");
        if(rpSlider.length) {
            rpSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              margin:30,
              autoplayTimeout:3500,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                },
          })
        }


        // -------------------------------  Core Value Slider
        var rpSlider = $ (".core-value-slider");
        if(rpSlider.length) {
            rpSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              margin:30,
              autoplayTimeout:3500,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                },
          })
        }


        // -------------------------------  Related Post Slider
        var rpSlider = $ (".related-post-slider");
        if(rpSlider.length) {
            rpSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1200,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    }
                },
          })
        }


        // -------------------------------  Related Product Slider
        var rpSlider = $ (".related-product-slider");
        if(rpSlider.length) {
            rpSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              margin:30,
              autoplayTimeout:4000,
              smartSpeed:1200,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    }
                },
          })
        }




        // -------------------------------  Compnay Branch Address
        var baSlider = $ (".address-slider");
        if(baSlider.length) {
            baSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              autoplayTimeout:2000,
              smartSpeed:1200,
              lazyLoad:true,
              autoplayHoverPause:true,
              responsive:{
                    0:{
                        items:1
                    },
                    500:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    }
                },
          })
        }


        // --------------------------------- Contact Form Validation
          if($('.form-validation').length){
            $('.form-validation').validate({ // initialize the plugin
              rules: {
                name: {
                  required: true
                },
                email: {
                  required: true,
                  email: true
                },
                web: {
                  required: true
                },
                phone: {
                  required: true
                },
                message: {
                  required: true
                }
              },
            submitHandler: function(form) {
              $(form).ajaxSubmit({
                success: function() {
                  $('.form-validation :input').attr('disabled', 'disabled');
                  $('.form-validation').fadeTo( "slow", 1, function() {
                      $(this).find(':input').attr('disabled', 'disabled');
                      $(this).find('label').css('cursor','default');
                      $('#alert-success').fadeIn();
                    });
                  },
                  error: function() {
                    $('.form-validation').fadeTo( "slow", 1, function() {
                      $('#alert-error').fadeIn();
                    });
                  }
                });
              }
            });
          }



          // ---------------------------------- Validation Alert
          var closeButton = $ (".closeAlert");
            if(closeButton.length) {
                closeButton.on('click', function(){
                  $(".alert-wrapper").fadeOut();
                });
                closeButton.on('click', function(){
                  $(".alert-wrapper").fadeOut();
                })
            }


          // -------------------------------- Accordion Panel
          if ($('.theme-accordion > .panel').length) {
            $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
                  var heading = $(this).find('.panel-heading');
                  heading.addClass("active-panel");
                  
            });
            $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
                var heading = $(this).find('.panel-heading');
                  heading.removeClass("active-panel");
                  //setProgressBar(heading.get(0).id);
            });
            $('.panel-heading a').on('click',function(e){
                if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
                    e.stopPropagation();
                }
            });
          };


          // ------------------------- Product Quantity
          var inputVal = $("#product-value");
          if(inputVal.length) {
            $("#value-decrease").on('click', function() {
                var v= inputVal.val()-1;
                if(v>=inputVal.attr('min'))
                inputVal.val(v)
              });

            $("#value-increase").on('click', function() {
              var v= inputVal.val()*1+1;
              if(v<=inputVal.attr('max'))
              inputVal.val(v)
            });
          }
        

        
    });

    
    $(window).on ('load', function (){ // makes sure the whole site is loaded

        // -------------------- Site Preloader
        $('#loader').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});


        // ------------------------ Chart Js
        if($("#chartContainer").length) {
          var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            animationEnabled: true,
            zoomEnabled: true,
            data: [{
              type: "area",
              dataPoints: []
            }]
          });

          addDataPoints(1000);  
          chart.render();

          function addDataPoints(noOfDps) {
            var xVal = chart.options.data[0].dataPoints.length + 1, yVal = 100;
            for(var i = 0; i < noOfDps; i++) {
              yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
              chart.options.data[0].dataPoints.push({x: xVal,y: yVal}); 
              xVal++;
            }
          }
        }


    })
    
})(jQuery)

$(document).ready(function() {

    $("body").on("click", "#mega-menu-holder li", function () {
        console.log('click');
        $("body").find(".collapse-button").click();
    });

    $('[data-type="scroll-down"]').on('click', function(e) {
        e.preventDefault();
        const id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 1000);
    })

    // ----------------------------- Date Picker
    const datePickerFrom = $('#datetimepicker1');
    datePickerFrom.datetimepicker({
        locale: 'ru',
        format: 'DD.MM.YYYY',
        defaultDate: false,
        minDate: new Date(),
    }).on('dp.change', function (e) {
        hideCalcRes();
        return false;
    });

    const datePickerTo = $('#datetimepicker2');
    datePickerTo.datetimepicker({
        locale: 'ru',
        format: 'DD.MM.YYYY',
        defaultDate: false,
        //minDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    }).on('dp.change', function (e) {
        hideCalcRes();
        return false;
    });

    $('[data-type="input-wrap"]').on('change', function() {
        cleanError($(this));
    })
    $('[data-type="input-wrap"]').on('click', function() {
        cleanError($(this));
    })
    $('[data-type="input-wrap"]').on('change','input', function() {
        hideCalcRes();
    })


    $('[data-type="calc"]').on('click',function() {
        const form = $('[data-type="calc-form"]'),
            btn = $(this),
            sumInput = $('#depositSum'),
            dateFrom = $('#datePicker1'),
            dateTo = $('#datePicker2');
        let err = 0,
            errMess = '',
            dayQty = 0;

        if(sumInput.val() == '') {
            err++;
            errMess += "Заполните сумму <br>"
            sumInput.closest('[data-type="input-wrap"]').addClass('error');
        }
        if(sumInput.val() != '' && sumInput.val() < 20) {
            err++;
            errMess += " Минимальный размер микрозайма - 20 руб <br>"
            sumInput.closest('[data-type="input-wrap"]').addClass('error');
        }
        if(sumInput.val() != '' && sumInput.val() > 600000) {
            err++;
            errMess += " Максимальный размер микрозайма - 15 000 базовых величин <br>"
            sumInput.closest('[data-type="input-wrap"]').addClass('error');
        }
        if(dateFrom.val() == '') {
            err++;
            errMess += "Заполните дату обращения в ломбард <br>"
            dateFrom.closest('[data-type="input-wrap"]').addClass('error');
        }
        if(dateTo.val() == '') {
            err++;
            errMess += "Заполните дату предполагаемого выкупа <br>"
            dateTo.closest('[data-type="input-wrap"]').addClass('error');
        }
        if(dateFrom.val() != '' && dateTo.val() != '') {
            //console.log(new Date(changeDateFormat(dateFrom.val())));
            dayQty = getNumberOfDays(changeDateFormat(dateFrom.val()),changeDateFormat(dateTo.val())) + 1;
            if(dayQty > 31) {
                err++;
                errMess += "Максимальный срок залога - 31 день <br>"
                dateTo.closest('[data-type="input-wrap"]').addClass('error');
            }
            if(dayQty < 1) {
                err++;
                errMess += "Минимальный срок залога - 1 день <br>"
                dateTo.closest('[data-type="input-wrap"]').addClass('error');
            }
        }

        if(err > 0) {
            $('.calc-results-err').html(errMess).fadeIn();
            return false;
        } else {
            let inputSum = parseFloat(sumInput.val());
                percSum = 0,
                sum = 0,
                discount = 0;
            //считаем проценты
            if(dayQty <= 10) {
                percSum = inputSum * 0.012 * dayQty;
            } else if(dayQty <= 20) {
                percSum = (inputSum * 0.12) + (inputSum * 0.01 * (dayQty - 10));
            } else {
                percSum = (inputSum * 0.12) + (inputSum * 0.1) + (inputSum * 0.08 * (dayQty - 20));
            }
            //скидка от суммы
            if(inputSum >= 100 && inputSum < 500) {
                discount = percSum*0.1;
            }
            if(inputSum >= 500 && inputSum < 1000) {
                discount = percSum*0.2;
            }
            if(inputSum >= 1000 && inputSum < 3000) {
                discount = percSum*0.3;
            }
            if(inputSum >= 3000) {
                discount = percSum*0.5;
            }
            sum = inputSum + percSum - discount;
            $('[data-type="all-day-calc"]').html(dayQty);
            $('[data-type="return-calc"]').html(getMoneyFormat(sum));
            $('[data-type="perc-calc"]').html(getMoneyFormat(percSum));
            if(discount > 0) {
                $('[data-type="discount-calc"]').html(getMoneyFormat(discount));
                $('[data-type="discount-calc"]').closest('p').show();
            } else {
                $('[data-type="discount-calc"]').html('');
                $('[data-type="discount-calc"]').closest('p').hide();
            }
            $('[data-type="calc-res"]').fadeIn();
        }


    })
    function hideCalcRes() {
        $('[data-type="calc-res"]').hide();
        $('[data-type="all-day-calc"]').html('');
        $('[data-type="perc-calc"]').html('');
        $('[data-type="discount-calc"]').html('');
        $('[data-type="return-calc"]').html('');
        return false;
    }

    function getMoneyFormat(sum) {
        sum = sum < 0 ? 0: sum;
        return parseFloat(sum.toFixed(2)).toLocaleString('ru') + '&nbsp;руб';
    }

    function cleanError(el) {
        el.closest('[data-type="input-wrap"]').removeClass('error');
        $('.calc-results-err').html('').hide();
    }

    function getNumberOfDays(start, end) {

        const date1 = new Date(start);
        const date2 = new Date(end);

        // One day in milliseconds
        const oneDay = 1000 * 60 * 60 * 24;

        // Calculating the time difference between two dates
        const diffInTime = date2.getTime() - date1.getTime();
        console.log(date2.getTime());

        // Calculating the no. of days between two dates
        const diffInDays = Math.round(diffInTime / oneDay);

        return diffInDays;
    }

    function changeDateFormat(date) {
        return date.split('.').reverse().join(',');
    }


})