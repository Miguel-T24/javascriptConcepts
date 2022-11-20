// 'use strict'

// Procesos de single thread y multi thread
/*

    - Operacions de CPU y Operaciones de I/O
    - Operaciones Concurrentes y Paralelas.
    - Operaciones Bloqueantes y No Bloqueantes
    - Operaciones Sincronas y Asincronas

    La diferencia entre cocurrencia y paralelismo es que concurrencia se relaicona mas en el diseño del software y paralelismo con la ejecucion de este.

    * Concurrencia: Ejecuta y gestiona diversas tareas al mismo tiempo
    * Paralelimos: Ejecuta multiples tareas de forma simultanea. Da solucion a una sola tarea de manera mas eficiente.

    * Bloqueantes: Procesos en las cuales la ejecucion del programa no continua hasta que el proceso termine.
    * No Bloqueante: La ejecucion del programa sigue sin que el proceso termine.
    
    * Sincronas: Espera a que el proceso finalice para seguir ejecutando el programa.
    * Asincronia: Sigue la ejecucion del programa sin que haya finalizado un proceso.

*/

// Codigo sincrono bloqueante

(() =>{
    console.log("Inicio");

    function dos(){
        console.log("Dos")
    }

    function uno(){
        console.log('Uno');
        dos();
        console.log('tres');
    }
    uno();
    console.log("Fin");

})();

// Codigo Asincrono no bloqueante

(() => {
    console.log("Codigo Asincrono");
    console.log("Inicio");

    function dos(){
        setTimeout(function(){
            console.log("Dos");
        }, 1000);;
    }

    function uno(){
        setTimeout(function(){
            console.log("Uno")
        },0);
        dos();
        console.log("Tres");
    }
    uno();
    console.log("Fin!");
})();





