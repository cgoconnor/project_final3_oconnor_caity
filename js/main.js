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
});
