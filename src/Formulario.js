
function Formulario({botao, eventoTeclado,cadastrar, obj,cancelar,remover, alterar}){
    return(
        <form>
            <input type="text" value={obj.titulo} onChange={eventoTeclado} name="titulo"  placeholder="titulo" className="form-control"></input>
            <input type="text" value={obj.edicao} onChange={eventoTeclado} name="edicao"  placeholder="Numero da edicao" className="form-control"></input>
            <input type="text" value={obj.autor}  onChange={eventoTeclado}  name="autor" placeholder="autor" className="form-control"></input>
            <input type="text" value={obj.categoria}  onChange={eventoTeclado} name="categoria"   placeholder="categoria" className="form-control"></input>
            <input type="text" value={obj.modelo}  onChange={eventoTeclado} name="modelo"  placeholder="modelo" className="form-control"></input>

{
    botao
    ?
    <input type="button"  value="Cadastrar" onClick={cadastrar} className="btn btn-primary"></input>
:
<div>
<input type="button"  value="Alterar" onClick={alterar} className="btn btn-warning"></input>
            <input type="button" onClick={()=>remover()}  value="Remover" className="btn btn-danger"></input>
            <input type="button" onClick={cancelar} value="Cancelar" className="btn btn-secondary"></input>

</div>

}
            


        </form>
    )
}
export default Formulario;