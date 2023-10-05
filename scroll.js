

var bool=true;
setInterval(()=>{
    /*if(count==1)
    {
        bool=true;
    }
    else if(count==3)
    {
        bool=false;    
    }
    if(bool){
        slide('right')
    }
    else{
        slide('left')
    }
*/slide('right')},3000);

function slide(value){
    
    if(value=='right')
    {
        var left=0;
        var slide=rotate_right();

        var right=-100;
       
        var scroll= setInterval(()=>{slide[0].style.left=(left++)+"%";slide[1].style.left=(right++)+"%";if(left==101)clearInterval(scroll);},10);
       
        dotColor(count);
    }
    else
    {
        var left=0;
        var slide=rotate_left();
        var right=100;
        var scroll= setInterval(()=>{slide[0].style.left=(left--)+"%";slide[1].style.left=(right--)+"%";if(left==-101)clearInterval(scroll);},10);
        dotColor(count);
    }
    document.getElementById('para').innerText=count;
}

var count=1;
function rotate_right(){
    var one=document.getElementById('one');
    var two=document.getElementById('two');
    var three=document.getElementById('three');
    if(count==1)
    {
        count++;
        two.style.left="-100%";
        
        return [three,two];
        
    }
    else if(count==2)
    {
        count++;
        
        one.style.left="-100%";
        
        
        return [two,one];
    }
    else if(count==3)
    {
        count=1;
        //three.style.left="0%";
        three.style.left='-100%';
       
        
              
        return [one,three];
    }
    

}
function rotate_left(){
    var one=document.getElementById('one');
    var two=document.getElementById('two');
    var three=document.getElementById('three');
    
    if(count==1)
    {
        count=3;
        one.style.left="100%";
        two.style.left="100%";
        return [three,one];
        
    }
    else if(count==2)
    {
        count--;
        
        three.style.left="100%";
        
        
        return [two,three];
    }
    else if(count==3)
    {
        count--;
        //three.style.left="0%";
        two.style.left='100%';
       
        
              
        return [one,two];
    }
    

}

function dotColor(value){
    var one=document.getElementById('dot-one');
    var two=document.getElementById('dot-two');
    var three=document.getElementById('dot-three');
    switch(value){
        case 1:one.style.color='black';two.style.color='rgb(187, 187, 187)';three.style.color='rgb(187, 187, 187)'; break;
        case 2:one.style.color='rgb(187, 187, 187)';two.style.color='black';three.style.color='rgb(187, 187, 187)';break;
        case 3:one.style.color='rgb(187, 187, 187)';two.style.color='rgb(187, 187, 187)';three.style.color='black'; break;

    }
}