function getDayOfWeek(date) {
    return date.toLocaleDateString('en-US', { weekday: 'long' })
}

function getTimeScopedWelcome(date) {
    const militaryHour = date.getHours();
    let welcome = "";
    switch (true) {
        case (militaryHour < 4): 
            welcome = "good night";
            break;
        case (militaryHour < 12):
            welcome = "good morning";
            break;
        case (militaryHour < 18):
            welcome = "good afternoon";
            break;
        case (militaryHour < 22):
            welcome = "good evening";
            break;
        default: 
            welcome = "good night";
    }
    
    return welcome;
}

let greetingObj = document.getElementById('Greeting');
const date = new Date();
let message = `today is <b> ${getDayOfWeek(date).toLowerCase()}, ${getTimeScopedWelcome(date)} </b> Leo!`;
greetingObj.innerHTML = message;
