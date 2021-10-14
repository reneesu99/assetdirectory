console.log("hi")
var input, filter, table, entry, a, i, txtValue;

  function search() {
    console.log("TEST");
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    table = document.getElementById("fridge");
    entry = document.getElementsByTagName('tr');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < entry.length; i++) {
      if (i != 0){
        a = entry[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().includes(filter)) {
           entry[i].style.display = "";
         } else {
          entry[i].style.display = "none";
        }
      }
    
    }
  }

  function energytoggle(value, criteria) {
    console.log("test");
    filter = "";
    console.log(value)
    if (value == "0"){
      filter = "No";
    } else if (value == "1") {
      filter = "Yes";
    }
    entry = document.getElementsByName(criteria);  
    var fullentry = document.getElementsByTagName('tr');
    for (i =0; i < entry.length; i++) {
      var value1 = entry[i]
      entryvalue = (value1.textContent || value1.innerText)
      console.log(fullentry[i+1])
      console.log(entryvalue)

      if(entryvalue== filter) {
        fullentry[i+1].style.display = "";
      }
        else {
        fullentry[i+1].style.display = "none";
      }
    

    }
  }

