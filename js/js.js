//Pagina 2
function visu_pag2()
{
	nom_constructora = document.getElementById("nom_constructora-form")
	nom_constructora.style.display = "none";
}

function pre10_si()
{
	nom_constructora = document.getElementById("nom_constructora-form")

	if(document.getElementById("pre_1.13_si").checked)
	{
		nom_constructora.style.display = "block";
	}
	else 
	{
		nom_constructora.style.display = "none";
	}
}

//Pagina 3
function visu_pag3()
{
	con1 = document.getElementById("pre_4.2.1-form")
	con1.style.display = "none";
}

function pre4_2_si()
{
	con1 = document.getElementById("pre_4.2.1-form")
	if(document.getElementById("pre_4.2_si").checked)
	{
		con1.style.display = "block";
	}
	else 
	{
		con1.style.display = "none";
	}
}

//Pagina 4
function visu_pag4()
{
	//Texto e Imagenes emergentes
	for(var i = 1; i<28; i++)
	{
		var texto = "txt" + i;
		var imagen = "img" + i;
		//texto emergente
		text = document.getElementById(texto)
		text.style.display = "none";
		//Imagenes emergente
		imagen = document.getElementById(imagen)
		imagen.style.display = "none";
	}

	//Pregunta 9 - A Mamposteria
	con2 = document.getElementById("pre_9.2.1-form")
	con2.style.display = "none";
	//Pregunta 9 - B Concreto reforzado
	con3 = document.getElementById("pre_9.2.2-form")
	con3.style.display = "none";
	//Pregunta 9 - C Prefabricado
	con4 = document.getElementById("pre_9.2.3-form")
	con4.style.display = "none";
	//Pregunta 9 - I Otro
	con1 = document.getElementById("pre9")
	con1.style.display = "none";
	//Pregunta 12 
	con5 = document.getElementById("pre_12.1_if-form")
	con5.style.display = "none";
}

function pre9()
{
	con2 = document.getElementById("pre_9.2.1-form")

	if(document.getElementById("pre_9_a").checked)
	{
		con2.style.display = "block";
	}
	else 
	{
		con2.style.display = "none";
	}

	con3 = document.getElementById("pre_9.2.2-form")

	if(document.getElementById("pre_9_b").checked)
	{
		con3.style.display = "block";
	}
	else 
	{
		con3.style.display = "none";
	}

	con4 = document.getElementById("pre_9.2.3-form")

	if(document.getElementById("pre_9_c").checked)
	{
		con4.style.display = "block";
	}
	else 
	{
		con4.style.display = "none";
	}

	con1 = document.getElementById("pre9")

	if(document.getElementById("pre_9_i").checked)
	{
		con1.style.display = "block";
	}
	else 
	{
		con1.style.display = "none";
	}
}

function pre12()
{
	con5 = document.getElementById("pre_12.1_if-form")

	if(document.getElementById("pre_12.1_si").checked)
	{
		con5.style.display = "block";
	}
	else 
	{
		con5.style.display = "none";
	}
}

//texto emergente

function text1_pop()
{
	con5 = document.getElementById("txt1")

	if(document.getElementById("btn_pop").click)
	{
		con5.style.display = "block";
	}
	else 
	{
		con5.style.display = "none";
	}
}


$(function(){
	$('.popup').load('https://es.theysay.me/ranking/111/');
  });