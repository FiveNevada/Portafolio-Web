let MenuVisible = false;


function mostrarOcultarMenu(){
    if(MenuVisible){
        document.getElementById("Menu").classList = "";
        MenuVisible = false;
    }else{
        document.getElementById("Menu").classList = "Responsive";
        MenuVisible = true;
    };
};
