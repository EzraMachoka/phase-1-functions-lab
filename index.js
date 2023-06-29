// Code your solution in this file!
function distanceFromHqInBlocks(Value) {
    if(Value > 42){
     return Value - 42
    }
    
    else{
        return 42 - Value
    }
   }
 
 function distanceFromHqInFeet(Value){
   let distanceInBlocks = distanceFromHqInBlocks(Value)
   return distanceInBlocks * 264
 }

 function distanceTravelledInFeet(start, destination) {
     if(destination > start){
         return ( destination - start ) * 264
     }
     
     else{
         return (start - destination) * 264
     }
   }
 
 function calculatesFarePrice(start, destination){
     let distanceTravelled = distanceTravelledInFeet(start, destination)

     if(distanceTravelled <= 400){
         return 0
     }
     
     else if(distanceTravelled > 400 && distanceTravelled <= 2000){
         return (distanceTravelled - 400) * 0.02
     }
     
     else if(distanceTravelled > 2000 && distanceTravelled <= 2500){
         return 25
     }
     
     else{
         return 'cannot travel that far'
     }
 }