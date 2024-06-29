const obj_telefones= [
    //id=1 segurança publica
    //id=2 infraestrutura
    //id=3 risco a saude
    {id: 1,orgao:'Policia Militar', tel: '190',url:'https://www.policiamilitar.mg.gov.br/'},
    {id: 1,orgao:'Policia Civil', tel: '197',url:'https://www.policiacivil.mg.gov.br/'},
    {id: 1,orgao:'Corpo de Bombeiros', tel: '193',url:'https://www.bombeiros.mg.gov.br/'},
    {id: 1,orgao:'Disque Denúncia', tel: '181',url:'https://www.seguranca.mg.gov.br/ajuda/page/319-disque-denuncia'},
    {id: 2,orgao:'Defesa Civil', tel: '199',url:'https://www.defesacivil.mg.gov.br/'},
    {id: 2,orgao:'Copasa', tel: '115',url:'https://www.copasa.com.br/wps/portal/internet/'},
    {id: 2,orgao:'Cemig', tel: '116',url:'https://www.cemig.com.br/'},
    {id: 3,orgao:'SAMU', tel: '192',url:'https://prefeitura.pbh.gov.br/saude/informacoes/atencao-a-saude/urgencia-e-emergencia/samu#:~:text=%C3%89%20acessado%20pelo%20n%C3%BAmero%20%22192,Central%20de%20Regula%C3%A7%C3%A3o%20das%20Urg%C3%AAncias.'},
    {id: 3,orgao:'Disque Saude', tel: '136',url:'https://www.gov.br/saude/pt-br/canais-de-atendimento/ouvsus/servicos/servicos-do-disque-saude-136#:~:text=A%20Ouvidoria%2DGeral%20do%20SUS,pelos%20usu%C3%A1rios%20do%20sistema%20SUS.'}

];





function criarTabela(container){
    
    const containerTabela = document.querySelector(container);
    
   
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    /*QUE NO CASO É A MAIN ou qualquer outra seção */
    containerTabela.appendChild(table);
    //com a tabel criada agora vamos fazer nosso cabeçalho
    criaCabecalho(thead);
    preencheTabela(tbody);

    table.appendChild(thead);
    table.appendChild(tbody);
}

function criaCabecalho(thead){
    //criando um array de nomes para o cabeçalho 
    
    let cabecalho = ['Órgão','Tel. de Contato','Saiba Mais'];
    //todo thead precisa de um tr e logo depois um td
    const tr = document.createElement("tr");
    //nesse momento preparamos nosso thead para receber dados 
    thead.appendChild(tr);

    // Adicionar células de cabeçalho
    cabecalho.forEach((d)=>{
        const th = document.createElement("th");
        th.textContent=d;
        tr.appendChild(th);
    });

}


function preencheTabela(tbody){


    let selectValue = document.querySelector('#assunto').value;

    for (let i = 0; i < obj_telefones.length; i++) {



        if(obj_telefones[i].id == selectValue){
            let orgao = obj_telefones[i].orgao;
            let telefone = obj_telefones[i].tel;
    
            
    
            const tr = document.createElement('tr');
            tbody.appendChild(tr);
                //colocando o orgão
            const celulaOrgao = document.createElement("td");
            celulaOrgao.textContent = orgao;
            tr.appendChild(celulaOrgao);
    
            //colocando o telefone do orgão
            const celulaTel = document.createElement("td");
            celulaTel.textContent=telefone;
            tr.appendChild(celulaTel);


            //criando o botão saiba mais 
            const btnSaibamais = document.createElement("td")
            const btn = document.createElement('button');
            const link = document.createElement('a');
            btn.classList.add('btnSaibaMais');
            link.href= obj_telefones[i].url
            link.target ='_blank'
            btn.textContent='Saiba Mais';
            link.appendChild(btn);
            btnSaibamais.appendChild(link);
            //FALTA ADD O BOTÃO COM APEEND CHILD
            tr.appendChild(btnSaibamais);
        }
        
       
    }
    

}





//EVENTOS
//capturando botão 
const btn_telefone = document.querySelector('#btn-carrega')

btn_telefone.addEventListener('click', () =>{
    
    criarTabela("main");
});

