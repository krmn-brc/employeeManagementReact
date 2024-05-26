import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { fetchGetAll } from '../../services/baseService'

import Modal from '../../components/modal';
import { ErrorMessage, Field } from 'formik';
import TableComponent from '../../components/table/table';

const fields = [
    {
        header: 'ID',
        accessor: 'id'
    },
    {
        header: 'Department',
        accessor: 'name'
    },
    {
        header: 'General Department',
        accessor: 'generalDepartment',
        alt: 'name'
    }
]

const validate = values => {
    const errors = {}
    if (!values.name)
        errors.name = 'Required'
    else if (values.name.length < 3)
        errors.name = 'Name minimum length 3'

    if (values.generalDepartmentId <= 0)
        errors.generalDepartmentId = 'Select General Department '
    return errors;
}

const Department = () => {
    const generalDepartment = useQuery({ queryKey: 'generalDepartments', queryFn: () => fetchGetAll('GeneralDepartment') })



    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectItem, setSelectItem] = useState(null);




    const inputs = () => {
        return (
            <>
                <div className="form-group mb-3">
                    <Field htmlFor='name' component='label'>Name:</Field>
                    <Field type="text" id='name' className="form-control" name="name" />
                    <ErrorMessage className="text-danger" name="name" component="div" />
                </div>
                <div className='form-group'>
                    <Field htmlFor='generalDepartmentId' component='label'>General Department:</Field>
                    <Field className="form-control" id='generalDepartmentId' name='generalDepartmentId' as='select'>
                        <option selected disabled>Selected General Department</option>
                        {
                            generalDepartment?.data && generalDepartment?.data.map((item, index) => {
                                return <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            })
                        }
                        <ErrorMessage className="text-danger" name="generalDepartmentId" component="div" />
                    </Field>
                </div>
            </>
        );
    }

    return <>
        <TableComponent
            fields={fields}
            title='Department'
            setIsOpenModal={setIsModalOpen}
            keyName={'departments'}
            controller={'Department'}
            setSelectItem={setSelectItem}
        />
        {isModalOpen && <Modal
            title={selectItem !== null ? 'Update Department' : "Add Department"}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            validate={validate}
            initialValues={selectItem !== null ? { ...selectItem } : { name: '',  generalDepartmentId:0 }}
            actionType={selectItem !== null ? 'edit' : 'add'}
            inputs={inputs}
            controller={'Department'}
            keyName={'departments'}
            setSelectItem={setSelectItem}
        />}

    </>
}

export default Department