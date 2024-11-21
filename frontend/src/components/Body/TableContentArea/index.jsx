import './index.css'
import React from "react";
import styled from "styled-components";
import {FaTrash, FaEdit} from "react-icons/fa"
import { useState } from 'react';

const PageContentArea = styled.div`
    margin-top: 40px;
`

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

const LogoImagem = styled.img`
    width: 30px;
    border-radius: 8px;
`

export const Td = styled.td`
    text-align: "center";
    width: "auto";
`

const TableContentArea = (props) => {
    const [empresasPesquisadas, setEmpresasPesquisadas] = useState([])

    const [temPesquisa, setTemPesquisa] = useState(false)


    return (
        <div className='page-content-area'>
            <div>PESQUISA</div>
            <input type="text" 
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const empresasFiltradas = props.empresas.filter(empresa => 
                        empresa.nomeFantasia.toLowerCase().includes(textoDigitado.toLowerCase()) ||
                        empresa.cnpj.toLowerCase().includes(textoDigitado.toLowerCase()) ||
                        empresa.razaoSocial.toLowerCase().includes(textoDigitado.toLowerCase())
                    )
                    setEmpresasPesquisadas(empresasFiltradas)
                    if (textoDigitado == '') {
                        setTemPesquisa(false)
                    } else {
                        setTemPesquisa(true)
                    }
                }}
            />
            
            <div className='page-content'>
                <Table>
                    <caption><Title>Lista de Empresas Clientes</Title></caption>
                    <thead>
                        <tr>
                            {props.conteudo.map((item, i) => {
                                return <Th key={i}>{item}</Th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {temPesquisa ? (
                            empresasPesquisadas.map((item, i) => (
                                <Tr className='td-table' key={i}>
                                <Td><LogoImagem 
                                    src={item.logo}
                                    alt="Logotipo da Empresa"
                                /></Td>
                                <Td>{item.nomeFantasia}</Td>
                                <Td>{item.cnpj}</Td>
                                <Td>{item.razaoSocial}</Td>
                                <Td>{item.servicosAtivos}</Td>
                                <Td><FaEdit /></Td>
                                <Td><FaTrash /></Td>
                                </Tr>
                            ))
                            ) : (
                            props.empresas.map((item, i) => (
                                <Tr className='td-table' key={i}>
                                <Td><LogoImagem 
                                    src={item.logo}
                                    alt="Logotipo da Empresa"
                                /></Td>
                                <Td>{item.nomeFantasia}</Td>
                                <Td>{item.cnpj}</Td>
                                <Td>{item.razaoSocial}</Td>
                                <Td>{item.servicosAtivos}</Td>
                                <Td><FaEdit /></Td>
                                <Td><FaTrash /></Td>
                                </Tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default TableContentArea