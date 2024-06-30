$("#telefone").mask("(99) 99999-9999");

const form = document.querySelector(".f-cadastro")
const emailInput = document.querySelector("#email")
const passowordInput = document.querySelector("#senha")
const generoSelect = document.querySelector("#genero")
const telefoneInput = document.querySelector('#telefone')



form.addEventListener('submit',(event) => { 

    // verifica se o e-mail está preenchido e se é valido
    if(emailInput.value ===""|| !isEmailValid (emailInput.value)){
        alert("Por favor,preencha o seu email");
        return;
    }

    // Verifica se a senha está Preenchida

    if(!validatePassoword(passowordInput.value, 8)){
        alert("Digite no mínimo 8 dígitos")

    }

    // Valida o número de Telefone

    
    // Verificar se o gênero foi selecionado
    if (generoSelect.value ===""){
        alert("Por favor,selecione o seu gênero");
    }
    form.submit();
});

// Função que valida e-mail

function isEmailValid(email){
    // Cria uma regex para validar email
    const emailRegex = new RegExp(
    /^[a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]{2,}$/

    );

    if(emailRegex.test(email)) {
        return true;
    }

        return false;

    
}

// Função Valida senha

function validatePassoword(senha, minDigits){

    if(senha.length >= minDigits) {
        // Senha Valida
        return true
    }

    // Senha Inválida
    return false
}


function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute("type", "text")
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')

    }else{
        inputPass.setAttribute("type", "password")
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }


}