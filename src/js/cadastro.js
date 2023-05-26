
    function prox(){
        var prox = document.getElementById('formularios')
        prox.style.transform = 'translateX(-80%)'
    }

    function prox2(){
    var prox = document.getElementById('formularios')
    prox.style.transform = 'translateX(-160%)'
    var titulo = document.getElementById('criar')
    titulo.innerHTML =' <h2 id="criar">Adicionar foto</h2>'
    }

    let fileImg = document.querySelector('.selecImg')
    function imgSell() {
    let img = document.querySelector(".img")
    img.src = fileImg.value
    console.log(img.src)
    }

    function ant(){
        var prox = document.getElementById('formularios')
        prox.style.transform = 'translateX(0.5%)'
        }

    