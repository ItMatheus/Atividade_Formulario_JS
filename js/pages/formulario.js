const nome = window.document.getElementById("nome")
const email = window.document.getElementById("email")
const senha = window.document.getElementById("senha")
const confirm_senha = window.document.getElementById("confirm_senha")
const idade = window.document.getElementById("idade")
const cpf = window.document.getElementById("cpf")
const enviar = window.document.getElementById("botaoRegister")
const msg = window.document.getElementById("msg")
const aparecerMsg = window.document.getElementsByClassName("escondido")[0]
const dezCaracters = window.document.getElementById("dezCaracters")
const msgTemUmaMaiuscula = window.document.getElementById("msgTemUmaMaiuscula")
const msgTemUmNumero = window.document.getElementById("msgTemUmNumero")
const msgTemUmEspecial = window.document.getElementById("msgTemUmEspecial")


const createDisplayMsgError = (mensagem) => {
    msg.textContent = mensagem

    setTimeout(() => {
        msg.textContent = ""

    }, 5000)
}

nome.addEventListener("input", (event) => { //nome

    const regex = /^[a-zA-ZÀ-ÿ\s]+$/;

    console.log(regex.test(event.target.value))

    if(event.target.value.length < 3){
        console.log("O nome precisa ter mais de 3 digitos!")
    }

    if(!regex.test(event.target.value)){
        console.log("Nome Inválido")
    }
})

const checkNome = () => { //checar nome
    const nomeRegex = /^[a-zA-ZÀ-ÿ\s]+$/;

    return nomeRegex.test(nome.value) && nome.value.length > 3
} 

email.addEventListener("input", (event) => { //email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    console.log(regexEmail.test(event.target.value))
})

const checkEmail = () => { //checar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email.value)
}

senha.addEventListener("input", (event) => { //senha

    let valorSenha = event.target.value;

    const temMaiuscula = /[A-Z]/.test(valorSenha);
    const temNumero = /\d/.test(valorSenha);
    const temEspecial = /[^A-Za-z0-9]/.test(valorSenha);
    const tamanhoCorreto = valorSenha.length >= 10;

    if(!temMaiuscula){
        console.log("Precisa de ao menos uma letra maiúscula!");
        msgTemUmaMaiuscula.style.color = "red"
    }else{
        msgTemUmaMaiuscula.style.color = "greenyellow"
    }

    if(!temNumero){
        console.log("Precisa de ao menos um número na senha!");
        msgTemUmNumero.style.color = "red"
    }else{
        msgTemUmNumero.style.color = "greenyellow"
    }

    if(!temEspecial){
        console.log("Precisa de ao menos um caractere especial!");
        msgTemUmEspecial.style.color = "red"
    }else{
        msgTemUmEspecial.style.color = "greenyellow"
    }

    if(!tamanhoCorreto){
        console.log("Precisa ter no mínimo 10 caracteres!");
        dezCaracters.style.color = "red"
    }else{
        dezCaracters.style.color = "greenyellow"
    }


    event.target.value = valorSenha
    console.log(event.target.value)

    
})

const checkSenha = () => { //checar senha
    const senhaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/;

    return senhaRegex.test(senha.value)
}

confirm_senha.addEventListener("input", (event) => { //confirm senha
    if(event.target.value !== senha.value){
        console.log("As senhas não estão iguais!")
    }else{

        console.log("Senhas iguais! Senha confirmada! :)")
    }
})

const checkConfirmSenha = () => { //checar confirm senha
    if(confirm_senha.value !== senha.value){
        return false
    }else{
        return true
    }
}

idade.addEventListener("input", (event) =>{ //idade
    let idade1 = event.target.value.replace(/\D/g, "")
    console.log(idade1)
})

const checkIdade = () => { //checar idade
    if(idade.value > 18){
        return true
    }else{
        return false
    }
}

cpf.addEventListener("input", (event) => { //cpf (pesquisa)
    let valorCPF = event.target.value;


    valorCPF = valorCPF.replace(/\D/g, "");


    valorCPF = valorCPF.substring(0, 11);

    valorCPF = valorCPF.replace(/(\d{3})(\d)/, "$1.$2");
    valorCPF = valorCPF.replace(/(\d{3})(\d)/, "$1.$2");
    valorCPF = valorCPF.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    event.target.value = valorCPF;
    console.log(event.target.value)
})

const checkCpf = () => { //checar cpf
    if(cpf.value.length !== 14){
        return false
    }else{
        return true
    }
}

enviar.addEventListener("submit", (event) => {
    
    event.preventDefault();

    if(!checkNome()){
        createDisplayMsgError("Nome Inválido!")
        return `Nome Inválido`
    }
    
    if(!checkEmail()){
        createDisplayMsgError("Email Inválido!")
        return "Email Inválido!"
    }
    
    if(!checkSenha()){
        createDisplayMsgError("Senha Inválida!")
        return "Senha Inválida!"
    }
    
    if(!checkConfirmSenha()){
        createDisplayMsgError("As senhas não estão iguais!")
        return "As senhas não estão iguais!"
    }
    
    if(!checkIdade()){
        createDisplayMsgError("Idade Inválida")
        return "Idade Inválida"
    }
    
    if(!checkCpf()){
        createDisplayMsgError("CPF inválido!")
        return "CPF inválido!"
    }
    
    console.log("Botão deu certo!")

    
})

senha.addEventListener("focus", () => {
    aparecerMsg.classList.remove("escondido");
})

senha.addEventListener("blur", () => {
    if (checkSenha()) {
        aparecerMsg.classList.add("escondido");
    }
  })