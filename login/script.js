function validarformulario(){
    var nome = document.getElementById('nome')
    var idade = parseInt(document.getElementById('idade').value);
    var cidade = document.getElementById('cidade').value;


    let resultado = "";



     resultado += `<br>Nome ${nome}`;
     resultado += `<br>Cidade ${cidade}`;
    
     var h1nome = document.getElementById('text');
     h1nome.textContent = `Olá ${nome.value} , Você Tem ${idade} anos, e Mora Em ${cidade}`  ;


     
     

     document.getElementById('resultado').innerHTML.resultado;
}