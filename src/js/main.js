
import $ from 'jquery'
window.jQuery = $
window.$ = $

$('#lucky').on('click', function(e){
	e.preventDefault();
	$('.makiage_logo').toggleClass('active');
	$('.google_logo').toggleClass('hide');
})
