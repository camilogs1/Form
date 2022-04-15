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

	//Imagenes emergentes
	for(var i = 1; i<=3; i++)
	{
		var texto = "txt" + i;
		var imagen = "img" + i;
		imagen = document.getElementById(imagen);
		imagen.style.display = "none";
	}
}

function img1_pop()
{
	con5 = document.getElementById("img1")

	if(document.getElementById("btn_img1_pop").click)
	{
		con5.style.display = "block";
	}
	else 
	{
		con5.style.display = "none";
	}
}

function img1_e_pop()
{
	con5 = document.getElementById("img1")
	con5.style.display = "none";
}

function img3_pop()
{
	con5 = document.getElementById("img3")

	if(document.getElementById("btn_img3_pop").click)
	{
		con5.style.display = "block";
	}
	else 
	{
		con5.style.display = "none";
	}
}

function img3_e_pop()
{
	con5 = document.getElementById("img3")
	con5.style.display = "none";
}

function img2_pop()
{
	con5 = document.getElementById("img2")

	if(document.getElementById("btn_img2_pop").click)
	{
		con5.style.display = "block";
	}
	else 
	{
		con5.style.display = "none";
	}
}

function img2_e_pop()
{
	con5 = document.getElementById("img2")
	con5.style.display = "none";
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
	for(var i = 1; i<=28; i++)
	{
		var texto = "txt" + i;
		var imagen = "img" + i;

		if(i == 1 || i == 3 ||i == 5 ||i == 7 ||i == 11 ||i == 17 ||i == 18 ||i == 21 ||i == 22)
		{
			//texto emergente
			text = document.getElementById(texto);
			text.style.display = "none";
			//Imagenes emergente
			imagen = document.getElementById(imagen);
			imagen.style.display = "none";
		}
		if (i == 2 ||i == 6 ||i == 8 ||i == 10 )
		{
			//texto emergente
			text = document.getElementById(texto);
			text.style.display = "none";
		}
		if (i == 4 ||i == 9 ||i == 12 ||i == 13 ||i == 14 ||i == 15 ||i == 16 ||i == 19 ||i == 20 ||i == 23 ||i == 24 ||i == 25 ||i == 26 ||   i == 27 ||i == 28)
		{
			//Imagenes emergente
			imagen = document.getElementById(imagen);
			imagen.style.display = "none";
		}
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