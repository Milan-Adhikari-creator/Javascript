// for(i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


let gameNum=25;
userNum=prompt("Guess the game number");
while(gameNum!=userNum){
    userNum=prompt("You Guess the wrong number Try again:");
}
console.log("Congratulations! You guess the correct number.");
