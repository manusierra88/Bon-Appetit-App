// import axios from "axios";

const url = 'http://localhost:5000/api/productos';


const postProducto = async (productoData, token) => {



    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': token
        },
        body: JSON.stringify(productoData),

    })
        .then(response => response.json())

    console.log(response)
    return response;
}


const getProductos = async () => {

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())

    return response;
}

const getById = async (id, token) => {
    const response = await fetch(`${url}/${id}`, {
        headers: {
            token: token
        },
    }).then(response => response.json());

    return response;
}

const deletItem = async (id, token)=>{
    const response = await fetch(`${url}/${id}`,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'token': token
        }
    })
    const data = await response.json();
    return data;
}


const productoService = {
    postProducto,
    getProductos,
    getById,
    deletItem

}


export default productoService


