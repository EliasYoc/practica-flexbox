const
    $btnPubliciar= document.getElementById('btn-publicar'),
    $contenido = document.querySelector('#conten-public');

$btnPubliciar.addEventListener("click",(e)=>{
    const   $input = document.getElementById('input-text'),
            $inputText = $input.value;
    
    if(!$inputText){
        console.warn("no puedes publicar en blanco")
    }else{
        e.preventDefault();
        let fecha = new Date().toLocaleString();

        const   $publicacion = document.createElement("div"),
                $cabecera = document.createElement("div"),
                $userName = document.createElement("h4"),
                $fecha = document.createElement("span"),
                $parr = document.createElement("p");
                    $userName.textContent = "Elías Yoc";
                    $fecha.textContent = `${fecha}`;

        $publicacion.setAttribute("class","publicacion");
        $publicacion.appendChild($cabecera);
            $cabecera.setAttribute("class","cabecera");
            $cabecera.appendChild($userName);
            $cabecera.appendChild($fecha);
                
        $publicacion.appendChild($parr);
            $parr.textContent=`${$inputText}`;
        $contenido.insertAdjacentElement("afterbegin",$publicacion);
        //console.log($contenido)
        
        $input.value = '';
    }
} )