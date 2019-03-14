module.exports = function getZerosCount(number, base) {
const counter=(lastP,lastMn,num)=>{    
        let count=0;
        while (num>0){
        num=Math.floor(num/lastMn);        
        count=count+num;
        }
      return Math.floor(count/lastP);
      }
let lastP = 1;                       
let lastMn = base;
let num = number; 

let count = counter(lastP,lastMn,num);

let midle = 0;
let i = 2;
while (i <= (base/i)) {                   
  lastP = 0;
    while (lastMn%i == 0 && i != lastMn){  
      lastMn = lastMn/i;
      lastP++;
    }
    if (lastP != 0)  {                      
      if (lastMn == i) {
        lastP++;
        midle = counter(lastP,lastMn,num);
      }else {
        midle=Math.min(counter(1,lastMn,num),counter(lastP,i,num))
      }
    if (midle>count)count=midle;         
    }       
  i++;
} 
return count;
}