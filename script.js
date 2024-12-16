//Richiamo evento "Submit"
document.getElementById('ticket-form').addEventListener('submit', function (event) {
    event.preventDefault();


    //Estraggo i dati di inputKm e agePassenger
    const kilometers = parseFloat(document.getElementById('inputKm').value);
    const age = parseInt(document.getElementById('agePassenger').value);

    //Prezzo base
    const priceKm = 0.21;
    let totPrice = kilometers * priceKm;

    //Applica sconti
    if (age < 18) {
        totPrice *= 0.8; //Sconto 20%
    } else if (age >= 65) {
        totPrice *= 0.6; //Sconto 40%
    }

    //Formattazione a due decimali
    totPrice = totPrice.toFixed(2);
    
    //Estraggo i dati del totale
    const tot = document.getElementById('total');
    tot.innerHTML = `Prezzo totale: €${totPrice}`;
});




