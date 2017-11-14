import store from "./store";

// export async function planetas(text) {
//     fetch(url)
//     then(res => {
//         store.setState({items:res.data})
//     })
//     const res = await fetch(url);
//     store.setState({items:res.data})
// } earth-like-results.json
let result;
export async function getJSON() {
  let url = "data/earth-like-results.json";
  const response = await fetch(url);
   result = await response.json();
  result = result.results;
    console.log(result);

}

export async function search() {
         const url = "data/planets/Kepler-22b.json";
         fetch(url)
           .then(res => res.json())
           .then(res => {
             console.log(res);
             let thisnew = [];
             thisnew = [...store.getState().datos];
             thisnew.push(res);
             store.setState({ datos: thisnew });
             // pl_telescope : thi
           });
       }

//  fetch(url)
//    .then(response => response.json() )
//    .then(result =>  console.log (result) )
//    .catch(e => e);

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
