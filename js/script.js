// PREPRAZIONE ELEMENTI DOM 

// FORM
const userForm = document.getElementById("user-form")
console.log(userForm);
// FORM INPUTS
const nameLabel = document.getElementById("name")
console.log(nameLabel);
const surnameLabel = document.getElementById("surname")
console.log(surnameLabel);
const ageLabel = document.getElementById("age")
console.log(ageLabel);
const kmLabel = document.getElementById("km")
console.log(kmLabel);


// RESULT
const btnCalcolaTotale = document.getElementById("btn-calcola")
console.log(btnCalcolaTotale);
const boxResultLabel = document.getElementById("box-result")
console.log(boxResultLabel);
const resultLabel = document.getElementById("result-elem")





userForm.addEventListener("submit", gestisciUserForm); // calcola non è un codice scaturito da html

function gestisciUserForm(event) {
    event.preventDefault();
    // PRELEVO I VALORI DEGLI INPUT
    const name = nameLabel.value;
    const surname = surnameLabel.value;
    const age = ageLabel.value;
    const km = kmLabel.value;


    // BIGLIETTO //
    const baseTicketForKm = 0.21;
    const ticket = (0.21 * kmLabel)
    console.log(ticket);

    // USER AGE SCONTO + SCONTO BIGLIETTO // 
    let saleTicket = 0;
    if (ageLabel < 18) {
        saleTicket = 20;
    }
    else if (ageLabel > 65) {
        saleTicket = 40;
    }

    // SCONTO BIGLIETTO // 
    const finalPrice = baseTicketForKm - (baseTicketForKm * saleTicket / 100)


    // INSERISCO I VALORI DEGLI ELEMENTI
    resultLabel.innerText = `Ciao ${name} ${surname} dato che la tua età corrisponde a ${age} anni ed hai intenzione di percorrere ${km} km, hai il diritto al ${saleTicket}% di sconto, dunque il costo del tuo biglietto sarà di €${finalPrice.toFixed(2)} `;





};
