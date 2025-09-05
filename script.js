function calculate() {
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    let operator = document.getElementById("operators").value;
    let num; 

    if (operator === "+") {
        num = input1 + input2;
    } else if (operator === "-") {
        num = input1 - input2;
    } else if (operator === "*") {
        num = input1 * input2;
    } else if (operator === "/") {
        // handle division by zero safely
        num = input2 !== 0 ? input1 / input2 : "Error (÷0)";
    } else if (operator === "**") {
        num = input1 ** input2;
    } else if (operator === "%") {
        num = input1 % input2;
    } else {
        alert("Invalid operator!");
        return;
    }

    document.getElementById("result").value = num;
}







