import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// export default function TablaCursos({curso}) {
//   return (
//     <div>{curso.attributes.titulo}</div>
//   )
// }



// export default function TablaCursos({cursos}) {

//     const [cursosTable, setCursos] = useState([])


//     const getData = () => {
//         cursos.forEach((curso) => cursosTable.push(curso.attributes))
//         return cursosTable
//     }

//     return (
//         <div className="card">
//             <DataTable value={getData()} tableStyle={{ minWidth: '50rem' }}>
//                 <Column field="titulo" header="Titulo"></Column>
//                 <Column field="nivel" header="Nivel"></Column>
//                 <Column field="categoria" header="Categoría"></Column>
//                 <Column field="tecnologia" header="Tecnología"></Column>
//                 <Column field="precio" header="Precio"></Column>
//             </DataTable>
//         </div>
//     )
// }


export default function TablaCursos({cursos}) {
    const [cursosTable, setCursos] = useState([])
  
    useEffect(() => {
      const cursosAttributes = cursos.map(curso => curso.attributes)
      setCursos(cursosAttributes)
    }, [cursos])
  
    return (
      <div className="card">
        <DataTable value={cursosTable} tableStyle={{ minWidth: '50rem' }}>
          <Column field="titulo" header="Titulo"></Column>
          <Column field="nivel" header="Nivel"></Column>
          <Column field="categoria" header="Categoría"></Column>
          <Column field="tecnologia" header="Tecnología"></Column>
          <Column field="precio" header="Precio"></Column>
        </DataTable>
      </div>
    )
  }
  
