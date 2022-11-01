function division(){
    let x = document.querySelector("#a").value;
    for(let i=1;i<=999;i++){
        if (i%x==0) {
            console.log(i)
        }
    }
}

function small(){
    let x = document.querySelector("#b").value;
    for(let i=1;i<Math.sqrt(x);i++){
        if(i+1>=Math.sqrt(x)){
            console.log(i);
        }
    }
}

function thelargest(){
    let x = document.querySelector("#c").value;
    let j = 0, massiv=[];
    for(let i=1;i<=x;i++){
        if(x%i==0){
            massiv[j]=i;
            if(i==x){
                console.log(massiv[j-1]);
            }
            j+=1;
        }
    }
}

function sum1(){
    let x = document.querySelector("#d1").value;
    let y = document.querySelector("#d2").value;
    let z = 0;
    if(+x<+y){
        alert("Wrong1");
    }
    
    else if(+x==+y){
        alert("The numbers are the same");
    }
    else{
        
        for (let i=(+y);i<=(+x);i++){
            
            if(i%7==0){
                z=z+i;
            }
        }
        console.log(z);
        
    }
}

function sum2(){
    let x = document.querySelector("#d1").value;
    let y = document.querySelector("#d2").value;
    let z = 0;
    if(+x>+y){
        alert("Wrong2");
    }
    else if(+x==+y){
        alert("The numbers are the same");
    }
    else{
        for (let i=(+x);i<=(+y);i++){
            
            if(i%7==0){
                z=z+i;
            }
        }
        console.log(z);
    }
}

function fibo(){
    let x = document.querySelector("#e").value;
    let array = [ 1 , 1 ];
    if(x==1){
        console.log(array[0]);
    }
    for (i=2;i<=x;i++){
        array[i]=array[i-1]+array[i-2];
        if (i==x){
            console.log(array[i-1]);
        }
    }
}

function euc(){
    let a = document.querySelector("#f1").value;
    let b = document.querySelector("#f2").value;
    let R;
    while ((a % b) > 0)  {
      R = a % b;
      a = b;
      b = R;
    }
    if(a%b==0){
        console.log(b);
    }
  }

function mirror(){
    let x = document.querySelector("#g").value;
    let array = [];
    let z = x , a="";
    for (i=0;i<x.length;i++){
        array[i] = z % 10;
        z=(z-(+z%10))/10;
        a+=array[i];
        
    }
    console.log(a);
}

function check(){
    let x = document.querySelector("#x1").value;
    let y = document.querySelector("#x2").value;
    let array1 = [], array2 = [];
    let z = x, h = y, sum=0;
    for (let i=0;i<x.length;i++){
        array1[i] = z % 10;
        z=(z-(+z%10))/10;
    }
    for (let i=0;i<y.length;i++){
        array2[i] = h % 10;
        h=(h-(+h%10))/10;
    }
    for(let i=0;i<x.length;i++){
        for(let j=0;j<y.length;j++){
            if(array1[i]==array2[j]){
                sum++;
            }
        }
    }
    if(sum>0){
        console.log("YES");
    }
    else{
        console.log("NO");
    }
}
        