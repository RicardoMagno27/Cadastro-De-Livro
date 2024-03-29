
import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tb from './Tb'








function App() {
  
  
  
  
  const livro ={
id: 0,
titulo: '',
edicao: 0,
autor:'',
categoria:'',
modelo:''
  }

 

  //useState
const[btnCadastrar,setBtnCadastrar] = useState(true);
const[livros,setLivros]= useState([]);
const[objLivro,setObjLivro] = useState(livro);
// conexao com o back end
useEffect(()=>{
  fetch("http://localhost:8080/livros/list")
  .then(retorno=> retorno.json())
  .then(retorno_convertido => setLivros(retorno_convertido));
},[]);
//conseguindo os dados
const aoDigitar=(e)=>{
  setObjLivro({...objLivro,[e.target.name]:e.target.value});
}


//metodo de cadastrar livros
const cadastrar = ()=>{
fetch('http://localhost:8080/livros/create', {
  method:'POST',
  body: JSON.stringify(objLivro),
  headers:{
    'Content-type':'application/json',
    'Accept':'application/json',
  }
})
.then(retorno => retorno.json())
.then(retorno_convertido => {
  if(retorno_convertido.mensagem !== undefined){
    alert('Erro ao cadastrar');
  }else{
    setLivros([...livros,retorno_convertido]);
    alert('Livro Cadastrado Com Sucesso');
    LimparFormulario();
    
  }
}) 
}
//limpeza do formulario
const LimparFormulario = () =>{
  setObjLivro(livro);
  setBtnCadastrar(true);
}



//Selecionar o livo
const selecionarLivro =(indice) =>{
setObjLivro(livros[indice]);
setBtnCadastrar(false);
};


//metodo de remover livros
const remover = () => {
  fetch('http://localhost:8080/livros/delete/'+objLivro.id,{
    method:'DELETE',
    headers:{
      'Content-type':'application/json',
      'Accept':'application/json',
     
    }
  })
  .then(retorno => retorno.json())
  .then(retorno_convertido => {
    
    // Mensagem
    alert('Livro Removido Com Sucesso');

    // Cópia do vetor de produtos
    let vetorTemp = [...livros];

    // Índice
    let indice = vetorTemp.findIndex((p) =>{
      return p.id === objLivro.id;
    });

    // Remover produto do vetorTemp
    vetorTemp.splice(indice, 1);

    // Atualizar o vetor de produtos
    setLivros(vetorTemp);

    // Limpar formulário
    LimparFormulario ();
    
  })
}



//Atualizar formulario
const alterar = () => {
  fetch('http://localhost:8080/livros/update/'+objLivro.id,{
    method:'put',
    body:JSON.stringify(objLivro),
    headers:{
      'Content-type':'application/json',
      'Accept':'application/json',
      
      
      

    }
  })
  .then(retorno => retorno.json())
  .then(retorno_convertido => {
    
    if(retorno_convertido.mensagem !== undefined){
      alert(retorno_convertido.mensagem);
    }else{
      
      // Mensagem
      alert('Produto alterado com sucesso!');

      // Cópia do vetor de produtos
      let  vetorTemp = [...livros];

      // Índice
      let indice = vetorTemp.findIndex((p) =>{
        return p.id === objLivro.id;
      });

      // Alterar produto do vetorTemp
      vetorTemp[indice] = objLivro;

      // Atualizar o vetor de produtos
      setLivros(vetorTemp);

      // Limpar o formulário
      LimparFormulario();
    }
    
  })
}


  return (
    //layout da pagina
    <div>
    
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar ={cadastrar}  obj={objLivro} cancelar={LimparFormulario}   remover={remover} alterar={alterar}   />
<Tb vetor={livros} selecionar={selecionarLivro} />
    </div>
  );
}

export default App;
