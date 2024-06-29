const denuncia = localStorage.getItem("db");

const dadosobjeto = JSON.parse(denuncia)


//criando variaveis para integração da parte gráfica
//segurança
var SegNort = 0;
var SegSul = 0;
var SegLeste = 0;
var SegOeste = 0;
//infraestrututrta
var InfraNort = 0;
var InfraSul = 0;
var InfraLeste = 0;
var InfraOeste = 0;
//risco a saude
var SaudeNort = 0;
var SaudeSul = 0;
var SaudeLeste = 0;
var SaudeOeste = 0;

function contagemGrafica(){

  for (let i = 0; i < dadosobjeto.denuncia.length; i++){
    if(dadosobjeto.denuncia[i].assunto == 'Segurança'){
     
      
      if(dadosobjeto.denuncia[i].região == 'norte'){
        SegNort++;
      }else if(dadosobjeto.denuncia[i].região == 'sul'){
        SegSul++;
      }else if(dadosobjeto.denuncia[i].região == 'leste'){
        SegLeste++;
      }else if(dadosobjeto.denuncia[i].região == 'oeste'){
        SegOeste++;
      }
      
  
  
    }else if(dadosobjeto.denuncia[i].assunto == 'Infraestrutura Publica'){
      
      if(dadosobjeto.denuncia[i].região == 'norte'){
        InfraNort++;
      }else if(dadosobjeto.denuncia[i].região == 'sul'){
        InfraSul++;
      }else if(dadosobjeto.denuncia[i].região == 'leste'){
        InfraLeste++;
      }else if(dadosobjeto.denuncia[i].região == 'oeste'){
        InfraOeste++;
      }
  
    }else if(dadosobjeto.denuncia[i].assunto == 'Risco a Saude'){
      
      if(dadosobjeto.denuncia[i].região == 'norte'){
        SaudeNort++;
      }else if(dadosobjeto.denuncia[i].região == 'sul'){
        SaudeSul++;
      }else if(dadosobjeto.denuncia[i].região == 'leste'){
        SaudeLeste++;
      }else if(dadosobjeto.denuncia[i].região == 'oeste'){
        SaudeOeste++;
      }
  
    }

  }


  

  console.log(InfraOeste );

}




function carrega_denúncias(){
    
    for (let i = 0; i < dadosobjeto.denuncia.length; i++) {


      //logica a proposiçaõ de cores de cabeçalho conforme o assunto da denúncia 
      var cor = ""
      
      if(dadosobjeto.denuncia[i].assunto == 'Segurança'){
        cor="p-3 mb-2 bg-warning text-black";
      }else if(dadosobjeto.denuncia[i].assunto == 'Infraestrutura Publica'){
        cor="p-3 mb-2 bg-success text-black";
      }else if(dadosobjeto.denuncia[i].assunto == 'Risco a Saude'){
        cor="p-3 mb-2 bg-primary text-black";

      }

       
      

      
      //criando a div onde vai aparecer a denuncia 
        const divdenun = document.createElement('div')
        //criando a div onde iram ser colocados os detalhes de cada denuncia
        
          
        const divdetalhe= document.createElement('div');
        const divCompleta= document.createElement('div');
        const section = document.querySelector('#list-denun')

        divCompleta.classList.add('elemento-denuncia')
        
        
        divdenun.classList.add('denucia-parte')

        divdenun.innerHTML= `<div class="card">
        
        <h5 class="${cor}">Assunto da Denúncia: ${dadosobjeto.denuncia[i].assunto}</h5>
        <div class="card-body">
          <h5 class="card-title">Gravidade: ${dadosobjeto.denuncia[i].gravidade}</h5>
          <p class="card-text">Ocorrida no bairro ${dadosobjeto.denuncia[i].bairro} na cidade ${dadosobjeto.denuncia[i].cidade}</p>
          <a href="../../comentarios/view/comentarios.html"><button type="button" class="btn btn-info">Comentários</button></a>
          
        </div>
      </div>`


      divdetalhe.classList.add("detalhe-denuncia")
      divdetalhe.innerHTML=`<div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Descrição</strong>
          </button>
        </h2>


        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p>${dadosobjeto.denuncia[i].descrição}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Endereço</strong>
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
                <h5>CEP: ${dadosobjeto.denuncia[i].cep} </h5>
                <h5>Estado: ${dadosobjeto.denuncia[i].estado} </h5>
                <h5>Cidade: ${dadosobjeto.denuncia[i].cidade} </h5>
                <h5>Bairro: ${dadosobjeto.denuncia[i].bairro} </h5>
                <h5>Região: ${dadosobjeto.denuncia[i].região} </h5>
          </div>
        </div>
      </div>


      
      
      </div>
      </div>`

      
    
      divCompleta.appendChild(divdenun);
      divCompleta.appendChild(divdetalhe); 
      section.appendChild(divCompleta)
    }
    
}


window.addEventListener('load',carrega_denúncias());
window.addEventListener('load',contagemGrafica());