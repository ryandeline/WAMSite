;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.intoffcanvas = {
    name : 'intoffcanvas',

    version : '5.1.1',

    settings : {},

    init : function (scope, method, options) {
      this.events();
    },

    events : function () {
      var S = this.S;

      S(this.scope).off('.intoffcanvas')
        .on('click.fndtn.intoffcanvas', '.left-off-intcanvas-toggle', function (e) {
          e.preventDefault();
          S(this).closest('.off-intcanvas-wrap').toggleClass('move-right');
        })
        .on('click.fndtn.intoffcanvas', '.exit-off-intcanvas', function (e) {
          e.preventDefault();
          S(".off-intcanvas-wrap").removeClass("move-right");
        })
        .on('click.fndtn.intoffcanvas', '.right-off-intcanvas-toggle', function (e) {
          e.preventDefault();
          S(this).closest(".off-intcanvas-wrap").toggleClass("move-left");
        })
        .on('click.fndtn.intoffcanvas', '.exit-off-intcanvas', function (e) {
          e.preventDefault();
          S(".off-intcanvas-wrap").removeClass("move-left");
        });
    },

    reflow : function () {}
  };
}(jQuery, this, this.document));