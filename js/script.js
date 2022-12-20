// In pieno tema natalizio sfruttiamo le timing functions per  fare il conto alla rovescia per il Natale!  Ogni secondo il nostro countdown dovrà scalare fino alla mezzanotte del 25 dicembre!
// Vi sono forniti in allegato HTML e CSS, cercate di analizzarli per capire come intervenire sul countdown.
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano dal Natale?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?

const secondsElement=document.getElementById("seconds");
const minutesElement=document.getElementById("minutes");
const hoursElement=document.getElementById("hours");
const daysElement=document.getElementById("days");



const finalDate = new Date("december 25 2022" );
const finalDateMs= finalDate.getTime();
// console.log(finalDateMs);





// console.log(difference); 

const secondMs = 1000;
// console.log(secondMs);
const minutesMs=60 * secondMs;
// console.log(minutesMs);
const hourMs= 60 * minutesMs;
// console.log(hourMs);
const dayMs= 24 * hourMs;
// console.log(dayMs);


const xmasTimer= setInterval(timer, 1000)

function timer(){
    const todayMs = new Date().getTime();
    
    const difference = finalDateMs - todayMs;

    if(difference > 0){ 
    daysElement.innerHTML=Math.floor(difference / dayMs);
    hoursElement.innerHTML=Math.floor( (difference % dayMs) / hourMs );
    minutesElement.innerHTML=Math.floor( ( difference % hourMs ) / minutesMs);
    secondsElement.innerHTML=Math.floor( (difference % minutesMs) / secondMs);
    }else{
        clearInterval(timer);
    }
  


}




