// string methods

// basic inspection

const inputField = document.getElementById("typemethod");
const generateButton = document.getElementById("generatemethod");
const logNotes = document.getElementById("logstringmethod");

generateButton.addEventListener("click", () => {
    const textvalue = inputField.value.trim();
    logNotes.textContent = `
        ${textvalue}
        length     : ${textvalue.length}\n
        charAt     : ${textvalue.charAt(2)} ---- 3rd letter given text\n
        charCodeAt : ${textvalue.charCodeAt(2)}\n
        at         : ${textvalue.at(2)} ----- it support negative value\n
        indexOf    : ${textvalue.indexOf("h")} ----- find H index position given word from start\n
        lastIndexOf: ${textvalue.lastIndexOf("h")} ----- find H index position given word from lst\n
        inlcudes   : ${textvalue.includes("hello")} ----- given string have hello word it return trur\n
        startsWith : ${textvalue.startsWith("hi")} ----- staring letter have hi means return true\n
        endsWith   : ${textvalue.endsWith("bye")} ----- end with bye means return true\n
        slice      : ${textvalue.slice(0, 3)} ---- slice first three letter given string -- it support negative value\n
        substring  : ${textvalue.substring(0, 4)} ---- similar to slice but not support negative value\n
        toUpperCase: ${textvalue.toUpperCase()}\n
        toLowerCase: ${textvalue.toLowerCase()}\n
        trim       : ${textvalue.trim()} ---- remove whitespace start/end\n
        trimstart  : ${textvalue.trimStart()} ---- remove start white space\n
        trimEnd    : ${textvalue.trimEnd()} ---- remove end white space\n
        replace    : ${textvalue.replace("a", "h")} ---- replace first apperared a to h letter\n
        replaceAll : ${textvalue.replaceAll("e", "o")} --- replace all e to o\n
        padStart   : ${textvalue.padStart(20, "0")} ---- 0 fill string length add on start given letter \n
        padEnd     : ${textvalue.padEnd(20, "0")} ---- 0 fill string length add on end given letter\n
        concat     : ${textvalue.concat("--- harisundar")}\n
    `;
})


