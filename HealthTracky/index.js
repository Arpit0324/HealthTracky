// Define gender variables
let gender = "male";
const female = document.getElementById("female");
const male = document.getElementById("male");

// Set female as a gender
function setWoman(){
    female.classList.add("active");
    male.classList.remove("active");
    gender = "female";
}

// Set male as a gender
function setMan(){
    male.classList.add("active");
    female.classList.remove("active");
    gender = "male";
}

// Define sliders and values variables
const heightValue = document.getElementById("heightValue");
const heightSlider = document.getElementById("height");
const weightValue = document.getElementById("weightValue");
const weightSlider = document.getElementById("weight");
const ageValue = document.getElementById("ageValue");
const ageSlider = document.getElementById("age");

// Set values
function setrange(){
    let heightSliderValue = heightSlider.value;
    heightValue.textContent = heightSliderValue;
    let weightSliderValue = weightSlider.value;
    weightValue.textContent = weightSliderValue;
    let ageSliderValue = ageSlider.value;
    ageValue.textContent = ageSliderValue;
}

// Define variables to change screen
const ui = document.getElementById("ui");
const resultUi = document.getElementById("result");

// Define variables to show result visually
let progressBar = document.querySelector(".circular-progress");
let progressNumber = document.getElementById("progressNumber");
let progressResult = document.getElementById("progressResult");
let recalculate = document.getElementById("recalculate");
let heading = document.getElementById("heading");
let suggesion = document.getElementById("suggesion");

// Calculate and show result
function calculate(){

    // Calculate BMI
    let bmi = (weightSlider.value / Math.pow((heightSlider.value / 100), 2)).toFixed(1);

    // Variables for progress bar
    let result = "";
    let progressValue = 0;
    let progressEndValue = bmi;
    let speed = 5;
    let progressColor = "";

    // Conditions for showing result
    if(bmi < 18.5){
        result = "Skinny";
        progressColor = "FFC44D"
        progressNumber.style.color = "#ffff10";
        progressResult.style.color = "#ffff10";
        recalculate.style.background = "#ffff10";
        recalculate.style.color = "#000000";
        heading.style.background = "#ffff10";
        heading.style.color = "#000000";
        suggesion.textContent = "If diet is the cause of your underweight, eating a healthy, balanced diet that provides the right amount of calories for your age, height and activity level can help you achieve a healthy weight. Aim to gain weight slowly until you reach a healthy weight."
    }
    else if(bmi >= 18.5 && bmi <= 25.2){
        result = "Healthy-Fit";
        progressColor = "0BE881"
        progressNumber.style.color = "#00ff55";
        progressResult.style.color = "#00ff55";
        recalculate.style.background = "#00ff55";
        recalculate.style.color = "#FFFFFF";
        heading.style.background = "#00ff55";
        heading.style.color = "#FFFFFF";
        suggesion.textContent = "Being active and making healthy food choices can help you maintain or gain a healthy weight, have more energy, and reduce your chances of developing other health problems. It is important to choose nutrient-dense foods and aim for at least 150 minutes of physical activity per week."
    }
    else if(bmi >= 25.2 && bmi <= 30){
        result = "Overweight";
        progressColor = "FF884D"
        progressNumber.style.color = "#FF884D";
        progressResult.style.color = "#FF884D";
        recalculate.style.background = "#FF884D";
        recalculate.style.color = "#FFFFFF";
        heading.style.background = "#FF884D";
        heading.style.color = "#FFFFFF";
        suggesion.textContent = "The best way to treat excess weight is to eat a healthy, low-calorie diet and exercise regularly. Here's what you can do: Eat a balanced, calorie-controlled diet as directed by your doctor, or join a local weight loss group with a weight management health professional (such as a dietitian)."
    }
    else{
        result = "Critical-Condition";
        progressColor = "FF5E57"
        progressNumber.style.color = "#f90505";
        progressResult.style.color = "#f90505";
        recalculate.style.background = "#f90505";
        recalculate.style.color = "#FFFFFF";
        heading.style.background = "#f90505";
        heading.style.color = "#FFFFFF";
        suggesion.textContent = "Reducing calories and practicing healthier eating habits are vital to overcoming obesity. Although you may lose weight quickly at first, steady weight loss over the long term is considered the safest way to lose weight and the best way to keep it off permanently."
    }

    // Set progress bar value
    let progress = setInterval(()=> {
        progressValue = progressValue + 0.1;
        progressNumber.textContent = `${progressValue.toFixed(1)}%`;
        progressResult.textContent = `${result}`;
        progressBar.style.background = `conic-gradient(#${progressColor} ${progressValue * 3.6}deg, #CADCFF ${progressValue * 3.6}deg)`;
        if(progressValue > progressEndValue){
            clearInterval(progress);
        }
    }, speed);

    // Change screen
    ui.classList.add("hide");
    resultUi.classList.remove("hide");
}

// Change screen again
function reCalculate(){
    resultUi.classList.add("hide");
    ui.classList.remove("hide");
    heading.style.background = `linear-gradient(135deg, #e9681d, #ebca22)`
    heading.style.color = "#FFFFFF"
}
