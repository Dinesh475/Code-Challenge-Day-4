//Barbossa and his three pirates found a treasure  of gold coins. Jack sparrow too joined them. 
// They decided to share the treasure. Barbossa  agreed to give x % share for jack sparrow. 
// He then decided to take y % share from the remaining treasure. His other pirates willl share equally the remaining gold coins. 
// Write a function to compute their share's.


//Write a function to return calculate the of JackShare.
var jack,Barbossa,rem;
function find_JackShare(goldCoin,X,Y){
    jack = X/100*goldCoin;
    return jack;
}


//Write a function to retrun the  Barbossa share.
function find_BarbossaShare(goldCoin,X,Y){
    Barbossa =Y/100*(goldCoin-jack);
    return Barbossa;
}


//Write a function to retrun the other pirates share.
function find_OtherShare(goldCoin,X,Y){
    rem=(goldCoin-(jack+Barbossa))/3;
    return rem;  
}