// Q 1:- 

let n = prompt("Input number to count length");
let m = n.length;
console.log("Total length of number :", m);

// Q 2:-

function find_Five(Num) {

    var a = Num.toString();
    var count = 0;

    for(var i=0;i<a.length;i++){

        if(a[i] =='5')
        {
            count++;
        }
    }
        return count;

}
console.log('Total times no. occured =' ,find_Five(5435567));

// Q 3:- 

function findSum(Num){

    let sum = 0;
    
    for(let i=1;i<=Num;i++)
    {
        if(i % 2 == 0 )
        {
            sum=sum+i;
        }
    }
    return sum;
}
console.log('sum =',findSum(4));


// Q 4:- 

function Number_Sum(X){

    let sum=0;

    while(X>0){

        let num=(X%10);
        sum = sum+num
        X= parseInt(X/10)
    }
    return sum;
}

console.log('sum of num =', Number_Sum(43251));
 
// Q 5:-

function Print_Oddnum(N) {

    for(let i=2;i<=N;i++)
    {
        if(i%2!=0)
        {
            console.log(i);
        }
    }
}
console.log(2);
Print_Oddnum(10);


// Q 6:- 

function Pattern_print(N)
{
    for(let i=1;i<=N;i++)
    {
        console.log('*'.repeat(i));
    }
}
const num = 5;
Pattern_print(num);

// Q 7:- 

function printNumbers(N)
{
    for(let i=1;i<=N;i++)
    {
         console.log(i);
    }
}
printNumbers(7);


// Q 8:- 


function Print_table(){

    for (let i=1; i<=10; i++)
    console.log(nu1,"x",i,"=",nu1*i )
}
let nu1 = parseInt(prompt('Enter number for table'))
Print_table()