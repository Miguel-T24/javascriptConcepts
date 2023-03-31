// 'use strict'

(() =>{
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    
    xhr.addEventListener("readystatechange", e =>{
        if(xhr.readyState!==4) return;
        if(xhr.status>=200&&xhr.status<300){
            console.log(xhr);
            console.log("Exito");
            console.log(xhr.responseText);
            json = JSON.parse(xhr.responseText);
            console.log(json);
            console.log(`${json[0].name}`);

            json.forEach((item) => {
                const $li = document.createElement("li");
                $li.textContent =`${item.name} -- ${item.email} -- ${item.phone}`
                $fragment.appendChild($li);
            })

            $xhr.appendChild($fragment);
        }else{
            console.log("Error");
            let message = xhr.statusText || "Ocurrio un error"
            $xhr.textContent = `Error ${xhr.status}:${message}`
        }
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/user");

    xhr.send();
})();