// console.log(data)

// create variables to access HTML tags
var table = d3.select('table');
var tbody = d3.select('tbody');

// for loop to append data.js to table on website
data.forEach((ufoData) => {
    // console.log(ufoData);
    var row = tbody.append('tr');
    Object.entries(ufoData).forEach(([key,value]) => {
        // console.log(key,value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Event listner for date input
var button = d3.select('#filter-btn')
var form = d3.select('form')

button.on('click', runEnter)
form.on('submit', runEnter)

// function ran when form submitted
function runEnter() {
    d3.event.preventDefault();
    
    // remove the table for user input
    d3.select("tbody").remove();
    
    // add tbody back to table
    table.append('tbody');
    var tbody = d3.select('tbody');

    // create variable to hold user input
    var inputElement = d3.select('#datetime');
    var inputDate = inputElement.property('value');
    
    // if the input form is blank, append original table
    if (inputDate === "") {
        data.forEach((ufoData) => {
            // console.log(ufoData);
            var row = tbody.append('tr');
            Object.entries(ufoData).forEach(([key,value]) => {
                // console.log(key,value);
                var cell = row.append('td');
                cell.text(value);
            });
        });       
    } else {
        // return table based on user input
        var filterData = data.filter(ufo => ufo.datetime === inputDate);
        if (filterData.length === 0) {
            // if filterData is empty, print message for user
            var row = tbody.append('tr');
            for (var i = 0; i<7; i++){
                var cell = row.append("td");
                cell.text("NO SIGHTINGS AVAILABLE");
            }
        } else {
            filterData.forEach((ufoData) => {
                // console.log(ufoData);
                var row = tbody.append('tr');
                Object.entries(ufoData).forEach(([key,value]) => {
                    // console.log(key,value);
                    var cell = row.append('td');
                    cell.text(value);
                });
            });
        };
    }
    
    // console log data array based on user input.
    console.log(filterData)

}