module.exports = function getZerosCount(number, base) {
const counter = (lastP,lastMultipl,num) => {    
        let count = 0;
        while (num > 0){
          num = Math.floor(num/lastMultipl);        
          count = count+num;
        }
      return Math.floor(count/lastP);
      }
let lastP = 1;                       
let lastMultipl = base;
let num = number; 

let count = counter(lastP,lastMultipl,num);

let midle = 0;
let i = 2;
while (i <= (base/i)) {                   
  lastP = 0;
    while (lastMultipl%i == 0 && i != lastMultipl){  
      lastMultipl = lastMultipl/i;
      lastP++;
    }
    if (lastP != 0)  {                      
      if (lastMultipl == i) {
        lastP++;
        midle = counter(lastP,lastMultipl,num);
      }else {
        midle=Math.min(counter(1,lastMultipl,num),counter(lastP,i,num))
      }
    if (midle>count)count=midle;         
    }       
  i++;
} 
return count;
}