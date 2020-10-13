function exibir_categoria(categoria){
    let elementos = document.getElementsByClassName('box_produto');
    for(var i=0; i<elementos.length; i++){
        if(categoria == elementos[i].id)
            elementos[i].style = 'display:inline-block';
        else
            elementos[i].style = 'display:none';
    }
}


let exibir_todos = () => {
    let elementos = document.getElementsByClassName('box_produto');
    for(var i=0; i<elementos.length;i++){
        elementos[i].style = 'display:inline-block';
    }
}

let zoom = (imagem) => {
    if(imagem.width == 120)
    imagem.style = 'width: 240px'
    else
    imagem.style = 'width: 120px'
}


function upScaleMenu(x){
    x.style="font-weight: bold; color: red;";
}

function downScaleMenu(x){
    x.style="font-weight: none; color: #000;";
}
function onMenu(a){
    a.style="color:#000;";
}

function outMenu(a){
    a.style="color:#fff;";
}

function downScale(x){
    x.style="transform: scale(1.0); transition: transform 0.2s;";
}

function upScale(x){    
    x.style="transform: scale(1.10); transition: transform 0.15s; background-color: #fff; box-shadow: 1px 2px 15px #fff";
}