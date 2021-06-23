const showAddress = (data) => {
    document.querySelector("#endereco").value = data.logradouro;    
    
    document.querySelector("#bairro").value = data.bairro;
    
    document.querySelector("#cidade").value = data.localidade;
    
    document.querySelector("#estado").value = data.uf;
}

const getAddress = () =>{
    const cep = document.querySelector("#cep").value;

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    fetch(url).then(response => response.json())
              .then(data => showAddress(data));
}

document.querySelector("#cep")
        .addEventListener("focusout", getAddress);