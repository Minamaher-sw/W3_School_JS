function sum()
{
    let sum =0 ;
    for(let i =0; i < arguments.length ; i++)
    {
        sum += arguments[i] ;
    }
    return sum ;
}

function mult()
{
    let mult = 1 ;
    for(let i =0; i < arguments.length ; i++)
    {
        mult *= arguments[i] ;
    }
    return mult ;
}

function sub()
{
    let subs = arguments[0] ;
    for(let i =1 ; i < arguments.length ; i++)
    {
        subs -= arguments[i] ;
    }
    return subs ;
}

//calling 
console.log(sum(12,13,14)) ;
console.log(sub(12,13,14)) ;
console.log(mult(1,13,2)) ;

console.log("end call") ;
