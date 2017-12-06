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
    $('.category').on('click', function (e) {
        e.preventDefault();

        var display = $('.slideout').css('display');

        if (display === 'none') {
            // $(this).addClass('open');
            showItems();
        } else {
            hideItems();
        }
        function showItems() {
            $('.slideout').slideDown('slow');
            $('.cat-photo').slideUp('fast');
        }

        function hideItems() {
            $('.slideout').slideUp('slow');
            $('.cat-photo').slideDown('fast');
        }
    }); // end click event handler
});
