import React from "react";
import styled from "styled-components";
import {FaTrash, FaEdit} from "react-icons/fa"
import { useState } from 'react';
import { PageContentArea, Title, Table, Tr, Th, Td } from "../../TableContentPage" 

export const LogoImagem = styled.img`
    width: 30px;
    border-radius: 8px;
`
export const SearchArea = styled.div`
    padding: 15px;
    background-color: #D9D9D9;
    border-color: blue;
    box-shadow: 0 1px 10px gray;

    input:focus {
        outline: none;
        box-shadow: 0px 0px 2px blue;
        border: 2px solid blue;
    };
`
export const SearchInput = styled.input`
    border: 2px solid blue;
    width: 190px;
    border-radius: 10px;
    padding: 6px 12px;
`

export let PageArea = styled.div``

const CostumersPage = (props) => {
    
    if (props.sidebarVisible == true) {
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

    const [empresasPesquisadas, setEmpresasPesquisadas] = useState([])

    const [temPesquisa, setTemPesquisa] = useState(false)

    const SearchFunction = (evento) => {
        const textoDigitado = evento.target.value;
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
    }


    return (
        <PageArea>
            <SearchArea>
                <SearchInput type="text"
                    placeholder="Pesquisar todas as empresas"
                    onKeyDown={event => {
                        if (event.key === "Enter") {
                            SearchFunction(event);
                        }
                    }}
                    onBlur={event => {
                        SearchFunction(event);
                    }}
                />
            </SearchArea>
            <PageContentArea>
                <div className='page-content'>
                    <Title>Lista de Empresas Clientes</Title>
                    <Table>
                        <caption>Lista de Empresas Clientes</caption>
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
            </PageContentArea>
        </PageArea>
    )
}

export default CostumersPage