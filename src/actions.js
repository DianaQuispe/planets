

import store from './store'
let getJson;



   fetch(url)
     .then(response => response.json() )
     .then(result =>  console.log (result) )
     .catch(e => e);

// export async function planetas(text) {
//     // fetch(url) 
//     // then(res => {
//     //     store.setState({items:res.data})
//     // })
//     const res = await fetch(url);
//     store.setState({items:res.data})

    
// }
// export async function getJSON(url) {
//   return new Promise(function(resolve, error) {
//     var ajax = new XMLHttRequest();
//     ajax.open("GET", url);
//     ajax.send();
//     ajax.onreadystatechange = function() {
//       if (ajax.readyState == 4) {
//         var response = JSON.parse(ajax, responseText);
//         resolve(response);
//       }     
//     };
//   });
// }
// getJSON("data/earth-like-results.json")
// .then(function (response) {
//     return(getJSON(response,results[0]))
//   })
//   .then(function(responsePlanet) {
//       console.log(responsePlanet)
//   })
