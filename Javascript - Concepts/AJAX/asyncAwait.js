// 'use strict'

(() =>{
    const $fetchAsync = document.getElementById("Async-Await"),
    $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await res.json();
            // console.log(res);
            // console.log(json);

            // if(!res.ok){
            //     throw new Error("Ocurrio un error al solicitar los datos Async Await");
            // }

            if(!res.ok) throw {status:res.status , statusText: res.StatusText}
             
            json.forEach(item => {
                const $li = document.createElement("li");
                $li.textContent = `${item.name} -- ${item.email} -- ${item.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment); 
        }catch(err){
            console.log(`Estoy en el catch ${err}`);

            let message = err.statusText || "Ocurrio un error";
            $fetchAsync.textContent = `Error ${err.status} : ${message}`
        }finally{
            console.log("Esto es el finally de async Await");
        }
    }

    getData();

})();