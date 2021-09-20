$("#botaoBusca").click(function(evento) {
    evento.preventDefault();
    sendRequest ();
})

async function sendRequest() {
    let apiKey = "96d65f25";
    let inputFilme = $("#inputFilme").val();
    let apiKeyFilme = await fetch (`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${inputFilme}`); 
    let data = await apiKeyFilme.json();
}

