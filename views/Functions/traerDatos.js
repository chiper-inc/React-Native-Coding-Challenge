function traerDatos(url) {

    return fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => data.data.children)

}

export { traerDatos }