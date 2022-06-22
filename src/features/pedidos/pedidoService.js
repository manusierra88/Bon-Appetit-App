
const url = 'http://localhost:5000/api/pedidos';

const crearPedido = async (pedidoData)=>{
    const response = await fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pedidoData)
    }).then(response => response.json())
    return response;
}


const obtenerPedidos = async (token) => {
   const response = await fetch(url,{
    headers:{
        'Content-Type': 'application/json',
        'token': token
    }
   }).then(response => response.json())
   return response;
}

const editarPedido = async(token, id, data)=>{
    const response = await fetch (`${url}/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json',
            'token': token
        },
        body: JSON.stringify(data)
    }).then(response=> response.json())
    return response;
}

const deletePedido = async(id, token)=>{
    const response = await fetch(`${url}/${id}`,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'token': token
        }
    }).then(response => response.json())
    return response;
}



const pedidoService = {
    crearPedido,
    obtenerPedidos,
    editarPedido,
    deletePedido
}

export default pedidoService;