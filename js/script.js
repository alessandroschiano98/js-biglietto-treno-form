/*

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

// KM DA PERCORRERE // 
const userKmStr = prompt("Quanti chilometri vuoi percorrere?")
const userKm = parseInt(userKmStr)
console.log(userKm);


// ETA' DEL'UTENTE // 
const userAgeStr = prompt("Mi ricordi quanti anni hai?")
const userAge = parseInt(userAgeStr)
console.log(userAge);

/ BIGLIETTO //
const baseTicketForKm = 0.21;
const ticket = (0.21 * userKm)
console.log(ticket);

// ESECUZIONE LOGICA //

// USER AGE SCONTO + SCONTO BIGLIETTO // 
let saleTicket = 0; /* QUESTO INCLUDE AUTOMATICAMENTE ELSE 
if (userAge < 18) {
    saleTicket = 20;
}
else if (userAge > 65) {
    saleTicket = 40;
}

 SI AGGIUNGE Else finale solo nel momento in cui c'è una condizione che non vi è inclusa nelle altre 2 


// SCONTO BIGLIETTO // 
const finalPrice = baseTicketForKm - (baseTicketForKm * saleTicket / 100)

// MESSAGGIO SCONTO //
const message = `Il prezzo base è €${baseTicketForKm.toFixed(2)}. Visto che il passeggero ha ${userAge} anni, hai il diritto allo sconto ${saleTicket}%. Quindi il prezzo finale è €${finalPrice.toFixed(2)}`


*/

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
const boxResultLabel = document.getElementById("boxResult")
console.log(boxResultLabel);



userForm.addEventListener("btn-calcola", function () {
    console.log("btn-calcola");
    const name = nameLabel.value;
    console.log(name);
    const surname = surnameLabel.value;
    console.log(surname);
    const age = ageLabel.value;
    console.log(age);
    const km = kmLabel.value;
    console.log(km);
});
