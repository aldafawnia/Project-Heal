async function getData(){
    let url = "membership.json";
    let response = await axios.get(url)
    return response.data
}

// async function printData(){
//     let findData = await getData();
//     let monthly = document.querySelector('#monthly')
//     for (let eachData of findData){
//         let plan = document.createTextNode(eachData.plan)
//         monthly.appendChild(plan)
//     }
// }
