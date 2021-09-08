
function fetchAndDisplay(url, tableElement) 
{
  fetch(url)
  .then(response => response.json())
  .then(items=>loadentries(items, tableElement));
}



  var input, filter, table, entry, a, i, txtValue;

  function myFunction() {
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById("fridge_info");
    entry = table.getElementsByTagName('tr');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < entry.length; i++) {
      if (i != 0){
        a = entry[i];
        console.log(a) 
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          entry[i].style.display = "";
        } else {
          entry[i].style.display = "none";
        }
      }
     
    }
  }

var table, row, cell1, cell2, cell3, response;

function loadentries(data, itemtype) {
  table = document.getElementById(itemtype)  
  var heading = data[1];
    row = table.insertRow();
    cell = row.insertCell();
    cell.innerHTML = 'Type'
    for(const [key, value] of Object.entries(heading)) {
      cell=row.insertCell();
      cell.innerHTML = `${key}`
    }

    for(var i =0; i < data.length; i++) {
        var item = data[i];
        row = table.insertRow();
        cell = row.insertCell();
        cell.innerHTML = `${itemtype}`
        for(const [key, value] of Object.entries(item)) {
          cell = row.insertCell();
          cell.innerHTML = `${value}`
        }
      }
}

var data = $.csv.toObjects("C:/Users/renee/Downloads/HWSN_Sustainability.csv");

function loadentries(){
  data
}

