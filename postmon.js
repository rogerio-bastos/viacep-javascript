"use strict";

const showAddress = (data) => {
    document.querySelector("#endereco").value = data.logradouro;    
    
    document.querySelector("#bairro").value = data.bairro;
    
    document.querySelector("#cidade").value = data["estado_info"].nome;
    
    document.querySelector("#estado").value = data.estado;
}

const getAddress = async () => {
    const cep = document.querySelector("#cep").value;

    const url = `https://api.postmon.com.br/v1/cep/${cep}`;

    const data = await fetch(url);

    const allAddress = (await data.json());

    showAddress(allAddress);
}

document.querySelector("#cep").addEventListener("focusout", getAddress);