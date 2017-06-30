(function ($) {
    var box = '<div class="csas-dvl" style="z-index:9999;position:fixed; bottom:0; right:0;">0px</div>';
    Drupal.behaviors.csasDvl = {
        attach: function (context, settings) {
            $('body').append(box);
            $(window).resize(function () {
                $('.csas-dvl').text($(this).width() + 'px');
            });
        }
    };
})(jQuery);
