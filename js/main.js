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
    var $successMsg = $('.alert');
    $.validate({
        errorMessageClass: 'error',
        onSuccess: function () {
            $successMsg.show();
            return false; // stops submitting
        }
    });
});
