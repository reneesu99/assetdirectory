
fetch("https://data.energystar.gov/resource/8t9c-g3tn.json")
   .then(response => response.json())
   .then(fridges => loadentries(fridges));

/*
showbrands = brands => {
    const brand_names_list = document.querySelector("#brand_names");
    brands.forEach(brand => {
      const brandElement = document.createElement("li");
      brandElement.setAttribute("type", "brand")
      brandElement.innerText = `${brand.brand_name}`;
      brand_names_list.append(brandElement);
    });
  }
  var input, filter, ul, li, a, i, txtValue;

  function myFunction() {
    // Declare variables
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("brand_names");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i];
      console.log(a) 
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  */
 /*
let table_ID;
let tableRef;

addEntries('fridge_info')

function addEntries(table_ID) {
    tableRef = document.getElementById(table_ID);
  
    let newRow = tableRef.insertRow(0);
  
    let newCell1 = newRow.insertCell(0);
    
    let newText1 = document.createTextNode('New Bottom Row');
    newCell1.appendchild(newText1);
    
    let newCell2 = newRow.insertCell(0);
    
    let newText2 = document.createTextNode('New Bottom Row');
    newCell2.appendchild(newText2);

    let newCell3 = newRow.insertCell(0);
    
    let newText3 = document.createTextNode('New Bottom Row');
    newCell3.appendchild(newText3);
}
  
 */
var table, row, cell1, cell2, cell3, response;

loadentries = response => {
    table = document.getElementById('fridge_info');
    /*row = table.insertRow();
    cell1 = row.insertCell();
    cell2 = row.insertCell();
    cell3 = row.insertCell();
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";*/
    for(var i =0; i < response.length; i++) {
        var entry = response[i];
        row = table.insertRow();
        cell1 = row.insertCell();
        cell1.innerHTML = `${response[i].brand_name.slice(0,10)}`
        cell3 = row.insertCell();
        cell3.innerHTML = `${response[i].model_number.slice(0,10)}`
        cell2 = row.insertCell();
        cell2.innerHTML = `true`
        
        }
    }
