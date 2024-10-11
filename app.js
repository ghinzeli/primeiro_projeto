function fn_pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();

    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado! Digite algum termo para pesquisa.</p>"
        return
    }

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados){

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            resultados += `
            <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
        `}
        
    }
    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
    
    section.innerHTML = resultados;
}

//colocar no Gemini para documentar/comentar o funcionamento do código
// ```
// function fn_pesquisar(){
//     let section = document.getElementById("resultados-pesquisa");

//     let resultados = "";
    
//     for (let dado of dados){
    
//         resultados += `
//         <div class="item-resultado">
//                 <h2>
//                     <a href="#" target="_blank">${dado.titulo}</a>
//                 </h2>
//                 <p class="descricao-meta">${dado.descricao}</p>
//                 <a href=${dado.link} target="_blank">Mais Informações</a>
//         </div>
//     `
//     }
    
//     section.innerHTML = resultados;
// }

// ```

// Tenho esse código Javascript e gostaria de adicionar comentários sobre seu funcionamento, sem alterar os comandos e variáveis

//github e vercel




