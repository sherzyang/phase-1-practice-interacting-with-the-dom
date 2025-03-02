function addFunctions(){

    // Automatically increase counter every second - works 
    let counter = document.getElementById("counter")
    let text;
    let number = 0;
    let newNumber;

    function autoIncrease(){
        text = counter.innerText;
        number = parseInt(text);
        newNumber = number + 1;
        counter.innerText = newNumber
    }

    let intervalID = setInterval(autoIncrease, 1000);

    // Increase and decrease the counter manually - works 
    let minus = document.getElementById("minus")
    let plus = document.getElementById("plus")

    function decreaseCount(){
        text = counter.innerText;
        number = parseInt(text);
        newNumber = number - 1;
        counter.innerText = newNumber
    }

    function increaseCount(){
        text = counter.innerText;
        number = parseInt(text);
        newNumber = number + 1;
        counter.innerText = newNumber
    }

    minus.addEventListener("click", decreaseCount)
    plus.addEventListener("click", increaseCount)

    // Take action with the heart - 1/2 works  
    let heart = document.getElementById("heart")

    function heartComment(){
        console.log("heart")
        let likes = document.getElementsByClassName("likes")[0]
        let nextBullet = document.createElement("li")
        likes.appendChild(nextBullet)
        nextBullet.innerText = `${counter.innerText} has been liked 1 time`
        // Functionality needed: ability to do both 
        // 2 has been liked 1 time
        // 9 has been liked 4 times
    }
    heart.addEventListener("click", heartComment)

    // Pause and resume the counter
    let pause = document.getElementById("pause")
    
    function counterControl(){
        if (pause.innerText == "pause") {
            clearInterval(intervalID);
            plus.setAttribute('disabled', '');
            minus.setAttribute('disabled', '');
            heart.setAttribute('disabled', '');
            pause.innerText = "resume";
        }
        else if (pause.innerText == "resume"){
            console.log("working");
            plus.removeAttribute('disabled');
            minus.removeAttribute('disabled');
            heart.removeAttribute('disabled');
            // setInterval(autoIncrease, 1000);
            pause.innerHTML = "pause";
        } 
    }

    pause.addEventListener("click", counterControl)

    // Take action with the form 
    let divOne = document.getElementsByTagName("div")[0]
    let form = divOne.querySelector("form")
    let divTwo = document.getElementsByTagName("div")[1]

    form.addEventListener("submit", (e) =>{
        e.preventDefault()
        let getForm = document.getElementById("comment-input")
        let userComment = getForm.value;
        let p = document.createElement("p")
        divTwo.appendChild(p)
        p.innerText = userComment;
        form.reset()
        })
}


// Listening for the DOM to load
document.addEventListener("DOMContentLoaded", addFunctions);