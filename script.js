// Script do Header
if(window.screen.width > 480){
    window.onscroll=function(){
        rolagem()
    };
    
    function rolagem(){
    
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            document.getElementsByTagName('header')[0].style.padding='5px 10px';
            document.getElementById('logo').style.fontSize='25px';
        }
        else{
            document.getElementsByTagName('header')[0].style.padding='50px 10px';
            document.getElementById('logo').style.fontSize='35px';
        }
        
    }
}

else{
    window.onscroll=function(){
        rolagem()
    };
    
    function rolagem(){
    
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            document.getElementsByTagName('header')[0].style.padding='5px 10px';
        }
        else{
            document.getElementsByTagName('header')[0].style.padding='50px 10px';
        }
        
    }
}







