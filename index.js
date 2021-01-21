
  

var enviado1=false;
var enviado2=false;
function loadTes() {
	//CARGAR TESTIMONIOS
	if($(window).scrollTop() + $(window).height() >= $(document).height()-200){			
		$.get("./testimonio.json")
		.done(function( datos ) {
			if(!enviado1){
				maquetarTestimonios(datos);
				enviado1=true;
			}
		})
		.fail(function() {
			setInterval(loadTes, 5000);
			enviado1=false;
		})
	}
}

function loadPro() {

	if($(window).scrollTop() + $(window).height() >= $(document).height()-350){				
		$.get("./productos.json")
		.done(function( datos ) {
			if(!enviado2){
				maquetarProductos(datos);
				enviado2=true;
			}
		})
		.fail(function() {
			setInterval(loadPro,5000);
			enviado2=false;
		})
	}

}
//ASPECTO TESTIMONIOS

function maquetarTestimonios(json){

	//PRIMEROS TESTIMONIOS
	var	ale1=Math.floor(Math.random() *4 );
	var	ale2=Math.floor(Math.random() *4 );
	var	ale3=Math.floor(Math.random() *4 );

	var arr=[ale1,ale2,ale3];
	var contenido=[];

	//VISTA 1 CON DIVS
	for(i of arr){
		var div=$("<div>").css({
			"background-color": "rgba(240, 240, 208, 0.836)",
			"width":"10rem",
			"margin":"1rem",
			"border-radius":"10px"
		}).animate({width: "15rem"},1000).addClass("testimonios")
		
		var h4=$("<h4>"+json.testimonio[i].Nombre+"</h4>")
		var p=$("<p>"+json.testimonio[i].texto+"</p>")
		var fecha=$("<p>"+json.testimonio[i].fecha+"</p>")

		contenido.push({"nombre":json.testimonio[i].Nombre,"texto":json.testimonio[i].texto,"fecha":json.testimonio[i].fecha })
		div.append(h4)
		div.append(p)
		div.append(fecha)
		$(".divs").append(div);
	}

	//VISTA 2 CON TABLA
	var tabla=("<table><tr><th>Usuario</th><th>Reseña</th><th>Fecha</th></tr><tr><td>"+contenido[0].nombre+" </td><td> "+contenido[0].texto+" </td><td> "+contenido[0].fecha+" </td></tr><tr><td> "+contenido[1].nombre+" </td><td> "+contenido[1].texto+" </td><td> "+contenido[1].fecha+" </td></tr><tr><td> "+contenido[2].nombre+" </td><td> "+contenido[2].texto+" </td><td> "+contenido[2].fecha+" </td></tr></table>");
	
		$(".tabla").append(tabla)
		$("table td").css({"height":"2rem","padding":"0rem 1rem"})
		$("table").css({"background-color": "rgba(240, 240, 208, 0.836)","width": "80%"}).animate({"width": "100%"},1000);


	//GENERAR TESTIMONIOS ALEATORIOS

	setInterval(function(){
		$(".tabla").empty();
		$(".divs").empty();
		
		var	ale1=Math.floor(Math.random() *4 );
		var	ale2=Math.floor(Math.random() *4 );
		var	ale3=Math.floor(Math.random() *4 );
			
		
		var arr=[ale1,ale2,ale3];
		var contenido=[];

	//VISTA 1 CON DIVS
	
		for(i of arr){
			var div=$("<div>").css({
				"background-color": "rgba(240, 240, 208, 0.836)",
				"width":"10rem",
				"margin":"1rem",
				"border-radius":"10px"
			}).animate({width: "15rem"},1000).addClass("testimonios")
			
			var h4=$("<h4>"+json.testimonio[i].Nombre+"</h4>")
			var p=$("<p>"+json.testimonio[i].texto+"</p>")
			var fecha=$("<p>"+json.testimonio[i].fecha+"</p>")

			contenido.push({"nombre":json.testimonio[i].Nombre,"texto":json.testimonio[i].texto,"fecha":json.testimonio[i].fecha })
			div.append(h4)
			div.append(p)
			div.append(fecha)
			$(".divs").append(div);
			
		}
			
	//VISTA 2 CON TABLA
	var tabla=("<table><tr><th>Usuario</th><th>Reseña</th><th>Fecha</th></tr><tr><td>"+contenido[0].nombre+" </td><td> "+contenido[0].texto+" </td><td> "+contenido[0].fecha+" </td></tr><tr><td> "+contenido[1].nombre+" </td><td> "+contenido[1].texto+" </td><td> "+contenido[1].fecha+" </td></tr><tr><td> "+contenido[2].nombre+" </td><td> "+contenido[2].texto+" </td><td> "+contenido[2].fecha+" </td></tr></table>");
			$(".tabla").append(tabla)
			$("table td").css({"height":"2rem","padding":"0rem 1rem"})
			$("table").css({"background-color": "rgba(240, 240, 208, 0.836)","width": "80%"}).animate({"width": "100%"},1000);	
	},10000)

		$(".divs").attr("mostrado","false");
		$(".divs").hide();

	//CREAR BOTON PARA LA VISTA
		var boton=$("<button>Cambiar Vista</button>").css({"width":"10rem","height":"2rem"})
		$(".boton").append(boton).fadeIn("slow").click(function(){cambiarVista()});
}



