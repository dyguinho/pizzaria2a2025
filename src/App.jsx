import {useState} from 'react'
 
function App(){
 
    const [nome, setNome] = useState('O Usuario Pedro Machado Joga Mais que o Cristiano Ronaldo');
    const Formulario = (props) => {
  return (
    <>
      <h4>Formulario de Inscrição</h4>
      <input classNAme= "Nome"
      name = "Nome"
      placeholder = "Digite seu Nome..."
      onChange={(value)=>setNome(e.target.value)}
      type="text" />
      <button onClick={()=>{
        (props.texto != null) ? alert(props.texto) : alert(props.nome)
        }}>
        CLIQUE AQUI
      </button>
    </>
  )
}
 
 
  return (
      <div>
        <h3>Pizzaria 2A</h3>
      <Formulario texto= "Texto Enviado pelo App"/>
      <Formulario texto= "São Paulo Meu Amor !!"/>
      <Formulario texto= "Paulistas freguêses"/>
      <Formulario/>
 
      </div>
    )
  }
 
export default App
 