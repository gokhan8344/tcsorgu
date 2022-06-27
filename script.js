

var tc,Btn,resultFalse,resultTrue,odd=0,even=0,result,i,j;
tc=document.getElementById("tc")
Btn=document.getElementById("Btn")
resultFalse=document.getElementById("resultFalse")
resultTrue=document.getElementById("resultTrue")
Btn.addEventListener('click', function(){
    for(i=0 ; i<9 ; i+=2){
        odd+=Number(tc.value[i]);}
    odd*=7;
    for (j=1;i<8; j+=2){
        even+=Number(tc.value[j]);
    }
    result=Math.abs(odd-even);

    resultFalse.style.display="block";
if(tc.value == ""){
    
    resultFalse.textcontent="Kimlik numarasını boş bırakamassınız"; 
}
else if(tc.value.length !== 11){
    
    resultFalse.textcontent="Kimlik numarası 11 haneli olmak zorunda";
}else if(isNaN(tc.value)){
    
    resultFalse.textcontent="Kimlik numası rakamlardan oluşmalıdır";
}else if(tc.value[0]==0){
    
    resultFalse.textcontent="Kimlik numasının ilk rakamı sıfır olamaz";
}else if(result%10 !=Number(tc.value[9])){
    
    resultFalse.textcontent="Kimlik numası hatalı";
}
});