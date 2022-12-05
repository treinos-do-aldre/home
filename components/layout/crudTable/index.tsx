import { StyledTable } from "./style"
import { GlobalContext } from "context/GlobalContext";
import { useContext } from "react";
import { FaTrashAlt, FaPlus, FaPen } from "react-icons/fa"
import SubmitSpinner from '@components/layout/submitSpinner'

interface DataTable {
    columns: {
        label: string,
        key: string,
        format?: Function
    }[],
    data: any[],
    createFunc?: Function,
    deleteFunc?: Function,
    editFunc?: Function,
    actionId?: number
}

const Table = (props: DataTable) => {
    const { theme } = useContext(GlobalContext);
    const contrastColor = theme.theme_name == "dark" ? "#fff" : theme.secondary.default;

    return (
        <StyledTable theme={theme}>
            <thead>
                <tr className="custom_head">
                    {props.columns.map((col) => (
                        <th key={col.key}>{col.label}</th>
                    ))}
                    {(props.deleteFunc || props.editFunc) && <th>Ações</th>}
                </tr>
            </thead>
            {(props.data && (props.data.length > 0)) &&
                <tbody>
                    {props.data.map((item) => (
                        <tr key={item.id} className="custom_row">
                            {props.columns.map((col) => (
                                <td key={`${col.key}-${item.id}`}>
                                    {col.format ? col.format(item[col.key]) : item[col.key]}
                                </td>
                            ))}
                            {(props.deleteFunc || props.editFunc) &&
                                <>
                                    {(props.actionId && (props.actionId == item.id)) ?
                                        <td>
                                            <SubmitSpinner color={contrastColor} />
                                        </td>
                                        :
                                        <td className="action_col">

                                            {props.deleteFunc && <FaTrashAlt className="delete" onClick={() => { if (props.deleteFunc && (props.actionId == -1)) { props.deleteFunc(item) } }} />}
                                            {props.editFunc && <FaPen className="edit" onClick={() => { if (props.editFunc) { props.editFunc(item) } }} />}
                                        </td>
                                    }
                                </>
                            }
                        </tr>
                    ))}
                </tbody>
            }
        </StyledTable>
    )
}

export default Table