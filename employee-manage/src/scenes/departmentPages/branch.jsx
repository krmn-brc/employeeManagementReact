import { useQuery } from '@tanstack/react-query';
import Modal from '../../components/modal';
import { fetchGetAll } from '../../services/baseService';
import { useState } from 'react';
import TableComponent from '../../components/table/table';
import { ErrorMessage, Field } from 'formik';

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
        header: 'Department',
        accessor: 'department',
        alt: 'name'
    }
]

const validate = values => {
    const errors = {}
    if (!values.name)
        errors.name = 'Required'
    else if (values.name.length < 3)
        errors.name = 'Name minimum length 3'

    if (values.departmentId <= 0)
        errors.departmentId = 'Select Department '
    return errors;
}

const Branch = () => {
    const department = useQuery({ queryKey: 'departments', queryFn: () => fetchGetAll('Department') })
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
                    <Field htmlFor='departmentId' component='label'>General Department:</Field>
                    <Field className="form-control" id='departmentId' name='departmentId' as='select'>
                        <option selected disabled>Selected Department</option>
                        {
                            department?.data && department?.data.map((item, index) => {
                                return <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            })
                        }
                        <ErrorMessage className="text-danger" name="departmentId" component="div" />
                    </Field>
                </div>
            </>
        );
    }


    return <>
        <TableComponent
            fields={fields}
            title='Branch'
            setIsOpenModal={setIsModalOpen}
            keyName={'branches'}
            controller={'Branch'}
            setSelectItem={setSelectItem}
        />
        {isModalOpen && <Modal
            title={selectItem !== null ? 'Update Branch' : "Add Branch"}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            validate={validate}
            initialValues={selectItem !== null ? { ...selectItem } : { name: '',  departmentId:0 }}
            actionType={selectItem !== null ? 'edit' : 'add'}
            inputs={inputs}
            controller={'Branch'}
            keyName={'branches'}
            setSelectItem={setSelectItem}
        />}

    </>
}

export default Branch