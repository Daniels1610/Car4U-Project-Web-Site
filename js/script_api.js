// const url = `https://78yx1lyjbb.execute-api.us-east-1.amazonaws.com/dev/cars?location=TIJ`;
    
//     fetch(url)
//         .then(res => {
//             return res.json();
//         })
//         .then(data => {
//             // document.querySelector(".queryResult").textContent = data.Items;
//             console.log(data.Items)
            
//             console.log(data.Items[0]);
//             let tableData = ""
//             data.Items.map((values)=>{
//                 tableData = `<h3>${values.Items[0].Location}</h3>`;
//             })
//             document.getElementById("table_body").innerHTML=tableData;
//         })
//         .catch(error => console.log(error));

// const url = `https://78yx1lyjbb.execute-api.us-east-1.amazonaws.com/dev/cars?location=TIJ`;
    
// fetch(url)
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     let tableData = "";
//     data.Items.forEach(item => {
//       const location = item.Location;
//       tableData += `<tr><td>${location}</td></tr>`;
//     });
//     document.getElementById("table_body").innerHTML = tableData;
//   })
//   .catch(error => console.log(error));

//PRUEBA 4 

const url = `https://78yx1lyjbb.execute-api.us-east-1.amazonaws.com/dev/cars?location=TIJ`;
    
fetch(url)
  .then(res => {
    return res.json();
  })
  .then(data => {
    let tableData = "";
    data.Items.forEach(item => {
      const location = item.Location.S;
      //console.log(location) // Se regresa los 15 valores
      tableData += `<tr><td>${JSON.stringify(location)}</td></tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
    })
    .catch(error => console.log(error));


// const url = `https://78yx1lyjbb.execute-api.us-east-1.amazonaws.com/dev/cars?location=TIJ`;

// fetch(url)
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     let tableData = "";
//     data.Items.forEach(item => {
//       const location = item.Location;
//       if (location) {
//         tableData += `<tr><td>${location}</td></tr>`;
//       }
//     });
//     document.getElementById("table_body").innerHTML = tableData;
//   })
//   .catch(error => console.log(error));
