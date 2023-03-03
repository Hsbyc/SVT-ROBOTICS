
const getapi = new getAPI();
const filter = document.getElementById("inputRobotId");
const list = document.getElementById("robotlist");

robotlistToUI();
eventListeners();

function eventListeners(){
filter.addEventListener("keyup", filterId);
}

function robotlistToUI() {

     getapi.getData()
     .then(data =>{
      console.log(data);// Data check on console
      data.forEach(element => { //go on every element which fetched by promise
                                //create new rows on HTML table, link low batteries  
       if(element.batteryLevel <= 20){
       
        list.innerHTML +=`
       <tr id="table-Items" class="bg-danger"> 
         <td>${element.robotId}</td>
         <td>${element.batteryLevel}</td>
         <td>${element.y}</td>
         <td>${element.x}</td>
       </tr> `;
       }
       else{

        list.innerHTML +=`
       <tr id="table-Items">
         <td>${element.robotId}</td>
         <td>${element.batteryLevel}</td>
         <td>${element.y}</td>
         <td>${element.x}</td>
       </tr> `;
         }
     })
     })
     .catch(err => console.log(err))
}


function sortTable(n) {
     
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  //Make a loop that will continue until
  //start by saying: no switching is done
  while (switching) {
    switching = false;
    rows = table.rows;
    //Loop through all table rows (except the
    //first, which contains table headers)
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      //Get the two elements you want to compare,
      //one from current row and one from the next
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      //check if the two rows should switch place
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      //If a switch has been marked, make the switch
      //and mark that a switch has been done
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}




  function filterId(e) {

     // Declare variables from UI
 
  const input = document.getElementById("inputRobotId");
  const filter = e.target.value;
  const table = document.getElementById("myTable");
  const tr = table.getElementsByTagName("tr");
    

  //Go thru every single row and bring exact robot finding by ID
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0]; // filtered by ID
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) { // Cutting unwanted data off the table
        tr[i].style.display = ""; 
      } else {
        tr[i].style.display = "none";
      }
    }
  }


    }
