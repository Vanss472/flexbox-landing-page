var jQuery = require('jquery'); 
var app = app || {};

app.Menu = require('./menu');

var Base = (function($, app) {
    'use strict';

     var _fn = {

         start: function() { 
             // Bind events
             _fn.bind();
             _fn.menu();
         },

         bind: function() {
             $('body').addClass('mobile');
         },

         menu: function() { 
            app.Menu = new app.Menu(); 
         } 

     };

    // Init
    var init = function() { 
        _fn.start(); 
    };


    return {
        init: init
    };


})(jQuery, app);

module.exports = Base; 