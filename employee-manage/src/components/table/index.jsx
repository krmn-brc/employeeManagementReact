import React from 'react'
import { BsPlusCircleDotted } from "react-icons/bs";


const Table = ({title, headers, content, setIsOpenModal}) => {
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
                                               
                                                {
                                                    headers.map((header, index) => {
                                                        return <th key={index} scope='col'> 
                                                          {header}
                                                        </th>
                                                    })
                                                }
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                          {content()}
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

export default Table