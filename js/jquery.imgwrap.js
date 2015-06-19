;(function($, undefined){
	"use strict";

	var sign 	= function(number){
					return number <0 ? -1 : 1;
				},
		scl 	= function(number, fromMin, fromMax, toMin, toMax){
					return ((number - fromMin) * (toMax-toMin) / (fromMax - fromMin)) + toMin;
				};

	$.widget("vanderlee.coverflow", {
		options: {
			animateComplete: 	undefined,
			animateStep: 		undefined,
			density: 			1,
			duration: 			'normal',
			easing: 			undefined,
			index: 				0,
			innerAngle: 		-75,
			innerCss: 			undefined,
			innerOffset: 		100 / 3,
			
		}
	})
})