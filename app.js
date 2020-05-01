const h1 = document.querySelector('h1');
const btn = document.querySelector('button');

let message = "";

btn.addEventListener('click', getTimeOfDay);

function getTimeOfDay() {

    const dateObj = new Date();

    if(dateObj.getHours() >= 0 && dateObj.getHours() <= 12) {
        message = "It's morning";
    }
    else if(dateObj.getHours() >= 12 && dateObj.getHours() <= 17) {
        message = "It's afternoon";
    }
    else {
        message = "It's evening";
    }

    h1.innerText = message;
}
