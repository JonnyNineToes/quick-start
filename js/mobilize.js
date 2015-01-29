$(document).ready(function(){
	$('body').append('<div id="meter"></div>').find('div#meter').css({
		'-moz-box-sizing':'border-box',
		'box-sizing':'border-box',
		'position':'fixed',
		'top':0,
		'right':0,
		'z-index':100,
		'-moz-box-shadow': '2px 2px 3px 3px #ccc',
		'-webkit-box-shadow': '2px 2px 3px 3px #ccc',
		'box-shadow': '2px 2px 3px 3px #ccc',
		'margin':'5px',
		'border':'none',
		'background-color':'rgb(255,255,255)',
		'padding':'5px',
		'width':'7em',
		'text-align':'center',
		'font-family':'sans-serif',
		'font-size': '10pt',
		'color':'rgb(0,0,0)',
		'font-weight': 'normal'
	}).append('<div id="platform"></div><div id="px"></div>').find('div#px').css({
		'font-size': '65%'
	});
	setInterval(function(){
		var width = $(window).width();
		var percent, color, rgb, platform;
		percent = width * 100 / 1400;
		color = Math.round(percent * 510 / 100);
		if (color < 255) {
			rgb = 'rgb(255,' + color + ',0)';
		}
		else if (color >= 255) {
			rgb = 'rgb(255,255,' + (color - 255) + ')';
		}
		
		if (width <= 580){
			platform = 'Mobile';
		}
		else if ((width > 580) && (width <= 890)){
			platform = 'Tablet';
		}
		else if ((width > 890) && (width <= 1120)){
			platform = 'Notebook';
		}
		else if ((width > 1120) && (width <= 1400)){
			platform = 'Desktop';
		}
		else if (width > 1400){
			platform = 'Cinema';
		}
		$('#meter').css({'background-color': rgb}).children('#platform').text(platform).siblings('#px').text(width+'px');
	},100);
});
