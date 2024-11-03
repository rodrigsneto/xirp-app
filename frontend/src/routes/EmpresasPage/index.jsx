import TableContentArea from '../../components/Body/TableContentArea'
import Sidebar from '../../components/Body/Sidebar'
import './index.css'

import axios from "axios"
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from "react-toastify"


const EmpresasPage = () => {
    const [empresas, setEmpresas] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
  

    const getEmpresas = async () => {
        try{
        const res = await axios.get("http://localhost:8800/empresas")
        setEmpresas(res.data.sort((a, b) => (a.nomeFantasia > b.nomeFantasia ? 1 : -1)))
        } catch (error) {
        toast.error(error)
        }
    }

    useEffect(() => {
        getEmpresas()
    }, [setEmpresas])


    const table = [
        'Logo',
        'Nome Fantasia',
        'CNPJ',
        'Razão Social',
        'Serviços Ativos',
        '',
        ''
    ]

    return (
        <div className='body'>
            <Sidebar/>
            
            <TableContentArea conteudo={table} empresas={empresas}/>
        </div>
    )
}

export default EmpresasPage