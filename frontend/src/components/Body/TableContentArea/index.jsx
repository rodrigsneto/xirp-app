import './index.css'
import React from "react";
import styled from "styled-components";
import {FaTrash, FaEdit} from "react-icons/fa"


const Title = styled.h2`
    margin: 10px 0;
`
const Table = styled.table`
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    word-break: break-all;
`
export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const Tr = styled.tr``

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
`

export const Td = styled.td`
    padding-top: 15px;
    text-align: "center";
    width: "auto";
`















const TableContentArea = (props) => {
    return (
        <div className='page-content-area'>
            <div className='page-content'>
                <Table>
                    <caption><Title>Lista de Empresas Clientes</Title></caption>
                    <thead>
                        <tr>
                            {props.conteudo.map(item => {
                                return <Th key={item}>{item}</Th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {props.empresas.map((item, i) => {
                            return(
                                <Tr className='td-table' key={i} >
                                    <Td><img src={item.logo} alt="Logotipo da Empresa" /></Td>
                                    <Td>{item.nomeFantasia}</Td>
                                    <Td>{item.cnpj}</Td>
                                    <Td>{item.razaoSocial}</Td>
                                    <Td>{item.servicosAtivos}</Td>
                                    <Td><FaEdit /></Td>
                                    <Td><FaTrash /></Td>
                                </Tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default TableContentArea