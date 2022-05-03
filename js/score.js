function score_page2()
{
    var score = 0

    //Pregunta 1.12
    if(document.getElementById("pre_1.12_a").checked)
    {
        score += 4
    }
    ifelse(document.getElementById("pre_1.12_b").checked)
    {
        score += 3
    }
    ifelse(document.getElementById("pre_1.12_c").checked)
    {
        score += 3
    }
    ifelse(document.getElementById("pre_1.12_d").checked)
    {   
        score += 2
    }
    ifelse(document.getElementById("pre_1.12_e").checked)
    {
        score += 1
    }

    //Pregunta 1.13
    if(document.getElementById("pre_1.13_si").checked)
    {
        score += 0
    }
    ifelse(document.getElementById("pre_1.13_no").checked)
    {
        score += 3
    }
    
}