// Criteria for task.

// The total number of months included in the dataset.

// The net total amount of Profit/Losses over the entire period.

// The average of the changes in Profit/Losses over the entire period.

// You will need to track what the total change in profits are from month to month and then find the average.
// (Total/Number of months)
// The greatest increase in profits (date and amount) over the entire period.

// The greatest decrease in losses (date and amount) over the entire period.

var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

// Header for analysis
console.log("Financial Analysis");

console.log("----------------------------");

// The total number of months included in the dataset.

var totalMonths = finances.length

console.log("Total Months: " + totalMonths);




// The net total amount of Profit/Losses over the entire period.

// PC 
// To display total amount, the number values have to be added together.
// The first step could be to separate the numbers into a new array, or at least target them in this array.

// var onlyNumbers = finances.filter("number"); //couldn't get filter to work

// console.log(typeof finances); // object

//Loop for outputting numbers to console

var onlyNumbers = []
for (var i = 0; i < totalMonths; i++) {
    onlyNumbers.push(finances[i][1]);

}
    // console.log(onlyNumbers)

// Now make output to new array for sum calculation

// var monthTotal = finances.map(finances => finances.number)
// console.log(monthTotal);

var netProfits = 0;
for (var n of onlyNumbers)
    netProfits += n;

console.log("Net Profits Total: $" + netProfits);

// Now output separate values of profits and losses
// In order to calculate this the array could be filtered into 2 new arrays of positive and negative numbers. The 2 new arrays can then be totaled to obtain the values.

var posNum = []
var negNum = []

for(var i = 0; i < totalMonths; i++){
   
   if(onlyNumbers[i] > 0){
     posNum.push(onlyNumbers[i]);
     
   }
   else{
    negNum.push(onlyNumbers[i]);
    
   }
}

// console.log(posNum);
// console.log(negNum);

//  Now need to total both of the 2 arrays and log to console.

// total of positive numbers
var netPosNum = 0;
for (var n of posNum)
    netPosNum += n;

console.log("of which profits: $" + netPosNum);

// total of negative numbers
var netNegNum = 0;
for (var n of negNum)
    netNegNum += n;

console.log("of which profits: $" + netNegNum);



// The average of the changes in Profit/Losses over the entire period.
// First need to calculate each months change Profit/Losses, then total the amounts and divide by totalMonths
// To calculate a single months change, the total of a months Profit/Losses has to subtracted from the following months Profit/Losses.

// PC 
// this can be achieved by creating a loop which calculates the subtraction and outputs the values to a new array.
// this new array can then be totalled and divided by totalMonths and logged to console.

// First the loop

// var profitChange = []
// for (var i = 0; i < totalMonths; i++) {
//     profitChange.push((onlyNumbers[i])-(onlyNumbers[i++]));    Couldn't get this to work.

// }

// console.log(profitChange);

// new PC
// an alternative could be to create 2 new arrays one month apart then subtract one from the other 


var firstMonth = onlyNumbers.slice(0, -1);

var followingMonth = onlyNumbers.slice(1);

var monthChange = followingMonth.map((n, i) => n - firstMonth[i]);

// console.log(firstMonth);
// console.log(followingMonth);

// console.log(monthChange);

// You will need to track what the total change in profits are from month to month and then find the average.

var sumMonthChange = 0;
for (var n of monthChange)
    sumMonthChange += n;

    // console.log(sumMonthChange);

// (Total/Number of months)
var aveChange = (sumMonthChange / monthChange.length)

// You will need to track what the total change in profits are from month to month and then find the average.


console.log("Average Change in Profits: $" + aveChange.toFixed(2));

// The greatest increase in profits (date and amount) over the entire period.
// to find the greatest increase, the largest positive number in posNum has to be identified
// once identified this must be added to the corresponding month in original array, finances, then logged to console

var bigProf = (Math.max(...posNum));

// console.log(bigProf);


// The greatest decrease in losses (date and amount) over the entire period.
// to find the greatest decrease, the largest negative number in negNum has to be identified
// once identified this must be added to the corresponding month in original array, finances, then logged to console

var bigLoss = (Math.min(...negNum));

// console.log(bigLoss);   


var bigProfMonth = onlyNumbers.indexOf(bigProf)
// console.log(bigProfMonth); //25

console.log("The greatest increase in profits: " + finances[bigProfMonth][0] + " ($" + monthChange[bigProfMonth-1] + ")"); // -1 needed as the array monthChange has 1 element less than the original array, finances.

var bigLossMonth = onlyNumbers.indexOf(bigLoss)
// console.log(bigLossMonth);  //44

console.log("The greatest decrease in profits: " + finances[bigLossMonth][0] + " ($" + monthChange[bigLossMonth-1] + ")");
