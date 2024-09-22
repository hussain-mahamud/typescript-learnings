//Callbacks are a great approach to dealing with something once another task has been finished

function getSummary(number1, number2, callback) {
    let sum = number1 + number2;
    callback(sum);
}

function showSummary(sum) {
    console.log('The sum is: ' + sum);
}

getSummary(5, 10, showSummary); // The sum is: 15