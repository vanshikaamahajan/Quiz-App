const questions = [
  {
    que: "Who is the president of India?",
    a: "Ram Nath Kovind",
    b: "Droupadi Murmur",
    c: "Yash Singhal",
    d: "Pratibha Devisingh Patil",
    correct: "b",
  },
  {
    que: "Which state/UT launched the upgraded version of Pradhan Mantri Jan Arogya Yojana-Mukhyamantri Amrutam (PMJAY-MA) scheme?",
    a: "Karnataka",
    b: "Maharashtra",
    c: "Gujarat",
    d: "Assam",
    correct: "c",
  },
  {
    que: "Bastille Day is the National Day of which country?",
    a: "Bhutan",
    b: "Bangladesh",
    c: "France",
    d: "USA",
    correct: "c",
  },
  {
    que: "How many states and union territories are there in India?",
    a: "28 and 8",
    b: "28 and 9",
    c: "29 and 8",
    d: "29 and 9",
    correct: "a",
  },
  {
    que: "Which is the heavier metal among four?",
    a: "Gold",
    b: "Silver",
    c: "Copper",
    d: "Iron",
    correct: "a",
  },
  {
    que: " Which country are the Giza Pyramids in?",
    a: "Bhutan",
    b: "Egypt",
    c: "Brazil",
    d: "Cambodia",
    correct: "a",
  },
  {
    que: " Baby of horse is called?",
    a: "Calf",
    b: "Cub",
    c: "Foal",
    d: "Colt",
    correct: "d",
  },
  {
    que: " Dead Sea is located between which two countries?",
    a: " Jordan and Sudan",
    b: "Jordan and Israel",
    c: "Turkey and UAE",
    d: "UAE and Egypt",
    correct: "b",
  },
  {
    que: "Which country is known as the ‘playground of Europe’?",
    a: " Austria",
    b: "Holland",
    c: "Switzerland",
    d: "Italy",
    correct: "c",
  },
  {
    que: "In which country, white elephant is found?",
    a: "India",
    b: "Thailand",
    c: "Sri Lanka",
    d: "Malaysia",
    correct: "b",
  },
];

let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const quesBox=document.getElementById("quesBox");
const optionInputs=document.querySelectorAll(".options");
const loadQuestion=()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
    const data=questions[index];
    console.log(data);
    quesBox.innerText=`${index+1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
                alert("Please select an answer before proceeding.");
                return;
    }


     
        
    const data=questions[index];
    const ans=getAnswer()
    if(ans===data.correct){
    right++;
    }else{
        wrong--;
    }
    index++;
    loadQuestion();

    return;
}

const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value
            }

        }
    )
    return answer;
}

const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false;

        }
    )

}
const endQuiz=()=>{
    document.getElementById("container").innerHTML = `
    <div style="text-align:center">
    <h1>Thank You for playing the quiz</h1>
    <h2>${right}/${total} are correct</h2>
    </div>
    
    `
}

loadQuestion();
