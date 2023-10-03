const accordionContent = document.querySelectorAll(".accordion-content");

// Loop door alle gevonden "accordion-content" elementen met behulp van forEach 
//Geef elk element een index, om te weten welk element is geklikt wanneer de klikgebeurtenis plaatsvindt. 
accordionContent.forEach((item, index) => {

    // Zoek het "header"-element binnen het huidige "accordion-content" element.
    let header = item.querySelector("header");

    // Voeg een klikgebeurtenis toe aan het "header"-element.
    header.addEventListener("click", () => {

        //De code wisselt de "open"-klasse aan of uit op de huidige sectie. 
        //Dit maakt het mogelijk om de sectie te openen (weergeven) of te sluiten (verbergen) 
        //door de Class toe te voegen of te verwijderen?
        item.classList.toggle("open");


        //Zoekt naar het element binnen de sectie met de klasse "description" om de tekstinhoud te vinden.
        let description = item.querySelector(".description");

        // Controleer of het huidige "accordion-content" element de klasse "open" heeft.
        if (item.classList.contains("open")) {

            // Als het element geopend is, stel dan de hoogte van de "description" in op de scrollhoogte om de inhoud volledig weer te geven.
            description.style.height = `${description.scrollHeight}px`;
        } else {

            // Als het element gesloten is, stel dan de hoogte van de "description" in op "0px" om de inhoud te verbergen.
            description.style.height = "0px";
        }

        // Roep de functie "removeOpen" aan en geef deze de huidige index mee.
        // Zie functie hieronder!
        removeOpen(index);
    });
});



// Dit is als je eentje opent, de ander zich sluit. 
//index1 en index2 zijn willekeurige namen die worden gebruikt om twee verschillende variabelen te benoemen.
function removeOpen(index1) {

    // Loop door alle "accordionContent" secties met behulp van forEach.
    accordionContent.forEach((item2, index2) => {

        // Controleer of de huidige index (index2) niet gelijk is aan de index van de geopende sectie (index1).
        //ofwel if index 1 is niet gelijk aan index2:
        if (index1 != index2) {

            // 1. Verwijder de CSS-klasse "open" om de sectie te sluiten.
            item2.classList.remove("open");

            // 2. Zoek naar het HTML-element met de klasse "description" binnen de huidige sectie.
            let des = item2.querySelector(".description");
            
            // 3. Stel de hoogte van de "description" in op "0px" om de tekstinhoud te verbergen.
            des.style.height = "0px";
        }
    });
}



