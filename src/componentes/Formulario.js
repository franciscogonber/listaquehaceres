import React, { useState } from 'react'

const Formulario = ({lista, setLista}) => {
    const [valor, setValor] = useState("")
    const agregar = (evento)=>{
        evento.preventDefault();
        const nuevaLista = [...lista, { titulo: valor, estado: false}]
        setLista(nuevaLista)
    }
  return (
    <div className='container'>
            <form onSubmit={agregar}>
                <div className="mb-3">
                    <input onChange={(e)=>setValor(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn btn-primary">ADD</button>
            </form>
        </div>
  )
}

export default Formulario
