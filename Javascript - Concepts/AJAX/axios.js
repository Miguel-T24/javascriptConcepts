// 'use strict'

(()=>{
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

    axios
    .get("https://jsonplaceholder.typicode.com/user")
    .then(res =>{
        console.log(res);

        res.data.forEach(item => {
            const $li = document.createElement("li");
            $li.textContent = `${item.name} -- ${item.email} -- ${item.phone}`;
            $fragment.appendChild($li);
        });

        $axios.appendChild($fragment); 
    })
    .catch(err =>{
        console.log("Este es el catch : ",err);
        let message = err.response.statusText || "Ocurrio un error";
        $axios.textContent = `Error ${err.response.status} : ${message}`
    })
    .finally(() =>{
        console.log("Finally del axios")
    });

})()