
// Part 1: Refactoring Old Code
console.log("Part 1: Refactoring Old Code")
console.log('---')
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cell1 = "";
let row = "";

for (const char of csv) {
    if (char !== "\n" && char !== ",") {
        cell1 += char;
    } else if (char === ",") {
        row += cell1 + " ";
        cell1 = "";
    } else if (char === "\n") {
        row += cell1;
        console.log(row);
        row = "";
        cell1 = "";
    }
}

if (cell1) {
    row += cell1;
    console.log(row);
}
console.log('End of Part 1')
console.log('---')


// Part 2: Expanding Functionality
console.log("Part 2: Expanding Functionality")
console.log('---')
const rows = csv.split("\n");
const headers = rows[0].split(",");
const numColumns = headers.length;
const data = rows.map(row => row.split(","));

console.log("Number of columns:", data[0].length);
console.log(JSON.stringify(data));

console.log('End of Part 2')
console.log('---')




// Part 3: Transforming Data
console.log("Part 3: Transforming Data");
console.log('---');

const transformedData = [];

for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const obj = {};

    headers.forEach((header, index) => {
        obj[header.toLowerCase()] = row[index]; 
    });
    transformedData.push(obj);
}

console.log(transformedData);

console.log('End of Part 3');
console.log('---');


// Part 4: Sorting and Manipulating Data
console.log("Part 4: Sorting and Manipulating Data");
console.log('---');

const sortedData = [...transformedData];

sortedData.pop();

sortedData.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

sortedData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

let totalAge = 0;
let count = 0;
sortedData.forEach(person => {
    totalAge += +person.age; 
    count++;
});

const averageAge = totalAge / count;

console.log("Sorted and Manipulated Data:", sortedData);
console.log("Average Age:", averageAge);

console.log('End of Part 4');
console.log('---');

// Part 5: Full Circle
console.log("Part 5: Full Circle");
console.log('---');

const csvHeader = 'ID,Name,Occupation,Age';
const csvRows = sortedData.map(row => 
    row.id + ',' + row.name + ',' + row.occupation + ',' + row.age
);

const finalCsv = csvHeader + '\n' + csvRows.join("\n");

console.log(finalCsv);

console.log('End of Part 5');
console.log('---');


