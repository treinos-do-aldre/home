import { useContext, useState } from 'react'

import { CrudContext } from 'context/CrudContext';
import { GlobalContext } from "context/GlobalContext";
import Table from '@components/layout/crudTable';
import Spinner from '@components/layout/spinner';

import StyledComponent from './style'
import { FaPlus } from "react-icons/fa"
import TestesService from '@services/testes';
import SubmitSpinner from '@components/layout/submitSpinner';

const ItemContent = () => {
    const { theme } = useContext(GlobalContext);
    const { items, loading, refreshItems, actionId, setActionId} = useContext(CrudContext);
    const service = TestesService();
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const columns = [
        {
            label: "ID",
            key: "id",
        },
        {
            label: "Nome",
            key: "name",
        },
        {
            label: "Data de criação",
            key: "created_at",
            format: (e: any) => {return new Date(e).toLocaleDateString()}
        }
    ];

    const onDelete = async (item: any) => {
        setActionId(item.id);
        console.log("deletar: ", item.id)
        const res = await service.customRequest("item", "delete", `id=${item.id}`, {})
        refreshItems();
    }

    const onEdit = async (item: any) => {
        console.log("editar: ", item.id)
    }

    const onCreate = async () => {
        if(!loadingSubmit) {
            setLoadingSubmit(true)
            let r = "Item " + (Math.random() + 1).toString(36).substring(2);
            const res = await service.customRequest("item", "post", "", {name: r})
            refreshItems();
            setLoadingSubmit(false);
        }
    }

    return (
        <StyledComponent theme={theme}>
            <div className="content_header">
                <h2>Items</h2>
                <div onClick={() => onCreate()} className="new_btn">{loadingSubmit ? <SubmitSpinner /> : <FaPlus />} <span>Adicionar</span></div>
            </div>
            <Table columns={columns} data={items} deleteFunc={onDelete} editFunc={onEdit} actionId={actionId} />
            {loading && <Spinner size={180} speed={1.5} thickness={4}/>}
        </StyledComponent>
    )
}

export default ItemContent