// FUNCION DEL BOTON VISTA
function cambiarVista(){
	var div=$(".divs")
	if(div.attr("mostrado")=="true"){
		div.fadeOut( "fast" );
		$( ".tabla" ).show();

		div.attr("mostrado","false")
		
	}else{
		div.attr("mostrado","true");
		$( ".tabla" ).fadeOut( "fast" );
		div.fadeIn( "slow" );
	}
}



//ASPECTO PRODUCTOS
function maquetarProductos(json){
	
	var arr=[0,1,2,3];
	
	//VISTA 1 CON DIVS
		for(i of arr){
			var div2=$("<div>").css({
				"background-color": "rgba(240, 240, 208, 0.836)",
				"width":"10rem",
				"margin":"1rem",
				"border-radius":"10px"
			}).animate({width: "15rem"},1000);
			
			var h4=$("<a href='"+json.productos[i].link+"'><h4>"+json.productos[i].titulo+"</h4></a>")
			var img=$("<img src='"+json.productos[i].img+"'>").css("width","4rem")
			var p=$("<p>"+json.productos[i].texto+"</p>")
			var link=$("<a href='"+json.productos[i].link+"'>")
			div2.append(h4);
			div2.append(p);
			div2.append(img);
			div2.append(link);
			$(".products").append(div2);
		}
}

//OBTENER LOCALIDAD
	
function success(position) {
	let coord = position.coords;

	$.ajax(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAzpqqTMMfGLgzeMm3_mIi3i2a8CsB5LlA&address=${coord.latitude},${coord.longitude}`)
		.done((response) => {
			console.log(response.results[0].address_components[2].long_name);
		})
		.fail((error) => {
			console.warn(error);
		});
}


function error(error) {
	console.warn(`ERROR(${error.code}): ${error.message}`);
}


    
window.onload=()=>{

	//AJAX
	setInterval(loadPro,400);
	setInterval(loadTes,1000);

	
	//BOTON SUPCRIPCION
	$(".sus").click(function(){
		$("html").animate({scrollTop: 500},2000)
	})

	//BOTON DE SUBIR
	$(".subir").hide();
    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() >= $(document).height()-250){			
			if($(".subir").attr("mostrado")=="false"){
				$(".subir").attr("mostrado","true").fadeIn("slow");

				$(".subir").click(function(){
					$("html").animate({scrollTop: 0},2000)
				})
			}	
        }
	})
	
	//VALIDACION FORMULARIO
	$("form").validate({
		rules: {
			name: "required",
			apellido:"required",
		  	email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: "Introduzca su nombre",
			apellido: "Introduzca su apellido",
			email: "Introduce una dirección válida"
		}
	});

	$(".prime").keydown(function(){
		$(".second").attr("disabled", true);
		if($('.prime').val().length>2){
			$(".es").attr("disabled", false);
		}else {
			$(".es").attr("disabled", true);
		}
	})
	$(".es").keydown(function(){
		if($('.es').val().length>2){
			$(".tr").attr("disabled", false);
		}else{
			$(".tr").attr("disabled", true);
		}
	})

	
	//OBTENER LOCALIDAD
	navigator.geolocation.getCurrentPosition(success, error);

}
    
