const themeText = document.getElementById("theme");
    themeText.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            themeText.src = "./assets/logo/Moon.svg";
        }else{
            themeText.src = "./assets/logo/Sun.svg";
        }
    }
