function validarformulario(){
    var nome = document.getElementById('nome')
    var idade = parseInt(document.getElementById('idade').value);
    var cidade = document.getElementById('cidade').value;


    let resultado = "";
    if (idade < 18){
        resultado +=`você tem apenas ${idade} anos voce e menor de idade`;
    }
    else if(idade > 18){
         resultado +=`você tem ${idade} você é maior de idade`;
    }

     resultado += `<br>Nome ${nome}`;
     resultado += `<br>Cidade ${cidade}`;
    
     var h1nome = document.getElementById('text');
     h1nome.textContent = `Olá ${nome.value}, você tem ${idade} anos, e mora em ${cidade}.`;  

     document.getElementById('resultado').innerHTML = resultado;
}