var numberofdrumbuttons = document.querySelectorAll(".drum").length;
// yaha par humlog try kr rahe h ki ek loop run karenge
// function of this loop : 
// yeh loop ke andar query selector hain woh har .drum waale tag ko select karega 
// select karne ke baad usme ek event listener add krna hain , iss event listener ke andar 2 input honge 
// first input ek action hain click jab bhi click hoga tab humlog ko ek function main enter karna hoga 
// handle click
for (let i = 0; i < numberofdrumbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    // yaha par humlog handleClick() aise nhi likh sakte hain qki yeh likhne par handleclick 
    //load hone par bhi start ho jaayega
    // important part han ki apne ko pata karna hai ki konsa button click hua hain
    // humlog use karrenge console.log(this)
    //console.log(this) yeh apne ko html element list kar dega pura 
    //th
    function handleClick() {
        playsound(this.innerHTML);
        // alert("KEY IS PRESSED");
       
     
    }
}
document.addEventListener("keypress",function(event){
    //YAHA PAR JAB KEYPRESS DETECT HOGA TOH BAAJU WALA FUNCTION TRIGGER HOGA 
playsound(event.key);
// IT MEANS KEY PROPERTY OF EVENT IS SENT TO THE playsound function
});
// event matlab ki koi bhi action jaise click kiya page load kiya key press kiya

function playsound(key){
            //abhi yeh joh key hain woh function ka parameter hain so yeh use hoga toh apne ko key as a input
            // lena hoga 
             
        //humlog ek function banayenge joh sirf character ko dekh kar judge karega so woh function ko naam dete hIN PLAY SOUND
        var buttonhtml = this.innerHTML;
        //iske andar humlog character store karenge joh humlog baad main switch statement main use karenge
        // this.style.color = "white";
        switch (key) {
            case "a":
                var crash = new Audio("sounds/crash.mp3");
                 crash.play();
            break;
            case "s":
                var kick = new Audio("sounds/kick-bass.mp3");
                 kick.play();
            break;
            case "d":
                var snare = new Audio("sounds/snare.mp3");
                 snare.play();
            break;
             case "j":
                var tom1 = new Audio("sounds/tom-1.mp3");
                 tom1.play();
            break;
            case "k":
                var tom2 = new Audio("sounds/tom-2.mp3");
                 tom2.play();
            break;    
            case "l":
               var tom3 = new Audio("sounds/tom-3.mp3");
                 tom3.play(); 
            break;
            case "w":
               var tom4 = new Audio("sounds/tom-4.mp3");
                 tom4.play(); 
            break;
        
            default:
        break;
        }
        }


