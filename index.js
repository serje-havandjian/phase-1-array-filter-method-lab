
// const findMatching = drivers.filter(function(name){
//     return name
// })


// function findMatching(drivers, driverName){
//     drivers.filter((driver) => {
//         driver === driverName
//     })
// }


function findMatching(drivers, driverName){
    return drivers.filter(function(name){
     if(name.toLowerCase() === driverName.toLowerCase()){
         return name
     }
    })
}

function fuzzyMatch(drivers, driverName){
    return drivers.filter(function(name){
        if(name[0] === driverName[0]){
            return name
        }
    })
}


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];



function matchName(drivers, driverName){
    return drivers.filter(function(driver){
        if (driver.name === driverName){
            return driver
        }
    })
}