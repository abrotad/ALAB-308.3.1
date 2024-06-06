

const data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const rows = data.trim().split('\n');

const dataArray = [];

rows.forEach(row => {
    const rowData = row.split(',');
    dataArray.push(rowData);
});

console.log(dataArray);
