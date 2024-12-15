//Richiamo evento "Submit"
document.getElementById('ticket-form').addEventListener('submit'), function (call) {
    call.preventDefault();
}

//Estraggo i dati di inputKm e agePassenger
const kilometers = parseFloat(document.getElementById('inputKm').value);
const age = parseInt(document.getElementById('agePasseenger').value);


