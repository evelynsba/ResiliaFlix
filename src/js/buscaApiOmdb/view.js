function mostrarFilme(data){ 
    $('#posterApi').html(`<img src="${data.Poster}">`)
    $('#tituloApi').html(`${data.Title}`)
    $('#diretorApi').html(`Diretor(a): ${data.Director}`)
    $('#anoApi').html(`Ano: ${data.Year}`)
    $('#sinopseApi').html(`Sinopse: ${data.Plot}`)
    $('#generoApi').html(`Genero: ${data.Genre}`)
    $('#lancamentoApi').html(`Lançamento: ${data.Released}`)
}

function tituloErrado(error){
    $('#tituloApi').html(`${error}`)
    $("#posterApi").empty()
    $("#diretorApi").empty()
    $("#anoApi").empty()
    $("#generoApi").empty()
    $("#sinopseApi").empty()
    $('#lancamentoApi').empty()
}
