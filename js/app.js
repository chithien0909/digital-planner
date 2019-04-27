jQuery(document).ready(function($) {
    jQuery('<div class="amount-nav"><div class="amount-button amount-up">+</div><div class="amount-button amount-down">-</div></div>').insertAfter('.amount input');
    jQuery('.amount').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.amount-up'),
            btnDown = spinner.find('.amount-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });
    $('#slide-product').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 2.2,
        slidesToScroll: 2,
        nextArrow: '<button class="slick-prev slick-arrow" aria-label="Previous"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-next slick-arrow" aria-label="Next"><i class="fas fa-chevron-left"></i></button>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('#slide-product-index').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 2,
        rows: 2,
        slidesPerRow: 4,
        nextArrow: '<button class="slick-prev slick-arrow" aria-label="Previous"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-next slick-arrow" aria-label="Next"><i class="fas fa-chevron-left"></i></button>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


});
