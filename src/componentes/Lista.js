import React from 'react'

const Lista = ({lista, setLista}) => {
    const check= (indice) =>{
        const nuevaLista = lista.map((item, i) => {
            if (i === indice) {
                return { ...item, estado: !item.estado };
            } else {
                return item;
            }
        });
        setLista(nuevaLista);
    }
    const eliminar = (indice) =>{
        const nuevaLista = lista.filter((item, i)=>{
            if (i !== indice )return item
        }
        )
        setLista(nuevaLista);
    }
    return (
        <div>
            {lista.map((item, index)=>(
                <div>
                    <span className='me-3' style={item.estado ? {textDecoration:"line-through"}:{}}>{item.titulo}</span>
                    <input type={"checkbox"} checked={item.estado} onChange={()=>check(index)}/>
                    <button className='btn btn-dark' onClick={()=>eliminar(index)}>Eliminar</button>
                </div>
            ))}
        </div>
    )
}

export default Lista
