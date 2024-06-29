const assunto = document.getElementById('assunto');
const gravidade = document.getElementById('gravidade');
const região = document.getElementById('região');


const cep = document.querySelector('#cep')
const endereco = document.querySelector('#endereco')
const cidade = document.getElementById('cidade');
const bairro = document.getElementById('bairro');

const estado = document.getElementById('estado');

const descrição= document.getElementById('descrição');
const foto= document.getElementById('fileInput');

const form = document.querySelector('#forms');
const message = document.getElementById('message');

function le_dados (){
    let dados= localStorage.getItem('db');

    objdados={};
        
    if (dados){
        objdados = JSON.parse(dados);
    }else{
        objdados=
        {
            denuncia :
            [  
                {
                    assunto:"Segurança",
                    gravidade:"Intermediária",
                    região: "Norte",
                    cep:"30290270",
                    endereco:"Rua Eldorado",
                    cidade:"Belo Horizonte",
                    bairro:"Conjunto Taquaril",
                    estado:"Minas Gerais",
                    descrição:"Foi visto na porta de uma insituição de ensino um lixão a céu aberto, as crianças no momento do intervalo estavam reclamando devido ao forte odor vindo da decomposição do lixo ",
                    foto:"img"
                } 
            ]
        }
    }
    
    return objdados;
}

function salvadados(dados){
    localStorage.setItem('db',JSON.stringify(dados))
}

function incluir_denun(){
    //LER OS DADOS NO LOCAL STRORAGE 
    let objdados = le_dados();

    
    //INCLUINDO NOVO CONTATO
    let strassunto = document.getElementById('assunto').value;
    let strgravidade = document.getElementById('gravidade').value;
    let strregião = document.getElementById('região').value;
    let strcep = document.getElementById('cep').value;
    let strendereco = document.getElementById('endereco').value;
    let strcidade = document.getElementById('cidade').value;
    let strbrairro = document.getElementById('bairro').value;
    let strestado = document.getElementById('estado').value;
    let strdescrição = document.getElementById('descrição').value;
    let strfoto = document.getElementById('fileInput');


    //CRIANDO NOVO CONTATO 

    let novo_conato = {
        assunto:strassunto,
        gravidade:strgravidade,
        região: strregião,
        cep:strcep,
        endereco: strendereco,
        cidade: strcidade,
        bairro: strbrairro,
        estado: strestado,
        descrição:strdescrição,
        foto:strfoto
    }

    objdados.denuncia.push (novo_conato)
    //SALVANDO NO LOCAL STORAGE  
    salvadados(objdados); 
    //confirmação
    alert("Denúncia salva");     
    //recarregando a página
    form.reset();
}


//configurando os botões//

cep.addEventListener('focusout',async() =>{
    try {
        const onlyNumbers = /^\d+$/;
        const cepValid = /^\d{8}$/;
        
        if(!onlyNumbers.test(cep.value) || !cepValid.test(cep.value) ){
            throw{cep_error:'Cep Inválido'};
    
        }

        const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

        if(!response.ok){
            throw await response.json();

        }

        const responseCep = await response.json();
        endereco.value =responseCep.logradouro;
        cidade.value =responseCep.localidade;
        bairro.value =responseCep.bairro;


    } catch (error) { 

        if(error?.cep_error){
            message.textContent=error.cep_error;
            setTimeout(()=>{
                message.textContent="";

            },5000)
        }

        


        
    }
    

})

document.getElementById('envio').addEventListener('click',incluir_denun);


