$(document).ready(function(){        
    $('#intro').addClass('faded');
    $('#intro h1, #intro h2, #intro .btn').addClass('animated zoomIn');
    $('.row.pull').addClass('animated fadeInUp');
    $('nav').addClass('animated fadeInDown');
    setInterval(function(){
    	$('#intro h2 span').addClass('animated bounce');
    }, 2000);
});