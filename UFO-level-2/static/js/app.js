// console.log(data)

var table = d3.select('table');
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
var form = d3.selectAll('form')

button.on('click', runEnter)
form.on('submit', runEnter)

function runEnter() {
    d3.event.preventDefault();
    
    d3.select("tbody").remove();
    
    table.append('tbody');
    var tbody = d3.select('tbody');

    var inputElement = d3.select('#datetime');
    var inputDate = inputElement.property('value');
    var inputElement2 = d3.select('#city-name');
    var inputCity = inputElement2.property('value');
    
    
    if (inputDate === "" && inputCity === "") {
        data.forEach((ufoData) => {
            // console.log(ufoData);
            var row = tbody.append('tr');
            Object.entries(ufoData).forEach(([key,value]) => {
                // console.log(key,value);
                var cell = row.append('td');
                cell.text(value);
            });
        });
    } else if (inputCity === "") {
        var filterData = data.filter(ufo => ufo.datetime === inputDate);
        filterData.forEach((ufoData) => {
                // console.log(ufoData);
            var row = tbody.append('tr');
            Object.entries(ufoData).forEach(([key,value]) => {
                // console.log(key,value);
                var cell = row.append('td');
                cell.text(value);
            });
        });
    } else if (inputDate === "") {
        var filterData = data.filter(ufo => ufo.city === inputCity);
        filterData.forEach((ufoData) => {
            // console.log(ufoData);
            var row = tbody.append('tr');
            Object.entries(ufoData).forEach(([key, value]) => {
                // console.log(key,value);
                var cell = row.append('td');
                cell.text(value);
            });
        });
    } else {
        var filterData = data.filter(ufo => ufo.city === inputCity && ufo.datetime === inputDate);
        if (filterData.length === 0) {
            var row = tbody.append('tr');
            for (var i = 0; i < 7; i++) {
                var cell = row.append("td");
                cell.text("NO SIGHTINGS AVAILABLE");
            };
        } else {
            filterData.forEach((ufoData) => {
                // console.log(ufoData);
                var row = tbody.append('tr');
                Object.entries(ufoData).forEach(([key, value]) => {
                    // console.log(key,value);
                    var cell = row.append('td');
                    cell.text(value);
                });
            });
        };
    };
    
    console.log(filterData)

};