// Dice Roller Program
function rolldice() {
    const numofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceimages  = document.getElementById("diceimages");
    const values = [];
    const images = [];

    for( let i= 0; i <  numofDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
       // images.push(`<img src="images/dice${value}.png" alt="dice${value}" width="100" height="100">`);
       images.push(`<img src="dice_image/${value}.png" alt="dice${value}" width="100" height="100">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceimages.innerHTML = images.join('');
}