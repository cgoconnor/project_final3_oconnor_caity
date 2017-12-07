$(document).ready(function () {
    $('#navigation').slimmenu(
        {
            resizeWidth: '480',
            collapserTitle: '',
            animSpeed: '1',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;',
        });
    $(function () {
        $('#social-media a img:hover').textillate();
    });
    var cw = $('.map iframe').width();
    $('.map iframe').css({'height': cw + 'px'});

//custom jquery to slide out content on products page - tutorial: https://www.hongkiat.com/blog/jquery-sliding-navigation/
//https://www.w3schools.com/jquery/jquery_slide.asp
    $('#cakes .category').on('click', function (e) {
        e.preventDefault();

        var display = $('#cakes .slideout').css('display');

        if (display === 'none') {
            // $(this).addClass('open');
            showItems();
        } else {
            hideItems();
        }
        function showItems() {
            $('#cakes .slideout').slideDown('slow');
            $('#cakes .cat-photo').slideUp('fast');
            $('#cakes .category').text('Close Section');
        }

        function hideItems() {
            $('#cakes .slideout').slideUp('slow');
            $('#cakes .cat-photo').slideDown('fast');
            $('#cakes .category').text('Cakes and Cupcakes');
        }
    });

    $('#pastries .category').on('click', function (e) {
        e.preventDefault();

        var display = $('#pastries .slideout').css('display');

        if (display === 'none') {
            // $(this).addClass('open');
            showItems();
        } else {
            hideItems();
        }
        function showItems() {
            $('#pastries .slideout').slideDown('slow');
            $('#pastries .cat-photo').slideUp('fast');
            $('#pastries .category').text('Close Section');
        }

        function hideItems() {
            $('#pastries .slideout').slideUp('slow');
            $('#pastries .cat-photo').slideDown('fast');
            $('#pastries .category').text('Pastries, Scones, and Cookies');
        }
    });

    $('#breads .category').on('click', function (e) {
        e.preventDefault();

        var display = $('#breads .slideout').css('display');

        if (display === 'none') {
            // $(this).addClass('open');
            showItems();
        } else {
            hideItems();
        }
        function showItems() {
            $('#breads .slideout').slideDown('slow');
            $('#breads .cat-photo').slideUp('fast');
            $('#breads .category').text('Close Section');
        }

        function hideItems() {
            $('#breads .slideout').slideUp('slow');
            $('#breads .cat-photo').slideDown('fast');
            $('#breads .category').text('Breads');
        }
    });

    //validation plugin
    var $label = $('label[for="email"]');
    var $successMsg = $('.alert');
    $.validate({
        errorMessageClass: 'error',
        onSuccess: function () {
            $successMsg.show();
            $label.hide();
            return false; // stops submitting
        }
    });

    //calendar plugin

    $('#calendar').fullCalendar({
        events: [
            {
                title: 'Macron Demonstration',
                description: 'Macron Demonstration',
                start: '2017-12-07T19:00:00',
                end: '2017-12-07T20:00:00'
            },
            {
                title: 'Cake Decorating - Beginner',
                start: '2017-12-14T19:00:00',
                end: '2017-12-14T20:00:00'
            },
            {
                title: 'Cake Decorating - Advanced',
                start: '2018-01-04T19:00:00',
                end: '2018-01-04T20:00:00'
            }
        ],
        header: {
            left: '',
            center: 'prev title next',
            right: ''
        },
        eventRender: function (calEvent, element) {
            element.attr('href', 'javascript:void(0);');
            element.click(function () {
                $('#startTime').html(calEvent.start.format('MMM Do h:mm A'));
                $('#eventContent').dialog({ modal: true, title: calEvent.title });
            });
        }
    });
});

function popupFunction() {
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}

var submitForm = document.getElementById('email-form');
submitForm.onsubmit = popupFunction;

var monthMenu = document.getElementById('month');
monthMenu.onchange = birthdayFunction;
function birthdayFunction() {
    var month = monthMenu.value;
    var twentyNine = document.getElementById('month29');
    var thirty = document.getElementById('month30');
    var thirtyOne = document.getElementById('month31');
    var dayLabel = document.getElementById('day');
    if (month.value === ['jan', 'mar', 'may', 'jul', 'aug', 'oct', 'dec']) {
        thirtyOne.style.display = 'block';
        dayLabel.style.display = 'block';
        twentyNine.style.display = 'none';
        thirty.style.display = 'none';
    } else if (month === 'feb') {
        twentyNine.style.display = 'block';
        dayLabel.style.display = 'block';
        thirty.style.display = 'none';
        thirtyOne.style.display = 'none';
    } else {
        thirty.style.display = 'block';
        dayLabel.style.display = 'block';
        twentyNine.style.display = 'none';
        thirtyOne.style.display = 'none';
    }
}
