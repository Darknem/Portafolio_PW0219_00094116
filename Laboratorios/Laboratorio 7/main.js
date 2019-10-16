var parselateswitch = value => {
    if (value) {
      return "tarde";
    }
    return "A tiempo";
  };
  
  function addstudent(carnet, schedule, late, tbody) {
    let newRow = document.createElement("tr");
    let date = new Date();
    newRow.innerHTML = `<td><b>${carnet}</b></td>
    <td>${schedule}</td>
    <td>${date.toLocaleString()}</td>
      <td>${late} </td>`;
  
    tbody.appendChild(newRow);
  }
  
  window.onload = () => {
    let submit_btn = document.querySelector("#submit_btn");
  
    let carnet_field = document.querySelector("#carnet_field");
    let schedule_field = document.querySelector("#schedule_field");
    let late_switch = document.querySelector("#late_switch");
    let tbody = document.querySelector("#table_body");
    let carnetregex = new RegExp("^[0-9]{8}$");
  
    submit_btn.addEventListener("click", function() {
      let carnet = carnet_field.value;
      let schedule = schedule_field.options[schedule_field.selectedIndex].text;
      let late = parselateswitch(late_switch.checked);
  
      if (carnetregex.test(carnet)) {
        addstudent(carnet, schedule, late, tbody);
      }
    });
    carnet_field.addEventListener("keyup", function() {
      let carnet = carnet_field.value;
      if (carnetregex.test(carnet)) {
        submit_btn.disabled = false;
      } else {
        submit_btn.disabled = true;
      }
    });
  };
  