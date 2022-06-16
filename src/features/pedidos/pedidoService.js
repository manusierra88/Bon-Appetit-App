
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



const pedidoService = {
    crearPedido,
}

export default pedidoService;