
function opendata(){
    let data = document.getElementById("view");
    let url ="http://localhost:8080/game/json";
    
    $.getJSON(url, function(result){
        console.log(result)
        $.each(result, function(a){
            
            data.innerHTML += "<br>" +
            "Id Game :" + result[a].idGame + 
            ", Nama : " + result[a].nama + 
            ", Stock game :" + result[a].stockgame + 
            ", Harga :" + result[a].harga  +
            "<hr>"   
        })
        
        
        if (data.style.display === "none") {
            data.style.display = "block";
        } 
        
        
        

    })
    
}






