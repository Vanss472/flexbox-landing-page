var $ = require('jquery');
var Base = require('./modules/base');

window.$ = $;

$(function() {
    'use strict'; 
    
    window.app = {};

    //Init app
    Base.init();
});