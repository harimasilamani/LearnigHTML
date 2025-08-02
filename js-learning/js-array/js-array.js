const arrayMethodsLogs = document.getElementById("arraymethods");
const arrayValue = ["Apple", "Banana", "Strawberry", "Guva", "Kiwi"];
arrayMethodsLogs.textContent = `
    length       : ${arrayValue.length}\n
    Modify array :  arrayValue[0]="Orange"; --- ${arrayValue[0] = "Orange"}\n
    indexOf      :  Strawberry index position --- ${arrayValue.indexOf("Strawberry")}\n
    push         :  Adding value on array last --- ${arrayValue.push("Grapes")} --- ${arrayValue.toString()}\n
    pop          :  Remove last value on array --- ${arrayValue.pop()} --- ${arrayValue.toString()}\n
    unshift      :  Adding value on array first --- ${arrayValue.unshift("Grapes")} --- ${arrayValue.toString()}\n
    shift        :  Remove first value on array --- ${arrayValue.shift()} --- ${arrayValue.toString()}\n
    splice       :  Remove value using index value --- ${arrayValue.splice(1, 1)} --- ${arrayValue.toString()} --- splice(startIndex,Endindex)\n
    filter       :  filter value from original array and it not affect original array --- ${arrayValue.filter((item) => item.length > 5)} --- condition string lenght must morethan 5
`;
const stringArrayconvert = "Today i'm learning javascript array concepts";
console.log(stringArrayconvert.split(" "), "split the string into array based on space character");

// split string to array
const textArea = document.getElementById("stringsentence");
const letterInput = document.getElementById("singleLetter");
const generateBtn = document.getElementById("arraygenerateBtn");
const outputArrayformat = document.getElementsByClassName("generatedarray")[0];

generateBtn.onclick = () => {
    const stringValue = textArea.value;
    const singleLetter =letterInput.value;
    outputArrayformat.textContent=`[${stringValue.split(singleLetter)}]`;
}