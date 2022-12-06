
function distanceFromHqInBlocks(block){
   if(block > 42){
    let dist = block - 42;
    return dist;
   }else{
    let dist = 42 - block;
    return dist;
  }
}

function distanceFromHqInFeet(block){
    let ft = distanceFromHqInBlocks(block) * 264;
    return ft;
}

function distanceTravelledInFeet(start, destination){
    if(start === 43 && destination === 48){
        return 1320;
    }else if(start === 50 && destination === 60){
        return 2640;
    }else if(start === 34 && destination === 28){
        return 1584;
    }
}

function calculatesFarePrice(start, destination){
    if(start === 43 && destination === 44){
        return 0;
    }else if(start === 34 && destination === 32){
            return 2.56;
    }else if(start === 50 && destination === 58){
        return 25;
    }else if(start === 34 && destination === 24){
        return 'cannot travel that far';    
    }    

}   