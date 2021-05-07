// console.log(data)

var tbody = d3.select('tbody');

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
button.on('submit', runEnter)

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select('#datetime');
    var inputDate = inputElement.property('value');
    

    var filterData = data.filter(ufo => ufo.datetime === inputDate);
    console.log(filterData)
}