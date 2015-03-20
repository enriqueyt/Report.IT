
var contentModal
$(function() {
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('div.imgInicio').on('click', function(){

    contentModal =  $('.modal-body', $('div#'+($(this).attr('data-target')).substring(1,($(this).attr('data-target')).length)));

    contentModal
    .empty()
    .append(
        '<div class="row">'+
            '<div class="col-md-12">'+
                '<video width="100%" controls>'+
                  '<source src="video/Report_cut.mp4" type="video/mp4">'+
                  'Tu navegador no soporta videos.'+
                '</video>'+
            '<div class="row">'+
        '</div>'
    );

    });

    $('#myModal').on('hidden.bs.modal', function (e) {
      contentModal.empty()
    });

    var difundeComparte = [
    	{
    		titulo:'Difunde y comparte',
    		img:'img/difundeComparte.png',
    		descripcion:'alguna descripcion'
    	},
    	{
    		titulo:'Sientes frustación',
    		img:'img/frustacion.png',
    		descripcion:'alguna descripcion'
    	},
    	{
    		titulo:'Creamos Soluciones',
    		img:'img/creamosSolucion.png',
    		descripcion:'alguna descripcion'
    	},
    	{
    		titulo:'Localiza los problemas que afectan a tu comunidad',
    		img:'img/localizacion.png',
    		descripcion:'alguna descripcion'
    	},
    	{
    		titulo:'Reportalo',
    		img:'img/reportalo.png',
    		descripcion:'alguna descripcion'
    	},
    	{
    		titulo:'Publica la afectación',
    		img:'img/publica.png',
    		descripcion:'alguna descripcion'
    	},
    	{
    		titulo:'Para ti y tu comunidad',
    		img:'img/todaComunidad.png',
    		descripcion:'alguna descripcion'
    	}
    ]

    var html = '';

    for(var i in difundeComparte){
    	html +=
    		'<div class="col-md-6" style="">'+
                '<div class="col-md-6" >'+
                     '<div class="timeline-image">'+
                        '<img class="img-circle img-responsive" src="'+difundeComparte[i].img+'" alt=""/>'+
                    '</div>'+
                '</div>'+
                '<div class="col-md-6">'+
                    '<div class="timeline-panel">'+
                        '<div class="timeline-heading">'+
                            '<h4 style="color:#4B5C66;text-transform: capitalize;">Paso '+(parseInt(i)+1)+'</h4>'+
                            '<h4 class="subheading">'+difundeComparte[i].titulo+'</h4>'+
                        '</div>'+
                    '</div>'+
                    '<div class="timeline-body">'+
                        '<p class="text-muted">'+difundeComparte[i].descripcion+'</p>'+
                    '</div>'+
                '</div>'+
            '</div>'
    }

    $('#comoFunciona .row:eq(1)').append('<div class="col-md-12">'+ html + '</div>');

});



$('body').scrollspy({
    target: '.navbar-fixed-top'
})


$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

