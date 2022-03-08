$(document).ready(function(){
    $('#header').load("/views/layout/header.html",configurarMenu);
    $('#footer').load("/views/layout/footer.html");
});

function configurarMenu(response)
{
    path = document.location.pathname;
    $("#admiMenu li").each(function(index){
        if($(this).html().indexOf(path)>0){
            $(this).children().addClass("active");
        }
    });
}