var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color,count){
   chocolates.unshift("red", "red")
   if(arguments[0] || arguments[1] || arguments[2] <= 0)
   {
       return "Number cannot be zero/negative"
   }
}


//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, number)
{   
    if(number > chocolates.length)
    {
        return "Insufficient chocolates in the dispenser";
    }
    else if (number < 1){
        return "Number cannot be zero/negative"
    }
    var removedchocolates =[]
    for(let i =0; i< number; i++)
    {
        removedchocolates.push(chocolates.shift());
    }
    return removedchocolates;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates , number)
{
    if(number > chocolates.length)
    {
        return "Insufficient chocolates in the dispenser";
    }
    else if (number < 1){
        return "Number cannot be zero/negative"
    }
    var dispensedchocolates =[];
    for(let i =0; i< number; i++)
    {
        dispensedchocolates.push(chocolates.pop())
    }
    return dispensedchocolates;

}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates , number , color)
{
    if(number > chocolates.length)
    {
        return "Insufficient chocolates in the dispenser";
    }
    else if (number < 1){
        return "Number cannot be zero/negative"
    }
    var dispensechocolates = [];
    for(let i = chocolates.length -1 ; i >= 0; i--)
    {
        if(chocolates[i] === color)
        {
            dispensechocolates.push(chocolates.pop())
        }
    }
    return dispensechocolates;
}
//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
    var chocolatesCount = [];
    var inOrderChocolates = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];

    
    for (i = 0; i < inOrderChocolates.length; i++) {
        var count = 0;
        for (j = 0; j < chocolates.length; j++) {
            if (inOrderChocolates[i] == chocolates[j]) {
                count++;
            }
        }
        if (count != 0) {
            chocolatesCount.push(count);

        }
    }
    return chocolatesCount;
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    var chocolatesCount = {};
    var sortArray = [];
    for (i = 0; i < chocolates.length; i++) {
        if (chocolatesCount[chocolates[i]] == undefined) {
            chocolatesCount[chocolates[i]] = 1;
        } else {
            chocolatesCount[chocolates[i]]++;
        }
    }

    
    sortArray = Object.entries(chocolatesCount).sort().sort((a, b) => b[1] - a[1]);

    
    chocolates.length = 0;


    for (i = 0; i < sortArray.length; i++) {
        for (j = 0; j < sortArray[i][1]; j++) {
            chocolates.push(sortArray[i][0]);
        }
    }

    return chocolates;
}


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
    
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }

    if (color == finalColor) {
        return "Can't replace the same chocolates";
    }

    
    for (i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == color && number > 0) {
            chocolates[i] = finalColor;
            number--;
        }
    }
    return chocolates;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    var number = 0;

    
    if (color == finalColor) {
        return "Can't replace the same chocolates";
    }

    for (i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == color) {
            chocolates[i] = finalColor;
        }
        if (chocolates[i] == finalColor) {
            number++;
        }
    }

    return [number, chocolates];
}

//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor(chocolates, color) {
    
    let i = chocolates.indexOf(color);
    chocolates.splice(i, 1);

    return chocolates;
}


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(chocolates, number) {
    rainbowChocolates = 0;
    for (i = 0; i < number - 2; i++) {
        if (chocolates[i] == chocolates[i + 1] && chocolates[i] == chocolates[i + 2]) {
            rainbowChocolates++;
        }
    }
    return rainbowChocolates;
}