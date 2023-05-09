import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Box } from '@chakra-ui/react';


export default function TablaCursos({cursos}) {
    const [cursosTable, setCursos] = useState([])
  
    useEffect(() => {
      const cursosAttributes = cursos.map(curso => curso.attributes)
      setCursos(cursosAttributes)
    }, [cursos])
  
    return (
      <Box className="card">
        <DataTable value={cursosTable} tableStyle={{ minWidth: '50rem' }}>
          <Column field="titulo" header="Titulo"></Column>
          <Column field="nivel" header="Nivel"></Column>
          <Column field="categoria" header="Categoría"></Column>
          <Column field="tecnologia" header="Tecnología"></Column>
          <Column field="precio" header="Precio"></Column>
        </DataTable>
      </Box>
    )
  }
  
