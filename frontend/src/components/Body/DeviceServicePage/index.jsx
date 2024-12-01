import React from "react";
import styled from "styled-components";

export const PageArea = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 15px;
  margin-left: 100px;
  margin-top: 50px;
  background-color: #ebeff3;
`

export const PageContentArea = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  padding: 10px 0;
  flex-direction: column;
`

export const Title = styled.h2`
  margin: 0 10px 10px 10px;
  font-weight: 400;
`
export const Table = styled.table`
  word-break: break-all;

  caption {
    display: none;
  }
`
export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const Tr = styled.tr`
  &:hover {
  background-color: #F4F5F7;
  cursor: pointer;
  }`

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  padding: 10px;
  background-color: #f5f7f9;
  font-weight: 400;

`
export const Td = styled.td`
  padding: 10px;
  text-align: "center";
  width: "auto";
  font-weight: 100;

  a {
    display: flex;
    text-decoration: none;
    color: black;
  }
`
export const StatusAguardandoReparo = styled.div`
  padding: 5px;
  background-color: orange;
  border-radius: 8px;
  display: inline;
`

const TableContentArea = (props) => {
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