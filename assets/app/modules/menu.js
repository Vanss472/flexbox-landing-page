/*jshint -W030 */

var jQuery = require('jquery');
var _ = require('underscore');
var app = app || {};

app.Menu = (function($,  _, app){
	'use strict';

	var def = function(){
	 	this.$els = {
	 		el : $('.nav'),
            trigger : $('.menu-icon'), 
            nav: $('.menu-toggle')
	 	};

	 	this.states = {
            open : 'is-open',
            active: 'is-active'
        };

		init.call(this);
	};

	var init = function() {
		this.bind();
	};

	def.prototype = {

		bind : function() {
            var self = this;

            this.$els.trigger.on('click', _.bind(this.toggle, this)); 
        },

        toggle : function() {
            this.$els.nav.toggleClass(this.states.active);
            this.$els.el.toggleClass(this.states.open);
        }
	};

	return def;

})(jQuery,  _, app);

module.exports = app.Menu;