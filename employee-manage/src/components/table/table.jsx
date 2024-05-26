import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchDelete, fetchGetAll } from "../../services/baseService";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { BsPlusCircleDotted } from "react-icons/bs";

const TableComponent = ({ title, fields, setIsOpenModal, keyName, controller, setSelectItem }) => {
    const queryClient = useQueryClient();
    const query = useQuery({ queryKey: [keyName], queryFn: () => fetchGetAll(controller) })
    const deleteMutation = useMutation({mutationFn:(id) => fetchDelete(controller, id), 
        onSuccess:() => { queryClient.invalidateQueries({queryKey:[keyName]}) }
    })

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="float-start"> {title} </h4>
                                <button onClick={() => setIsOpenModal(true)} className="btn btn-outline-success float-end" > <BsPlusCircleDotted size={20} /> Add {title} </button>
                            </div>
                            <div className="card-header">
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                {
                                                    fields.map((field, index) => {
                                                        return <th key={index} scope='col'>
                                                            {field.header}
                                                        </th>
                                                    })
                                                }
                                                <th scope="col">Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                query.data &&
                                                query.data.map((item, index) => {
                                                    return <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        {

                                                            fields.map((field, i) => {
                                                                return field.alt ?
                                                                    <td key={i}>
                                                                        {
                                                                            item[field.accessor][field.alt]
                                                                        }
                                                                    </td> :
                                                                    <td key={i}>
                                                                        {
                                                                            item[field.accessor]
                                                                        }
                                                                    </td>
                                                            })

                                                        }
                                                        <td>
                                                            <FaEdit style={{ cursor: 'pointer' }} onClick={() => { setIsOpenModal(true); setSelectItem(item) }} className="text-warning me-2" size={22} />
                                                            <FaTrashAlt style={{ cursor: 'pointer' }} onClick={() => deleteMutation.mutate(item.id)} className="text-danger" size={22} />
                                                        </td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default TableComponent;