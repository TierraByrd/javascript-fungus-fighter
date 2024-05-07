// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log("Ready to go!")}


    onReady()
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // define variables
let myAP = 100;
let fungusHP = 100;

    // - Handle events that ->
    //start with function. Copy & paste name from 'index.html'
    function arcaneScepterAttack(event) {
        //disable page reload at onClick
        event.preventDefault();           
        console.log('Arcane Sceptor attack engaged!'); 
        //math logic for AP and HP
        fungusHP = fungusHP - 14;                     
        myAP = myAP - 12;
        //console log to see results of logic
        console.log('fungus is:', fungusHP, 'myAp is:', myAP);
        iWon();
        fungusWon();
        render();//update DOM
    
    }
    // same thing for the other three elements
    function entangleAttack(event) {
        event.preventDefault();
        console.log('Entangle attack engaged!!');
        fungusHP = fungusHP - 9;
        myAP = myAP - 23;
        console.log('fungus is:', fungusHP, 'myAp is:', myAP);
    
        iWon();
        fungusWon();
        render();//update DOM
    }
    
    function dragonBladeAttack(event) {
        event.preventDefault();
        console.log('Dragon Blade attack engaged!!!')
        fungusHP = fungusHP - 47;
        myAP = myAP - 38;
        console.log('fungus is:', fungusHP, 'myAp is:', myAP)
        iWon();
        fungusWon();
        render();//update DOM}
    
    }
    
    function starFireAttack(event) {
        event.preventDefault();
        console.log('Star-Fire attack engaged')
        fungusHP = fungusHP - 25;
        myAP = myAP - 33;
        console.log('fungus is:', fungusHP, 'myAp is:', myAP);
        iWon();
        fungusWon();
        render();//update DOM
    }
    
    
    function render(event) {
        let myAPTotal = document.getElementsByClassName("ap-text")[0];
        let fungusHPTotal = document.getElementsByClassName("hp-text")[0];
        console.log("My total AP: ", myAPTotal);
        console.log("The fungus total HP: ", fungusHPTotal);
        myAPTotal.innerHTML = myAP + 'AP';
        fungusHPTotal.innerHTML = fungusHP + 'HP'
    
    
    }
    
    function iWon() {
        if (fungusHP === 0) {
            let deadClass = document.getElementsByClassName("freaky-fungus")[0];
            deadClass.classList.add("freaky-fungus");
        }
    }
    function fungusWon() {
        if (myAP > 0) {
            let jumpClass = document.getElementsByClassName("freaky-fungus")[0]
            jumpClass.classList.add("freaky-fungus");
        }
    }
