function load() {
    var message = document.getElementById('message') //aspas duplas não funciona
    var image = document.getElementById('image')
    var date = new Date()
    var hour = date.getHours()
    message.innerHTML = `Agora são ${hour} horas.` //colocar crase para a var funcionar assim. Se não: +de concatenação
    
    if(hour >= 0 && hour < 12){
        //bom dia
        image.src = 'img/bom-dia.png'
        document.body.style.backgroundColor = 'rgb(255,210,150)'
    } else if(hour > 12 && hour < 18){
        //boa tarde
        image.src = 'img/boa-tarde.png'
        document.body.style.backgroundColor = 'rgb(218, 165, 30)'
    } else {
        //boa noite
        image.src = 'img/boa-noite.png'
        document.body.style.backgroundColor = 'rgb(10,10,112)'
    }
}

