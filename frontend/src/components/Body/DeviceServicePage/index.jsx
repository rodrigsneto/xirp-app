import React from "react";
import styled from "styled-components";
import { PageContentArea, Title, Table, Tr, Th, Td, StatusAguardandoReparo } from "../../TableContentPage"

export let PageArea = styled.div``

const TableContentArea = (props) => {
  
  if (props.sidebarVisible === true) {
    PageArea = styled.div`
        width: 100%;
        height: calc(100vh - 80px);
        margin-top: 50px;
        background-color: #ebeff3;
        margin-left: 100px;
    `
  } else {
    PageArea = styled.div`
        width: 100%;
        height: calc(100vh - 80px);
        margin-top: 50px;
        background-color: #ebeff3;
    `
  }

  return (
    <PageArea>
      <PageContentArea>
        <Title>Lista de Serviços de Equipamentos</Title>
        <Table>
          <caption>Lista de Serviços de Equipamentos</caption>
          <thead>
            <tr>
              <Th>Nº O.S.</Th>
              <Th>Cliente</Th>
              <Th>Equipamento</Th>
              <Th>Modelo</Th>
              <Th>Fornecedor</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            <Tr>
              <Td><a href="https://www.google.com">647</a></Td>
              <Td><a href="https://www.google.com">Compliance</a></Td>
              <Td><a href="https://www.google.com">Notebook</a></Td>
              <Td><a href="https://www.google.com">Dell Inspiron 15 I15-I120K-A35P</a></Td>
              <Td><a href="https://www.google.com">JN TECH</a></Td>
              <Td><a href="https://www.google.com"><StatusAguardandoReparo>Aguardando Reparo</StatusAguardandoReparo></a></Td>
            </Tr>
            <Tr>
              <Td><a href="https://www.google.com">647</a></Td>
              <Td><a href="https://www.google.com">Compliance</a></Td>
              <Td><a href="https://www.google.com">Notebook</a></Td>
              <Td><a href="https://www.google.com">Dell Inspiron 15 I15-I120K-A35P</a></Td>
              <Td><a href="https://www.google.com">JN TECH</a></Td>
              <Td><a href="https://www.google.com"><StatusAguardandoReparo>Aguardando Reparo</StatusAguardandoReparo></a></Td>
            </Tr>
            <Tr>
              <Td><a href="https://www.google.com">647</a></Td>
              <Td><a href="https://www.google.com">Compliance</a></Td>
              <Td><a href="https://www.google.com">Notebook</a></Td>
              <Td><a href="https://www.google.com">Dell Inspiron 15 I15-I120K-A35P</a></Td>
              <Td><a href="https://www.google.com">JN TECH</a></Td>
              <Td><a href="https://www.google.com"><StatusAguardandoReparo>Aguardando Reparo</StatusAguardandoReparo></a></Td>
            </Tr>
            <Tr>
              <Td><a href="https://www.google.com">647</a></Td>
              <Td><a href="https://www.google.com">Compliance</a></Td>
              <Td><a href="https://www.google.com">Notebook</a></Td>
              <Td><a href="https://www.google.com">Dell Inspiron 15 I15-I120K-A35P</a></Td>
              <Td><a href="https://www.google.com">JN TECH</a></Td>
              <Td><a href="https://www.google.com"><StatusAguardandoReparo>Aguardando Reparo</StatusAguardandoReparo></a></Td>
            </Tr>
            <Tr>
              <Td><a href="https://www.google.com">647</a></Td>
              <Td><a href="https://www.google.com">Compliance</a></Td>
              <Td><a href="https://www.google.com">Notebook</a></Td>
              <Td><a href="https://www.google.com">Dell Inspiron 15 I15-I120K-A35P</a></Td>
              <Td><a href="https://www.google.com">JN TECH</a></Td>
              <Td><a href="https://www.google.com"><StatusAguardandoReparo>Aguardando Reparo</StatusAguardandoReparo></a></Td>
            </Tr>
            <Tr>
              <Td><a href="https://www.google.com">647</a></Td>
              <Td><a href="https://www.google.com">Compliance</a></Td>
              <Td><a href="https://www.google.com">Notebook</a></Td>
              <Td><a href="https://www.google.com">Dell Inspiron 15 I15-I120K-A35P</a></Td>
              <Td><a href="https://www.google.com">JN TECH</a></Td>
              <Td><a href="https://www.google.com"><StatusAguardandoReparo>Aguardando Reparo</StatusAguardandoReparo></a></Td>
            </Tr>
          </tbody>

        </Table>

      </PageContentArea>
    </PageArea>
  )
}

export default TableContentArea