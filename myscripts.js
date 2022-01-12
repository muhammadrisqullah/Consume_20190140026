function getAll(){
    const respon = axios.get("http://localhost:8080/game/json")
    const dr = respon.then(resp => resp.data)
    return dr
}

$("#mytable").ready(function () {
    var data = document.getElementById("mytable")
    getAll().then(obj => {
        for (var i = 0; i < obj.length; i++) {
            const tr = data.insertRow()
            const td1 = tr.insertCell();
            const td2 = tr.insertCell();
            const td3 = tr.insertCell();
            const td4 = tr.insertCell();
            const td5 = tr.insertCell();
            console.log(obj[i])
            td1.innerHTML = obj[i].idGame
            td2.innerHTML = obj[i].nama
            td3.innerHTML = obj[i].stockgame
            td4.innerHTML = obj[i].harga
            td5.innerHTML = '<a class="btn btn-success" href="" role="button">Edit Data</a> '+'<a class="btn btn-danger" href="" role="button">Hapus Data</a><br><br>'
        }
    }
    )
});






