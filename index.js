// Code your solution in this file!
function logDriverNames(driver){
  driver.forEach(function(el,i,arr){
    console.log(el.name)
  })
}
function logDriversByHometown(driver,location){
  names= driver.filter(function(person){return person.hometown== location})
  names.forEach(function(el,i,arr){console.log(el.name)})
}
function driversByRevenue(driver){
  const driversCopy= [...driver]
  return driversCopy.sort(function(driver1,driver2){
    return driver1.revenue - driver2.revenue
  })

}
function driversByName(driver){
  return driver.sort(function(a,b){
    a.name.localeCompare(b.name)
  })
}
function totalRevenue(driver){
  return driver.reduce(function(agg,el,i,arr){return agg + el.revenue},0)
}
//or return driver.reduce(function(agg,el,i,arr){return agg.totalRevenue + el.revenue},{totalRevenue:0})
function averageRevenue(driver){
  return totalRevenue(driver) / driver.length
}
