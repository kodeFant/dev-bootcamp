const scores = [90, 98, 89, 100, 100, 86, 94];
const scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]

const average = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    const avg = Math.round(total / arr.length);
    return avg;
};
console.log("Average score for environment science")
console.log(average(scores));
console.log("Average score for organic chemistry")
console.log(average(scores2));