const headQuaters = 42;
function distanceFromHqInBlocks (blocks){
    if(blocks < headQuaters){
        return headQuaters - blocks
    }else{
        return blocks-headQuaters
    }
}
distanceFromHqInFeet(50);

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264;
}
distanceFromHqInFeet(42);

function distanceTravelledInFeet(start,destination){
    if(start < destination){
        return(destination-start)*264;
    }else{
        return(start-destination)*264;
    }
}


function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400){
        return 0;
    }else if(distance > 400 && distance < 2000) {
        return (distance-400)* .02;
    }else if(distance > 2000 && (distance < 2500)){
        return 25;
    }else if (distance > 2500){
        return "cannot travel that far";
    }
}