/*
fetch("https://data.energystar.gov/resource/8t9c-g3tn.json")
   .then(response => response.json())
   .then(brands => showbrands(brands));


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

function addEntries(tableID) {
  let tableRef = document.getElementById(table_ID);

  let newRow = tableRef.insertRow(1);

  let newCell = newRow.insertCell(0);
  
  let newText = document.createTextNode('New Bottom Row');
  newCell.appendchild(newText);
}

addEntries('fridge_info')