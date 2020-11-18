var request = new XMLHttpRequest();
request.open('GET','http://restcountries.eu/rest/v2/all',true);
request.onerror = function () {
    console.log("** An error occurred during the transaction");
  };
request.send();
request.onload=function(){
var data = JSON.parse(this.response);
console.log(data);
let nme = data.filter((nm)=> {return nm.region == 'Asia'});
console.log(nme);
let ption = data.filter((pt)=>{return pt.population>='200000'});
console.log(ption);
let total=data.reduce((acc,tot)=>{return acc+tot.population},0);
console.log(total);
let pop = nme.reduce((accumulator,pops)=>{return accumulator+pops.population},0);
console.log(pop);
let cur = data.filter((curun)=>{return curun.currencies.name=='US Dollars'});
console.log(cur);
data.forEach(element => console.log("Name:"+element.name+"capital:"+element.capital+"Flag:"+element.flag));

}

