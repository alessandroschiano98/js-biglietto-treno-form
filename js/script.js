// PREPRAZIONE ELEMENTI DOM 

// FORM
const userForm = document.getElementById("user-form")
console.log(userForm);
// FORM INPUTS
// labels
const nameLabel = document.getElementById("name")
console.log(nameLabel);
const surnameLabel = document.getElementById("surname")
console.log(surnameLabel);
const ageLabel = document.getElementById("age")
console.log(ageLabel);
const kmLabel = document.getElementById("km")
console.log(kmLabel);
// buttons
const btnCalcola = document.getElementById("btn-calcola")
console.log(btnCalcola);
const btnReset = document.getElementById("btn-reset")
console.log(btnReset);

// RESULT
const resultLabel = document.getElementById("result-elem")




// TASTO CALCOLA //

userForm.addEventListener("calcola", gestisciUserForm); // calcola non è un codice scaturito da html

function gestisciUserForm(event) {
    event.preventDefault();
    // PRELEVO I VALORI DEGLI INPUT
    const name = nameLabel.value;
    const surname = surnameLabel.value;
    const age = parseInt(ageLabel.value);
    const km = parseInt(kmLabel.value);


    // BIGLIETTO //
    const baseTicketForKm = 0.21;
    const ticket = parseFloat(0.21 * kmLabel.value)
    console.log(ticket);

    // USER AGE SCONTO + SCONTO BIGLIETTO // 
    let saleTicket = 0;
    if (ageLabel.value < 18) {
        saleTicket = 20;
    }
    else if (ageLabel.value > 65) {
        saleTicket = 40;
    }

    // SCONTO BIGLIETTO // 
    const finalPrice = baseTicketForKm - (baseTicketForKm * saleTicket / 100)


    // INSERISCO I VALORI DEGLI ELEMENTI
    resultLabel.innerText = `Ciao ${name} ${surname} dato che la tua età corrisponde a ${age} anni ed hai intenzione di percorrere ${km} km, hai il diritto al ${saleTicket}% di sconto, dunque il costo del tuo biglietto sarà di €${finalPrice.toFixed(2)} per kilometro percorso, per un totale di €${ticket}. `;

};

// TASTO RESET // 

resetBtn.addEventListener("reset", function (event) {
    event.preventDefault();
    console.log("Reset");
    
    nameLabel.innerText = "";
    surnameLabel.innerText = "";
    ageLabel.innerText = "";
    kmLabel.innerText = "";
})