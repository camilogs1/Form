//Pagina 2
function visu_pag2()
{
	nom_constructora = document.getElementById("nom_constructora-form")
	nom_constructora.style.display = "none";

	mapa = document.getElementById("mapa")
	mapa.style.display = "none";
}

function ver_mapa()
{
	mapa = document.getElementById("mapa")
	mapa.style.display = "block";
}

function pre10_si()
{
	nom_constructora = document.getElementById("nom_constructora-form")
	nom_constructora.style.display = "block";
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

function infopage1(){

	// Informacion Personal

		const name1 = document.getElementById("pre_1.1_t").value;
		const name2 = document.getElementById("pre_1.1.2_t").value;
		const ape1 = document.getElementById("pre_1.1.3_t").value;
		const ape2 = document.getElementById("pre_1.1.4_t").value;
		const cel = document.getElementById("pre_1.2_t").value;
		const correo = document.getElementById("pre_1.3_t").value;
		const cedu = document.getElementById("pre_1.4_t").value;
		const dire = document.getElementById("pre_1.5_t").value;
		const nomu = document.getElementById("pre_1.6_t").value;
		const depar = document.getElementById("pre_1.7_t").value;
		const muni = document.getElementById("pre_1.8_t").value;
		const barrio = document.getElementById("pre_1.9_t").value;


	// Nivel de estudios

			if(document.getElementById("pre_1.11_a").checked)
			{
				const estudios = document.getElementById("pre_1.11_a").value;
				console.log(estudios)
			}
			if(document.getElementById("pre_1.11_b").checked)
			{
				const estudiosa = document.getElementById("pre_1.11_b").value;
				console.log(estudiosa)
			}
			if(document.getElementById("pre_1.11_c").checked)
			{
				const estudiosb = document.getElementById("pre_1.11_c").value;
				console.log(estudiosb)
			}
			if(document.getElementById("pre_1.11_d").checked)
			{
				const estudiosc = document.getElementById("pre_1.11_d").value;
				console.log(estudiosc)
			}
			if(document.getElementById("pre_1.11_e").checked)
			{
				const estudiosd = document.getElementById("pre_1.11_e").value;
				console.log(estudiose)
			}

	// Año construccion

			if(document.getElementById("pre_1.12_a").checked)
			{
				const construccion = document.getElementById("pre_1.12_a").value;
				console.log(construccion)
			}
			if(document.getElementById("pre_1.12_b").checked)
			{
				const construccion = document.getElementById("pre_1.12_b").value;
				console.log(construccion)
			}
			if(document.getElementById("pre_1.12_c").checked)
			{
				const construccion = document.getElementById("pre_1.12_c").value;
				console.log(construccion)
			}
			if(document.getElementById("pre_1.12_d").checked)
			{
				const construccion = document.getElementById("pre_1.12_d").value;
				console.log(construccion)
			}
			if(document.getElementById("pre_1.12_e").checked)
			{
				const construccion = document.getElementById("pre_1.12_e").value;
				console.log(construccion)
			}

	// Constructora
			if(document.getElementById("pre_1.13_si").checked)
			{
				const constructora = document.getElementById("pre_1.13_si").value;
				console.log(constructora)
			}
			if(document.getElementById("pre_1.12_no").checked)
			{
				const constructora = document.getElementById("pre_1.12_no").value;
				console.log(constructora)
			}
			
			
			console.log(name1);
			console.log(name2);
			console.log(ape1);
			console.log(ape2);
			console.log(cel);
			console.log(correo);
			console.log(cedu);
			console.log(dire);
			console.log(nomu);
			console.log(depar);
			console.log(muni);
			console.log(barrio);
}

function nextpage2()
{

	location.href = "page3.html"
}