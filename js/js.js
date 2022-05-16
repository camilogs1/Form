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

function infopage1()
{
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
		const longitud = document.getElementById("longitud").value;
		const latitud = document.getElementById("latitud").value;



	// Nivel de estudios

		var estudios;
			if(document.getElementById("pre_1.11_a").checked)
			{
				estudios = document.getElementById("pre_1.11_a").value;
				console.log(estudios)
			}
			if(document.getElementById("pre_1.11_b").checked)
			{
				estudios = document.getElementById("pre_1.11_b").value;
				console.log(estudios)
			}
			if(document.getElementById("pre_1.11_c").checked)
			{
				estudios = document.getElementById("pre_1.11_c").value;
				console.log(estudios)
			}
			if(document.getElementById("pre_1.11_d").checked)
			{
				estudios = document.getElementById("pre_1.11_d").value;
				console.log(estudios)
			}
			if(document.getElementById("pre_1.11_e").checked)
			{
				estudios = document.getElementById("pre_1.11_e").value;
				console.log(estudios)
			}

	// Año construccion

			var construccion;

			if(document.getElementById("pre_1.12_a").checked)
			{
				 construccion = document.getElementById("pre_1.12_a").value;
				console.log(construccion)
			}
			if(document.getElementById("pre_1.12_b").checked)
			{
				construccion = document.getElementById("pre_1.12_b").value;
				console.log(construccion)
			}
			if(document.getElementById("pre_1.12_c").checked)
			{
				construccion = document.getElementById("pre_1.12_c").value;
				console.log(construccion)
			}
			if(document.getElementById("pre_1.12_d").checked)
			{
				construccion = document.getElementById("pre_1.12_d").value;
				console.log(construccion)
			}
			if(document.getElementById("pre_1.12_e").checked)
			{
				construccion = document.getElementById("pre_1.12_e").value;
				console.log(construccion)
			}

	// Constructora

		var constructora;
			if(document.getElementById("pre_1.13_si").checked)
			{
				constructora = document.getElementById("pre_1.13_si").value;
				console.log(constructora)
			}
			if(document.getElementById("pre_1.13_no").checked)
			{
				constructora = document.getElementById("pre_1.13_no").value;
				console.log(constructora)
			}

		var nomconstructora;
			if(document.getElementById("pre_1.13_si").checked)
			{
				nomconstructora = document.getElementById("pre_1.13.2_t").value;
				console.log(nomconstructora)
			}

			var score1 = 0
		//Pregunta 1.12
		if(document.getElementById("pre_1.12_a").checked)
		{
			score1 += 4
		}
		if(document.getElementById("pre_1.12_b").checked)
		{
			score1 += 3
		}
		if(document.getElementById("pre_1.12_c").checked)
		{
			score1 += 3
		}
		if(document.getElementById("pre_1.12_d").checked)
		{   
			score1 += 2
		}
		if(document.getElementById("pre_1.12_e").checked)
		{
			score1 += 1
		}

		//Pregunta 1.13
		if(document.getElementById("pre_1.13_si").checked)
		{
			score1 += 0
		}
		if(document.getElementById("pre_1.13_no").checked)
		{
			score1 += 3
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
			console.log(score1);

			fetch("https://sheet.best/api/sheets/5006e172-632b-4954-b337-04ab21fd7946", {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify([
					{
					Pnombre: name1,
					Snombre: name2,
					Papellido: ape1,
					SApellido: ape2,
					Celular: cel,
					Correo: correo,
					Cedula: cedu,
					Direccion: dire,
					lon: longitud,
					lat: latitud, 
					NombreU: nomu,
					Departamento: depar,
					Municipio: muni,
					Barrio: barrio,
					FormacionA: estudios,
					AConstruccion: construccion,
					Constructora: constructora,
					NConstructora: nomconstructora,
					Puntaje: score1,
					},
				]),
				})
}

function nextpage2()
{
	setTimeout(function(){
		location.href = "page3.html"
	}, 1000*5);

}

	function infopage2()
	{
				// Area de vivienda

				var area;
				if(document.getElementById("pre_2.1_a").checked)
				{
					area = document.getElementById("pre_2.1_a").value;
					console.log(area)
				}
				if(document.getElementById("pre_2.1_b").checked)
				{
					area = document.getElementById("pre_2.1_b").value;
					console.log(area)
				}
				if(document.getElementById("pre_2.1_c").checked)
				{
					area = document.getElementById("pre_2.1_c").value;
					console.log(area)
				}
				if(document.getElementById("pre_2.1_d").checked)
				{
					area = document.getElementById("pre_2.1_d").value;
					console.log(area)
				}
				if(document.getElementById("pre_2.1_e").checked)
				{
					area = document.getElementById("pre_2.1_e").value;
					console.log(area)
				}
				if(document.getElementById("pre_2.1_f").checked)
				{
					area = document.getElementById("pre_2.1_f").value;
					console.log(area)
				}
				if(document.getElementById("pre_2.1_g").checked)
				{
					area = document.getElementById("pre_2.1_g").value;
					console.log(area)
				}

				//Localizacion

				var location;
				if(document.getElementById("pre_3.1_a").checked)
				{
					location = document.getElementById("pre_3.1_a").value;
					console.log(location)
				}
				if(document.getElementById("pre_3.1_b").checked)
				{
					location = document.getElementById("pre_3.1_b").value;
					console.log(location)
				}

				//Objetos cercas

				var objetos;
				if(document.getElementById("pre_3.2_a").checked)
				{
					objetos = document.getElementById("pre_3.2_a").value;
					console.log(objetos)
				}
				if(document.getElementById("pre_3.2_b").checked)
				{
					objetos = document.getElementById("pre_3.2_b").value;
					console.log(objetos)
				}
				if(document.getElementById("pre_3.2_c").checked)
				{
					objetos = document.getElementById("pre_3.2_c").value;
					console.log(objetos)
				}

				// Uso vivienda
				var uso;
				if(document.getElementById("pre_4.1_a").checked)
				{
					uso = document.getElementById("pre_4.1_a").value;
					console.log(uso)
				}
				if(document.getElementById("pre_4.1_b").checked)
				{
					uso = document.getElementById("pre_4.1_b").value;
					console.log(uso)
				}
				if(document.getElementById("pre_4.1_c").checked)
				{
					uso = document.getElementById("pre_4.1_c").value;
					console.log(uso)
				}
				if(document.getElementById("pre_4.1_d").checked)
				{
					uso = document.getElementById("pre_4.1_d").value;
					console.log(uso)
				}
				if(document.getElementById("pre_4.1_e").checked)
				{
					uso = document.getElementById("pre_4.1_e").value;
					console.log(uso)
				}
				if(document.getElementById("pre_4.1_f").checked)
				{
					uso = document.getElementById("pre_4.1_f").value;
					console.log(uso)
				}
				if(document.getElementById("pre_4.1_h").checked)
				{
					uso = document.getElementById("pre_4.1_h").value;
					console.log(uso)
				}
				if(document.getElementById("pre_4.1_i").checked)
				{
					uso = document.getElementById("pre_4.1_i").value;
					console.log(uso)
				}
				if(document.getElementById("pre_4.1_j").checked)
				{
					uso = document.getElementById("pre_4.1_j").value;
					console.log(uso)
				}

			// Uso diferente
			var usodif;
				if(document.getElementById("pre_4.2_si").checked)
				{
					usodif = document.getElementById("pre_4.2_si").value;
					console.log(usodif)
				}
				if(document.getElementById("pre_4.2_no").checked)
				{
					usodif = document.getElementById("pre_4.2_no").value;
					console.log(usodif)
				}

			//Uso primer piso

			var usopiso1;
				if(document.getElementById("pre_4.3_a").checked)
				{
					usopiso1 = document.getElementById("pre_4.3_a").value;
					console.log(usopiso1)
				}
				if(document.getElementById("pre_4.3_b").checked)
				{
					usopiso1 = document.getElementById("pre_4.3_b").value;
					console.log(usopiso1)
				}
				if(document.getElementById("pre_4.3_c").checked)
				{
					usopiso1 = document.getElementById("pre_4.3_c").value;
					console.log(usopiso1)
				}
				if(document.getElementById("pre_4.3_d").checked)
				{
					usopiso1 = document.getElementById("pre_4.3_d").value;
					console.log(usopiso1)
				}
				if(document.getElementById("pre_4.3_e").checked)
				{
					usopiso1 = document.getElementById("pre_4.3_e").value;
					console.log(usopiso1)
				}
				if(document.getElementById("pre_4.3_f").checked)
				{
					usopiso1 = document.getElementById("pre_4.3_f").value;
					console.log(usopiso1)
				}
				if(document.getElementById("pre_4.3_g").checked)
				{
					usopiso1 = document.getElementById("pre_4.3_g").value;
					console.log(usopiso1)
				}
				if(document.getElementById("pre_4.3_h").checked)
				{
					usopiso1 = document.getElementById("pre_4.3_h").value;
					console.log(usopiso1)
				}
				if(document.getElementById("pre_4.3_i").checked)
				{
					usopiso1 = document.getElementById("pre_4.3_i").value;
					console.log(usopiso1)
				}
				if(document.getElementById("pre_4.3_j").checked)
				{
					usopiso1 = document.getElementById("pre_4.3_j").value;
					console.log(usopiso1)
				}

			//Numero pisos
				
			var pisos;
				if(document.getElementById("pre_5.1_1").checked)
				{
					pisos = document.getElementById("pre_5.1_1").value;
					console.log(pisos)
				}
				if(document.getElementById("pre_5.1_2").checked)
				{
					pisos = document.getElementById("pre_5.1_2").value;
					console.log(pisos)
				}
				if(document.getElementById("pre_5.1_3").checked)
				{
					pisos = document.getElementById("pre_5.1_3").value;
					console.log(pisos)
				}
				if(document.getElementById("pre_5.1_4").checked)
				{
					pisos = document.getElementById("pre_5.1_4").value;
					console.log(pisos)
				}
				if(document.getElementById("pre_5.1_5").checked)
				{
					pisos = document.getElementById("pre_5.1_5").value;
					console.log(pisos)
				}
				if(document.getElementById("pre_5.1_6").checked)
				{
					pisos = document.getElementById("pre_5.1_6").value;
					console.log(pisos)
				}
				if(document.getElementById("pre_5.1_7").checked)
				{
					pisos = document.getElementById("pre_5.1_7").value;
					console.log(pisos)
				}

			//Ubicacion de la vivienda

			var pisovivienda;
				if(document.getElementById("pre_5.2_1").checked)
				{
					pisovivienda = document.getElementById("pre_5.2_1").value;
					console.log(pisovivienda)
				}
				if(document.getElementById("pre_5.2_2").checked)
				{
					pisovivienda = document.getElementById("pre_5.2_2").value;
					console.log(pisovivienda)
				}
				if(document.getElementById("pre_5.2_3").checked)
				{
					pisovivienda = document.getElementById("pre_5.2_3").value;
					console.log(pisovivienda)
				}
				if(document.getElementById("pre_5.2_4").checked)
				{
					pisovivienda = document.getElementById("pre_5.2_4").value;
					console.log(pisovivienda)
				}
				if(document.getElementById("pre_5.2_5").checked)
				{
					pisovivienda = document.getElementById("pre_5.2_5").value;
					console.log(pisovivienda)
				}
				if(document.getElementById("pre_5.2_6").checked)
				{
					pisovivienda = document.getElementById("pre_5.2_6").value;
					console.log(pisovivienda)
				}
				if(document.getElementById("pre_5.2_7").checked)
				{
					pisovivienda = document.getElementById("pre_5.2_7").value;
					console.log(pisovivienda)
				}

			//Sotanos
			var sotanos;
				if(document.getElementById("pre_5.3_a").checked)
				{
					sotanos = document.getElementById("pre_5.3_a").value;
					console.log(sotanos)
				}
				if(document.getElementById("pre_5.3_b").checked)
				{
					sotanos = document.getElementById("pre_5.3_b").value;
					console.log(sotanos)
				}
				if(document.getElementById("pre_5.3_c").checked)
				{
					sotanos = document.getElementById("pre_5.3_c").value;
					console.log(sotanos)
				}
				if(document.getElementById("pre_5.3_d").checked)
				{
					sotanos = document.getElementById("pre_5.3_d").value;
					console.log(sotanos)
				}
				if(document.getElementById("pre_5.3_e").checked)
				{
					sotanos = document.getElementById("pre_5.3_e").value;
					console.log(sotanos)
				}

			//Comparte muro
			var muro;
				if(document.getElementById("pre_6_si").checked)
				{
					muro = document.getElementById("pre_6_si").value;
					console.log(muro)
				}
				if(document.getElementById("pre_6_no").checked)
				{
					muro = document.getElementById("pre_6_no").value;
					console.log(muro)
				}

			//Elementos Grandes

			var elemento;
				if(document.getElementById("pre_7_a").checked)
				{
					elemento = document.getElementById("pre_7_a").value;
					console.log(elemento)
				}
				if(document.getElementById("pre_7_b").checked)
				{
					elemento = document.getElementById("pre_7_b").value;
					console.log(elemento)
				}
				if(document.getElementById("pre_7_c").checked)
				{
					elemento = document.getElementById("pre_7_c").value;
					console.log(elemento)
				}
				if(document.getElementById("pre_7_d").checked)
				{
					elemento = document.getElementById("pre_7_d").value;
					console.log(elemento)
				}
				if(document.getElementById("pre_7_e").checked)
				{
					elemento = document.getElementById("pre_7_e").value;
					console.log(elemento)
				}
				if(document.getElementById("pre_7_f").checked)
				{
					elemento = document.getElementById("pre_7_f").value;
					console.log(elemento)
				}
				if(document.getElementById("pre_7_g").checked)
				{
					elemento = document.getElementById("pre_7_g").value;
					console.log(elemento)
				}
				if(document.getElementById("pre_7_h").checked)
				{
					elemento = document.getElementById("pre_7_h").value;
					console.log(elemento)
				}

				var score2 = 0

				    //Pregunta 3.1
					if(document.getElementById("pre_3.1_a").checked)
					{
						score2 += 2
					}
					if(document.getElementById("pre_3.1_b").checked)
					{
						score2 += 1
					}
					
					//Pregunta 3.2
					if(document.getElementById("pre_3.2_a").checked)
					{
						score2 += 2
					}
					if(document.getElementById("pre_3.2_b").checked)
					{
						score2 += 1
					}
					if(document.getElementById("pre_3.2_c").checked)
					{
						score2 += 2
					}

					//Pregunta 4.1
					if(document.getElementById("pre_4.1_a").checked)
					{
						score2 += 0
					}
					if(document.getElementById("pre_4.1_b").checked)
					{
						score2 += 1
					}
					if(document.getElementById("pre_4.1_c").checked)
					{
						score2 += 2
					}
					if(document.getElementById("pre_4.1_d").checked)
					{   
						score2 += 2
					}
					if(document.getElementById("pre_4.1_e").checked)
					{
						score2 += 3
					}
					if(document.getElementById("pre_4.1_f").checked)
					{
						score2 += 3
					}
					if(document.getElementById("pre_4.1_g").checked)
					{
						score2 += 2
					}
					if(document.getElementById("pre_4.1_h").checked)
					{
						score2 += 4
					}
					if(document.getElementById("pre_4.1_i").checked)
					{
						score2 += 2
					}
					if(document.getElementById("pre_4.1_j").checked)
					{
						score2 += 0
					}

					//Pregunta 4.2.1
					if(document.getElementById("pre_4.2.1_a").checked)
					{
						score2 += 0
					}
					if(document.getElementById("pre_4.2.1_b").checked)
					{
						score2 += 0
					}
					if(document.getElementById("pre_4.2.1_c").checked)
					{
						score2 += 0
					}
					if(document.getElementById("pre_4.2.1_d").checked)
					{   
						score2 += 0
					}
					if(document.getElementById("pre_4.2.1_e").checked)
					{
						score2 += 0
					}
					if(document.getElementById("pre_4.2.1_f").checked)
					{
						score2 += 0
					}
					if(document.getElementById("pre_4.2.1_g").checked)
					{
						score2 += 0
					}
					if(document.getElementById("pre_4.2.1_h").checked)
					{
						score2 += 0
					}
					if(document.getElementById("pre_4.2.1_i").checked)
					{
						score2 += 0
					}
					if(document.getElementById("pre_4.2.1_j").checked)
					{
						score2 += 0
					}

					//Pregunta 4.3
					if(document.getElementById("pre_4.3_a").checked)
					{
						score2 += 0
					}
					if(document.getElementById("pre_4.3_b").checked)
					{
						score2 += 1
					}
					if(document.getElementById("pre_4.3_c").checked)
					{
						score2 += 2
					}
					if(document.getElementById("pre_4.3_d").checked)
					{   
						score2 += 2
					}
					if(document.getElementById("pre_4.3_e").checked)
					{
						score2 += 3
					}
					if(document.getElementById("pre_4.3_f").checked)
					{
						score2 += 3
					}
					if(document.getElementById("pre_4.3_g").checked)
					{
						score2 += 2
					}
					if(document.getElementById("pre_4.3_h").checked)
					{
						score2 += 4
					}
					if(document.getElementById("pre_4.3_i").checked)
					{
						score2 += 2
					}
					if(document.getElementById("pre_4.3_j").checked)
					{
						score2 += 0
					}
					
					//Pregunta 5.1
					if(document.getElementById("pre_5.1_1").checked)
					{
						score2 += 1
					}
					if(document.getElementById("pre_5.1_2").checked)
					{
						score2 += 1
					}
					if(document.getElementById("pre_5.1_3").checked)
					{
						score2 += 1
					}
					if(document.getElementById("pre_5.1_4").checked)
					{   
						score2 += 2
					}
					if(document.getElementById("pre_5.1_5").checked)
					{
						score2 += 2
					}
					if(document.getElementById("pre_5.1_6").checked)
					{
						score2 += 2
					}
					if(document.getElementById("pre_5.1_7").checked)
					{
						score2 += 3
					}

					//Pregunta 5.2
					if(document.getElementById("pre_5.2_1").checked)
					{
						score2 += 1
					}
					if(document.getElementById("pre_5.2_2").checked)
					{
						score2 += 1
					}
					if(document.getElementById("pre_5.2_3").checked)
					{
						score2 += 1
					}
					if(document.getElementById("pre_5.2_4").checked)
					{   
						score2 += 2
					}
					if(document.getElementById("pre_5.2_5").checked)
					{
						score2 += 2
					}
					if(document.getElementById("pre_5.2_6").checked)
					{
						score2 += 2
					}
					if(document.getElementById("pre_5.2_7").checked)
					{
						score2 += 3
					}

					//Pregunta 5.3
					if(document.getElementById("pre_5.3_a").checked)
					{
						score2 += 0
					}
					if(document.getElementById("pre_5.3_b").checked)
					{
						score2 += 1
					}
					if(document.getElementById("pre_5.3_c").checked)
					{
						score2 += 2
					}
					if(document.getElementById("pre_5.3_d").checked)
					{   
						score2 += 3
					}
					if(document.getElementById("pre_5.3_e").checked)
					{
						score2 += 3
					}
					if(document.getElementById("pre_5.3_f").checked)
					{
						score2 += 4
					}

					//Pregunta 6.1
					if(document.getElementById("pre_6_si").checked)
					{
						score2 += 3
					}
					if(document.getElementById("pre_6_no").checked)
					{
						score2 += 0
					}

					//Pregunta 7.1
					if(document.getElementById("pre_7_a").checked)
					{
						score2 += 4
					}
					if(document.getElementById("pre_7_b").checked)
					{
						score2 += 3
					}
					if(document.getElementById("pre_7_c").checked)
					{
						score2 += 3
					}
					if(document.getElementById("pre_7_d").checked)
					{   
						score2 += 4
					}
					if(document.getElementById("pre_7_e").checked)
					{
						score2 += 4
					}
					if(document.getElementById("pre_7_f").checked)
					{
						score2 += 3
					}
					if(document.getElementById("pre_7_g").checked)
					{
						score2 += 0
					}
					if(document.getElementById("pre_7_h").checked)
					{
						score2 += 0
					}

					console.log(score2);


			fetch("https://sheet.best/api/sheets/949986b8-42e3-4d19-bf2e-ea10415c858c", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([
				{
				AreaV: area,
				UbicacionV: location,
				ElementosCerca: objetos,
				UsoVivienda: uso,
				UsoAnterior: usodif,
				UsoPrimerPiso: usopiso1,
				NumeroPisos: pisos,
				PisoVivienda: pisovivienda,
				Sotanos: sotanos,
				ComparteMuro: muro,
				EquiposGrandes: elemento,
				Puntaje: score2,
				},
			]),
			}) 

	}

	function nextpage3()
	{
		setTimeout(function(){
			location.href = "page4.html"
		}, 1000*5);
	}

	function infopage3()
	{

	// Altura entre pisos

	var altura;
		if(document.getElementById("pre_8_a").checked)
		{
			altura = document.getElementById("pre_8_a").value;
			console.log(altura)
		}
		if(document.getElementById("pre_8_b").checked)
		{
			altura = document.getElementById("pre_8_b").value;
			console.log(altura)
		}
		if(document.getElementById("pre_8_c").checked)
		{
			altura = document.getElementById("pre_8_c").value;
			console.log(altura)
		}
		if(document.getElementById("pre_8_d").checked)
		{
			altura = document.getElementById("pre_8_d").value;
			console.log(altura)
		}

	//Material construccion

	var material;
		if(document.getElementById("pre_9_a").checked)
		{
			material = document.getElementById("pre_9_a").value;
			console.log(material)
		}
		if(document.getElementById("pre_9_b").checked)
		{
			material = document.getElementById("pre_9_b").value;
			console.log(material)
		}
		if(document.getElementById("pre_9_c").checked)
		{
			material = document.getElementById("pre_9_c").value;
			console.log(material)
		}
		if(document.getElementById("pre_9_d").checked)
		{
			material = document.getElementById("pre_9_d").value;
			console.log(material)
		}
		if(document.getElementById("pre_9_e").checked)
		{
			material = document.getElementById("pre_9_e").value;
			console.log(material)
		}
		if(document.getElementById("pre_9_f").checked)
		{
			material = document.getElementById("pre_9_f").value;
			console.log(material)
		}
		if(document.getElementById("pre_9_g").checked)
		{
			material = document.getElementById("pre_9_g").value;
			console.log(material)
		}
		if(document.getElementById("pre_9_h").checked)
		{
			material = document.getElementById("pre_9_h").value;
			console.log(material)
		}
		if(document.getElementById("pre_9_i").checked)
		{
			material = document.getElementById("pre_9_i").value;
			console.log(material)
		}

	//Tipo Mamposteria
		var tipomampo;
		if(document.getElementById("pre_9.2.1_a").checked)
		{
			tipomampo = document.getElementById("pre_9.2.1_a").value;
			console.log(tipomampo)
		}
		else
		{
			tipomampo = "NULL"
			console.log(tipomampo)
		}
		if(document.getElementById("pre_9.2.1_b").checked)
		{
			tipomampo = document.getElementById("pre_9.2.1_b").value;
			console.log(tipomampo)
		}
		else
		{
			tipomampo = "NULL"
			console.log(tipomampo)
		}
		if(document.getElementById("pre_9.2.1_c").checked)
		{
			tipomampo = document.getElementById("pre_9.2.1_c").value;
			console.log(tipomampo)
		}
		else
		{
			tipomampo = "NULL"
			console.log(tipomampo)
		}

	//Tipo Concreto

	var tipoconcreto;	
		if(document.getElementById("pre_9.2.2_a").checked)
		{
			tipoconcreto = document.getElementById("pre_9.2.2_a").value;
			console.log(tipoconcreto)
		}
		else
		{
			tipoconcreto = "NULL"
			console.log(tipoconcreto)
		}
		if(document.getElementById("pre_9.2.2_b").checked)
		{
			tipoconcreto = document.getElementById("pre_9.2.2_b").value;
			console.log(tipoconcreto)
		}
		else
		{
			tipoconcreto = "NULL"
			console.log(tipoconcreto)
		}
		if(document.getElementById("pre_9.2.2_c").checked)
		{
			tipoconcreto = document.getElementById("pre_9.2.2_c").value;
			console.log(tipoconcreto)
		}
		else
		{
			tipoconcreto = "NULL"
			console.log(tipoconcreto)
		}
		if(document.getElementById("pre_9.2.2_d").checked)
		{
			tipoconcreto = document.getElementById("pre_9.2.2_d").value;
			console.log(tipoconcreto)
		}
		else
		{
			tipoconcreto = "NULL"
			console.log(tipoconcreto)
		}

	//Tipo Prefabricado
		var tipoprefabricado;
		if(document.getElementById("pre_9.2.3_a").checked)
		{
			tipoprefabricado = document.getElementById("pre_9.2.3_a").value;
			console.log(tipoprefabricado)
		}
		else
		{
			tipoprefabricado = "NULL"
			console.log(tipoprefabricado)
		}
		if(document.getElementById("pre_9.2.3_b").checked)
		{
			tipoprefabricado = document.getElementById("pre_9.2.3_b").value;
			console.log(tipoprefabricado)
		}
		else
		{
			tipoprefabricado = "NULL"
			console.log(tipoprefabricado)
		}
		if(document.getElementById("pre_9.2.3_c").checked)
		{
			tipoprefabricado = document.getElementById("pre_9.2.3_c").value;
			console.log(tipoprefabricado)
		}
		else
		{
			tipoprefabricado = "NULL"
			console.log(tipoprefabricado)
		}
		if(document.getElementById("pre_9.2.3_d").checked)
		{
			tipoprefabricado = document.getElementById("pre_9.2.3_d").value;
			console.log(tipoprefabricado)
		}
		else
		{
			tipoprefabricado = "NULL"
			console.log(tipoconcreto)
		}
		if(document.getElementById("pre_9.2.3_e").checked)
		{
			tipoprefabricado = document.getElementById("pre_9.2.3_e").value;
			console.log(tipoconcreto)
		}
		else
		{
			tipoprefabricado = "NULL"
			console.log(tipoconcreto)
		}
		if(document.getElementById("pre_9.2.3_f").checked)
		{
			tipoprefabricado = document.getElementById("pre_9.2.3_f").value;
			console.log(tipoconcreto)
		}
		else
		{
			tipoprefabricado = "NULL"
			console.log(tipoconcreto)
		}


	// Piso

	var tipopiso;
		if(document.getElementById("pre_10_a").checked)
		{
			tipopiso = document.getElementById("pre_10_a").value;
			console.log(tipopiso)
		}
		if(document.getElementById("pre_10_b").checked)
		{
			tipopiso = document.getElementById("pre_10_b").value;
			console.log(tipopiso)
		}
		if(document.getElementById("pre_10_c").checked)
		{
			tipopiso = document.getElementById("pre_10_c").value;
			console.log(tipopiso)
		}
		if(document.getElementById("pre_10_d").checked)
		{
			tipopiso = document.getElementById("pre_10_d").value;
			console.log(tipopiso)
		}

	// Tipo Techo

	var tipotecho;
		if(document.getElementById("pre_11_a").checked)
		{
			tipotecho = document.getElementById("pre_11_a").value;
			console.log(tipotecho)
		}
		if(document.getElementById("pre_11_b").checked)
		{
			tipotecho = document.getElementById("pre_11_b").value;
			console.log(tipotecho)
		}
		if(document.getElementById("pre_11_c").checked)
		{
			tipotecho = document.getElementById("pre_11_c").value;
			console.log(tipotecho)
		}
		if(document.getElementById("pre_11_d").checked)
		{
			tipotecho = document.getElementById("pre_11_d").value;
			console.log(tipotecho)
		}
		if(document.getElementById("pre_11_e").checked)
		{
			tipotecho = document.getElementById("pre_11_e").value;
			console.log(tipotecho)
		}
		if(document.getElementById("pre_11_f").checked)
		{
			tipotecho = document.getElementById("pre_11_f").value;
			console.log(tipotecho)
		}
		if(document.getElementById("pre_11_g").checked)
		{
			tipotecho = document.getElementById("pre_11_g").value;
			console.log(tipotecho)
		}
		if(document.getElementById("pre_11_h").checked)
		{
			tipotecho = document.getElementById("pre_11_h").value;
			console.log(tipotecho)
		}

	//Estado daño

	var dano;
		if(document.getElementById("pre_12.1_si").checked)
		{
			dano = document.getElementById("pre_12.1_si").value;
			console.log(dano)
		}
		if(document.getElementById("pre_12.1_no").checked)
		{
			dano = document.getElementById("pre_12.1_no").value;
			console.log(dano)
		}

	// Grietas

	var grieta;
		if(document.getElementById("pre_12.2_si").checked)
		{
			grieta = document.getElementById("pre_12.2_si").value;
			console.log(grieta)
		}
		if(document.getElementById("pre_12.2_no").checked)
		{
			grieta = document.getElementById("pre_12.2_no").value;
			console.log(grieta)
		}

		var score = 0

		//Pregunta 8
		if(document.getElementById("pre_8_a").checked)
		{
			score += 1
		}
		if(document.getElementById("pre_8_b").checked)
		{
			score += 2
		}
		if(document.getElementById("pre_8_c").checked)
		{
			score += 3
		}
		if(document.getElementById("pre_8_d").checked)
		{   
			score += 3
		}
	
		//Pregunta 9.1
		if(document.getElementById("pre_9_a").checked)
		{
			score += 2
		}
		if(document.getElementById("pre_9_b").checked)
		{
			score += 1
		}
		if(document.getElementById("pre_9_c").checked)
		{
			score += 2
		}
		if(document.getElementById("pre_9_d").checked)
		{   
			score += 1
		}
		if(document.getElementById("pre_9_e").checked)
		{
			score += 2
		}
		if(document.getElementById("pre_9_f").checked)
		{
			score += 3
		}
		if(document.getElementById("pre_9_g").checked)
		{
			score += 3
		}
		if(document.getElementById("pre_9_h").checked)
		{
			score += 3
		}
		if(document.getElementById("pre_9_i").checked)
		{
			score += 0
		}
	
		//Pregunta 9.2.1  --->  Si sale
		Vatiable1 = document.getElementById("pre_9.2.1_a")
		Vatiable2 = document.getElementById("pre_9.2.1_b")
		Vatiable3 = document.getElementById("pre_9.2.1_c")
		if (typeof Vatiable1 === 'undefined')
		{
			score += 0
		}
		else
		{
			if(Vatiable1.checked)
			{
				score += 1
			}
		}
	
		if (typeof Vatiable2 === 'undefined')
		{
			score += 0
		}
		else
		{
			if(Vatiable2.checked)
			{
				score += 1
			}
		}
	
		if (typeof Vatiable3 === 'undefined')
		{
			score += 0
		}
		else
		{
			if(Vatiable3.checked)
			{
				score += 1
			}
		}
	
		//Pregunta 9.2.2  --->  Si sale
		Vatiable4 = document.getElementById("pre_9.2.2_a")
		Vatiable5 = document.getElementById("pre_9.2.2_b")
		Vatiable6 = document.getElementById("pre_9.2.2_c")
		Vatiable7 = document.getElementById("pre_9.2.2_d")
		if (typeof Vatiable4 === 'undefined')
		{
			score += 0
		}
		else
		{
			if(Vatiable4.checked)
			{
				score += 1
			}
		}
	
		if (typeof Vatiable5 === 'undefined')
		{
			score += 0
		}
		else
		{
			if(Vatiable5.checked)
			{
				score += 1
			}
		}
	
		if (typeof Vatiable6 === 'undefined')
		{
			score += 0
		}
		else
		{
			if(Vatiable6.checked)
			{
				score += 1
			}
		}
	
		if (typeof Vatiable7 === 'undefined')
		{
			score += 0
		}
		else
		{
			if(Vatiable7.checked)
			{
				score += 2
			}
		}
	
		//Pregunta 9.2.3  --->  Si sale
		Vatiable8 = document.getElementById("pre_9.2.3_a")
		Vatiable9 = document.getElementById("pre_9.2.3_b")
		Vatiable10 = document.getElementById("pre_9.2.3_c")
		Vatiable11 = document.getElementById("pre_9.2.3_d")
		Vatiable12 = document.getElementById("pre_9.2.3_e")
		Vatiable13 = document.getElementById("pre_9.2.3_f")
	
		if (typeof Vatiable8 === 'undefined')
		{
			score += 0
		}
		else
		{
			if(Vatiable8.checked)
			{
				score += 2
			}
		}
	
		if (typeof Vatiable9 === 'undefined')
		{
			score += 0
		}
		else
		{
			if(Vatiable9.checked)
			{
				score += 2
			}
		}
	
		if (typeof Vatiable10 === 'undefined')
		{
			score += 0
		}
		else
		{
			if(Vatiable10.checked)
			{
				score += 2
			}
		}
	
		if (typeof Vatiable11 === 'undefined')
		{
			score += 0
		}
		else
		{
			if(Vatiable11.checked)
			{
				score += 3
			}
		}
	
		if (typeof Vatiable12 === 'undefined')
		{
			score += 0
		}
		else
		{
			if(Vatiable12.checked)
			{
				score += 1
			}
		}
	
		if (typeof Vatiable13 === 'undefined')
		{
			score += 0
		}
		else
		{
			if(Vatiable13.checked)
			{
				score += 0
			}
		}
	
		//Pregunta 10.1
		if(document.getElementById("pre_10_a").checked)
		{
			score += 1
		}
		if(document.getElementById("pre_10_b").checked)
		{
			score += 1
		}
		if(document.getElementById("pre_10_c").checked)
		{
			score += 2
		}
		if(document.getElementById("pre_10_d").checked)
		{
			score += 1
		}
	
		//Pregunta 11
		if(document.getElementById("pre_11_a").checked)
		{
			score += 1
		}
		if(document.getElementById("pre_11_b").checked)
		{
			score += 1
		}
		if(document.getElementById("pre_11_c").checked)
		{
			score += 3
		}
		if(document.getElementById("pre_11_d").checked)
		{
			score += 1
		}
		if(document.getElementById("pre_11_e").checked)
		{
			score += 2
		}
		if(document.getElementById("pre_11_f").checked)
		{
			score += 3
		}
		if(document.getElementById("pre_11_g").checked)
		{
			score += 1
		}
		if(document.getElementById("pre_11_h").checked)
		{
			score += 3
		}
	
		//Pregunta 12.1
		if(document.getElementById("pre_12.1_si").checked)
		{
			score += 4
		}
		if(document.getElementById("pre_12.1_no").checked)
		{
			score += 0
		}
	
		//Pregunta 12.2
		if(document.getElementById("pre_12.2_si").checked)
		{
			score += 3
		}
		if(document.getElementById("pre_12.2_no").checked)
		{
			score += 0
		}
	
		console.log(score)


		fetch("https://sheet.best/api/sheets/328d17e6-3170-4f78-af6a-6a40370a88e0", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([
				{
					AlturaEntrePisos: altura,
					MaterialConstruccion: material,
					TipoEntrepiso: tipopiso,
					TipoTecho: tipotecho,
					Hundimiento: dano,
					Grietas: grieta,
					TipoMamposteria: tipomampo,
					TipoConcretoR: tipoconcreto,
					TipoPrefabricado: tipoprefabricado,
					Puntaje: score,
				},
			]),
			})
	}


	function toindex()
	{
		setTimeout(function(){
			location.href = "index.html"
		}, 1000*5);
	}