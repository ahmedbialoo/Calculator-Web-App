function getHistory() {
    return document.getElementById('historyValue').innerHTML;
}

function printHistory(num) {
    document.getElementById('historyValue').innerHTML = num;
}

function getOutput() {
    return document.getElementById('outputValue').innerHTML;
}

function printOutput(num) {
    document.getElementById('outputValue').innerHTML = getFormateNum(num)
}

function getFormateNum(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num).toLocaleString("en")
    return n;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''))
}
var operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (this.id == "clear") {
            printOutput("");
            printHistory("");
        }
        if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1)
                }
            } else if (output != "" || history != "") {
                output = output = "" ? output : reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    if (this.id == "clear") {
                        printHistory("");
                        printOutput("");
                    } else {
                        history = history + this.id;
                        printHistory(history);
                        printOutput("");
                    }
                }
            }
        }
    });
}
var keys = document.getElementsByClassName('keys');
var outputValue = document.getElementById('outputValue');
for (var i = 0; i < keys.length; i++) {

    keys[i].addEventListener('click', function() {
        var output = reverseNumberFormat(getOutput());
        if (outputValue.innerHTML.length <= 14) {

            if (output != NaN) {
                output = output + this.id;
                printOutput(output)
            }
        }
    })
}