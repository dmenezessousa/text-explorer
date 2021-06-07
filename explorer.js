// Request prompt-sync
const prompt = require('prompt-sync')();
const welcome = prompt('Hello, Welcome to the Great Adventure game. Press "ENTER" to start. ');
const name = prompt("What's Your Name?. ");

//Greed User

console.log('#%:.');
console.log('#%=   ###%=:');
console.log('##%=   |##%::');
console.log('##%=   ###%=:');
console.log('#%%=  |##%=:');
console.log('##%== ###%=:    ===');
console.log(' ##%%=!##%=:    ====');
console.log('  ###%%##%=   :====');
console.log('   ######%=: .:====');
console.log('     ####%%=======');
console.log('      ###%%%===:');
console.log('      |%#%%=:=:');
console.log('      ####%=:');
console.log('      |##%%:');
console.log('-------####%:---=');
console.log('      |%#%%:');
console.log('Hello, ',name,' your jorney begins now.');
console.log( "You are lost in the Exile's Desert.");
console.log('You have to find the "Oasis" to survive and win this game!!');
console.log("If you go too far from the 'Oasis, It's Game Over.");

// ASCII arts 
let scorpion = "( _<    >_ )\n//        \\\n\\\\___..___//\n `-(    )-'\n   _|__|_\n  /_|__|_\\\n  /_|__|_\\\n  /_\\__/_\\\n   \\ || /  _)\n     ||   ( )\n    \\\\___//\n      '---'";

let dangerZone = "                             .-.\n                             (  o)-.\n                              ) )\|\)\n                           _./ (,_ \n                          ( '**'  )\n                          \\\\\\   ///\n                           \\\\\\|///\n                     _______//|\\\\____________               .\n                   ,'______///|\\\\\\________,'|            \  :  /\n     _ _           |  ____________________|,'             ' _ '    ' Y ' _ _      | ||              |                -= ( (_) )=-\n    _ _  ' Y '     | ||              |                    .   .   ' Y '_ _        | ||              |                   /  :  \\n       ( Y )       | ||              8                      '\n                   | ||              8\n                   | ||        /\\/\\  8\n                   | ||      .'   ``/|\n                   | ||      | x   ``|\n                   | ||      |  /. `/` \n                   | ||      '_/|  /```                 .-.\n                   | ||        (_,' ````                |.|\n  |J               | ||         |       \\             /)|`|(\\\n L|                | ||       ,'         \\           (.(|'|)`)\n  |                | ||     ,','| .'      \\           `\\`'./'\n                   | ||~~~~~||~~||.       \\~~~~~~~~~~~~|.|~~~~~~~~~~~ \n                   | ||     ||  || \\        \\          ,|`|.\n  ~~               | ||     ''  ''  \        \          '''   ~~\n                   | ||              )   .   )   \n                   | ||             / ,   ),'|      ~~\n             ~~    | ||         ___/ /   ,'  |              (_)\n      ((__))       | ||   ~~   I____/  ,'    |              /'/\n      ( 0 0)       | ||         I____,'      *             ^~^\n       `\\_\\\\       | ||                          ~~\n         ''''      | ||  \n  ~~               | ||         ~~                          ~~\n                   |_|/\n";

let oasis = "           _  _             _  _\n  .       /\\\\/%\       .   /%\\/%\\     .\n      __.<\\\\%#//\\,_       <%%#/%%\\,__  .\n.    <%#/|\\\\%%%#///\\    /^%#%%\\///%#\\\\\n      ''/%/''\\ \\''//|   |/'''/ /\\//'//'\n .     L/'`   \\ \\  `    '   / /  ```\n        `      \\ \\     .   / /       .\n .       .      \\ \\       / /  .\n        .        \\ \\     / /          .\n   .      .    ..:\\ \\:::/ /:.     .     .\n______________/ \\__;\\___/\\;_/\\________________________________\nYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYwYw\n";

// Start Values
let x = 0;
let y = 0;
let limit = 7;
let limitNeg = -7;
let lives = 10;

let gameRunning = true;

//Game Loop
while(gameRunning){
    //Show User Coordiantes + next move
    let answer = prompt('Your coordinates are ('+ x +','+ y +'). Would you like to go "up", "right", "down", or "left"?'); 
    console.log(answer);
    //Answer Condictions
    if(answer == 'up'){
        y += 1;
    }
    else if(answer == 'down'){
        y -= 1;
    }
    else if(answer == 'right'){
        x += 1;
    }
    else if(answer == 'left'){
        x -= 1;
    }
    else if( answer == 'end'){
        gameRunning = false;
    }
    else{
        console.log('Invalid Move, Try using "right", "up" ,"left" ,"down". ');
    }
    //Alerts for User
    if(x !== -1 || x !== 1 && y !== -1 || y !== 1){
        console.log('keep moving..');
    }
    if(x == 4 && y == 5){
        console.log('You are almost there, Look Around..');
    }
    if(x == 5 && y == 4){
        console.log('You are almost there, Look Around..');
    }
    if(x == 4 && y == 3){
        console.log('You are almost there, Look Around..');
    }
    if(x == 3 && y == 4){
        console.log('You are almost there, Look Around..');
    }
    if(x <= -3 && y <= -3){
        lives -= 1;
        console.log(dangerZone);
        console.log('You are entering a Danger Zone, You have lost a life Point, Be carefull.');
        console.log('lives Remaining: '+ lives +' ');
    }
    if(lives == 0){
        console.log('You have lost all yout HP, Game Over. Try Again!!');
        x = 0;
        y = 0;
        lives = 10;
    }
    // If user Pass over set coordinates
    if(x == limit || x == limitNeg || y == limit || y == limitNeg){
        console.log('Game Over, you got killed by a Scorpion. Try Again.');
        console.log(scorpion);
        x = 0;
        y = 0;
    }
    // End the game
    if(x === 4 && y === 4){
        console.log(oasis);
        console.log('Congrats '+ name +' you found the "Oasis".');
        gameRunning = false;
    }
}





