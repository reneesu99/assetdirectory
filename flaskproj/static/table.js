console.log("hi")
var input, filter, table, entry, a, i, txtValue;

  function search() {
    console.log("TEST");
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById("fridge");
    entry = document.getElementsByTagName('tr');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < entry.length; i++) {
      if (i != 0){
        a = entry[i];
        // console.log(a) 
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) == -1) {
           entry[i].style.display = "";
         } else {
          entry[i].style.display = "none";
        }
      }
    
    }
  }

  function energytoggle() {
    console.log("test");
    input = document.getElementById('energystartf');
    filter = "";
    if (input.value == 0){
      filter = "NO";
    } else if (input.value == 1) {
      filter = "YES";
    }
    entry = document.getElementsByName('Meets ENERGY STAR Most Efficient 2021 Criteria');  
    for (i =0; i < entry.length; i++) {
      value = entry[i]
      txtValue = value.textContent || a.innerText;
      if(txtValue.toUpperCase() == filter) {
        entry[i].style.display = "";
      }
        else {
        entry[i].style.display = "none";
      }
    

    }
  }

