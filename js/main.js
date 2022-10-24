jQuery(document).ready(function(){
    jQuery('.tab_img_hover').click(function(event){
        jQuery('.active-tab').removeClass('active-tab');
        jQuery(this).addClass('active-tab');
        event.preventDefault();
    });
});
jQuery(document).ready(function(){
    jQuery('.tab_img_hover2').click(function(event){
        jQuery('.active-tab').removeClass('active-tab');
        jQuery(this).addClass('active-tab');
        event.preventDefault();
    });
});




// MINI TIMER ======
$(function(){
	FlipClock.Lang.Custom = { days:'Days', hours:'Hours', minutes:'Minutes', seconds:'Seconds' };
	var opts = {
		clockFace: 'HourCounter',
		countdown: true,
		language: 'Custom'
	};
	opts.classes = {
		active: 'flip-clock-active',
		before: 'flip-clock-before',
		divider: 'flip-clock-divider',
		dot: 'flip-clock-dot',
		label: 'flip-clock-label',
		flip: 'flip',
		play: 'play',
		wrapper: 'flip-clock-small-wrapper'
	};  
	var countdown = 1661413920 - ((new Date().getTime())/1000); // from: 08/25/2022 12:52 am -0700
	countdown = Math.max(1, countdown);
	$('.clock-builder-output-mini').FlipClock(countdown, opts);
});

$(function(){
	FlipClock.Lang.Custom = { days:'Days', hours:'Hours', minutes:'Minutes', seconds:'Seconds' };
	var opts = {
		clockFace: 'HourCounter',
		countdown: true,
		language: 'Custom'
	};
	opts.classes = {
		active: 'flip-clock-active',
		before: 'flip-clock-before',
		divider: 'flip-clock-divider',
		dot: 'flip-clock-dot',
		label: 'flip-clock-label',
		flip: 'flip',
		play: 'play',
		wrapper: 'flip-clock-small-wrapper'
	};  
	var countdown = 1661413920 - ((new Date().getTime())/1000); // from: 08/25/2022 12:52 am -0700
	countdown = Math.max(1, countdown);
	$('.clock-builder-output-mini-1').FlipClock(countdown, opts);
});