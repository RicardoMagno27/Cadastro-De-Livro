

function Tb({vetor,selecionar}){
    return (
  <table className="table">
<thead className="table ">
    <tr>
        <th>#</th>
        <th>Titulo</th>
        <th>Edicao</th>
        <th>Autor</th>
        <th>Categoria</th>
        <th>Modelo</th>
        <th>Selecionar</th>
    </tr>
</thead>
<tbody>
   {
    vetor.map((obj,indice)=>(
        <tr className="table-tr"   key={indice}>
         <td>{indice+1}</td>
        <td>{obj.titulo}</td>
        <td>{obj.edicao}</td>
        <td>{obj.autor}</td>
        <td>{obj.categoria}</td>
        <td>{obj.modelo}</td>
        <td><button  onClick={()=>{selecionar(indice)}}  className="btn btn-success">Selecionar</button></td>

    </tr>
    ))
   }
</tbody>

  </table>
    )
}
export default Tb;