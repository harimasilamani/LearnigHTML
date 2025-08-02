const inputOne = document.getElementById("arthemeticinputone");
const inputTwo = document.getElementById("arthemeticinputtwo");
const generateButton = document.getElementById("generatearthemetic");
const logOutput = document.getElementById("logarthemeticoperator");

generateButton.onclick=()=>{
    const num1=inputOne.value;
    const num2=inputTwo.value;
    logOutput.textContent=`
        + : ${num1} + ${num2} = ${num1 + num2}\n
        - : ${num1} - ${num2} = ${num1 - num2}\n
        * : ${num1} * ${num2} = ${num1 * num2}\n
        / : ${num1} / ${num2} = ${parseFloat(num1 / num2).toFixed(2)}\n
        % : ${num1} % ${num2} = ${num1 % num2}\n
    `;
}