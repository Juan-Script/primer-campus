import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// export default function TablaCursos({curso}) {
//   return (
//     <div>{curso.attributes.titulo}</div>
//   )
// }



export default function TablaCursos({curso}) {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        cursos.getCursos().then(data => setCursos(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={cursos} tableStyle={{ minWidth: '50rem' }}>
                <Column field="titulo" header="Titulo"></Column>
                <Column field="nivel" header="Nivel"></Column>
                <Column field="categoria" header="Categoría"></Column>
                <Column field="tecnología" header="Tecnología"></Column>
                <Column field="precio" header="Precio"></Column>
            </DataTable>
        </div>
    );
}