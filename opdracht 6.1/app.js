let title = document.getElementById('title');
//Variabele met de ID erin
function kleur_aanpassen() {
    //Begin van de functie
    title.style.color = 'red';
    //Veranderd de kleur van de h1 element
    title.innerText = 'Inhoud aangepast!';
    //Veranderd de tekst van de h1 element
}
//Einde van de functie

//Is de kleur veranderd? Ja

kleur_aanpassen();
//Roept de functie op