// 'use strict'

(() =>{
    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => {
    //     console.log(res)
    //     return res.ok?res.json():Promise.reject(res);
    // })
    .then(res => res.ok?res.json():Promise.reject(res))
    .then(json =>{
        json.forEach(item => {
            const $li = document.createElement("li");
            $li.textContent = `${item.name} -- ${item.email} --- ${item.phone}`;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
    })
    .catch(err => console.log("Este es el catch:",err))
    .finally(() => console.log(`Este es el Finally de API Fetch`));
})();