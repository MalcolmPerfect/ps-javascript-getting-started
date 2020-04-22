function showMessage(message){
    let header = document.getElementById('message');
    header.textContent = message;
header.style.color = 'red';

    // console is useful for debugging, prints to the console window in chrome dev tools
    console.log(message);
}

function changePercentOff(percentage) {
    document.getElementById('percent-off').textContent = percentage + "% OFF";
}

