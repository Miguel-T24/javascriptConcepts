(()=>{
    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();
    
    async function getData(){
        try{
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
            json = await res.data;

            // console.log(res,json);

            json.forEach(item => {
                const $li = document.createElement("li");
                $li.textContent = `${item.name} -- ${item.email} -- ${item.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment); 

        }catch(err){
            console.log(err.response);
            let message = err.response.statusText || "Ocurrio un Error";
            $axiosAsync.textContent = `Error ${err.response.status} : ${message}`;
        }finally{
            console.log(`Finally del Axios Async`);
        }
    }
    getData();
})();