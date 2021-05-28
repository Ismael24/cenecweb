/* 
JavaScript / jQuery
web o pagina:
autor:Ismael Paloma Narváez
fecha: Marzo 2021
resumen:
*/
	// inicializamos al cargar
	function ponerModo(opcion){
		// obtengo el modo que se está aplicando con Jquery y
		// hago los cambios y lo registro en la variable modo
		var modoActual;
		var modoFuturo;
		
		
		if(opcion == "") {
			modoActual = $(':root').css('--modo');
		}
		
		if (modoActual=="azul") {
			$(':root').css("--color", $(':root').css('--colorDia'));
			$(':root').css("--colorBg", $(':root').css('--colorBgDia'));
			$(':root').css("--modo", "negro");
			modoActual = "negro";
			modoFuturo = "azul";
		}
		else {
			$(':root').css("--color", $(':root').css('--colorNoche'));
			$(':root').css("--colorBg", $(':root').css('--colorBgNoche'));
			$(':root').css("--modo", "azul");
			modoActual = "azul";
			modoFuturo = "negro";
		}

		$(':root').css("color",$(':root').css('--color'));
		$(':root').css("background-color",$(':root').css('--colorBg'));
		$('#modo').text(modoActual);
		$('#mensajeBoton').text(modoFuturo);

	}

	function cambiar(){
		// obtengo el modo que se está aplicando con Jquery y
		// hago los cambios y lo registro en la variable modo
		if ($(':root').css('--modo')=="azul") {
			$(':root').css("--color", $(':root').css('--colorDia'));
			$(':root').css("--colorBg", $(':root').css('--colorBgDia'));
			$(':root').css("--modo", "negro");
			$('#mensajeBoton').text('Azul');
		}
		else {
			$(':root').css("--color", $(':root').css('--colorNoche'));
			$(':root').css("--colorBg", $(':root').css('--colorBgNoche'));
			$(':root').css("--modo", "azul");
			$('#mensajeBoton').text('Negro');		
		}

		$(':root').css("color",$(':root').css('--color'));
		$(':root').css("background-color",$(':root').css('--colorBg'));
		

	}


function clickCounter(){
	
  if(typeof(Storage) !== "undefined") {
	  
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.setItem("clickcount",1);
    }
$("#nVeces").text('Has cargado '+sessionStorage.clickcount+' veces la página del sitio');
}
}




function migasI() {
$('#this_title').html('<strong>' + 'Championships' + '</strong>')}
function migasA() {
$('#this_title').html('<strong>' + 'Actualidad' + '</strong>')}
 /*var href = $(location).attr('href');
 var actualidad = href.substring(href.indexOf("actualidad")+1);
 if(href.indexOf("index")!==-1){
	  $('#this_title').html('<strong>' + 'Inicio' + '</strong>')
 }else if(href.indexOf("actualidad")!==-1){
 $('#this_title').html('<strong>' + actualidad + '</strong>')
	 
 }

**/
