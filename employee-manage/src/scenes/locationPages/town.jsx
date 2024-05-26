import React, { useState } from 'react'
import Modal from '../../components/modal';
import TableComponent from '../../components/table/table';
import { ErrorMessage, Field } from 'formik';
import { useQuery } from '@tanstack/react-query';
import { fetchGetAll } from '../../services/baseService';

const fields = [
  {
      header: 'ID',
      accessor: 'id'
  },
  {
      header: 'Town',
      accessor: 'name'
  },
  {
      header: 'City',
      accessor: 'city',
      alt: 'name'
  }
]

const validate = values => {
  const errors = {}
  if (!values.name)
      errors.name = 'Required'
  else if (values.name.length < 3)
      errors.name = 'Name minimum length 3'

  if (values.cityId <= 0)
      errors.cityId = 'Select City '
  return errors;
}


const Town = () => {
  const city = useQuery({ queryKey: 'cities', queryFn: () => fetchGetAll('City') })



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
                    <Field htmlFor='cityId' component='label'>City:</Field>
                    <Field className="form-control" id='cityId' name='cityId' as='select'>
                        <option selected disabled>Selected City</option>
                        {
                            city?.data && city?.data.map((item, index) => {
                                return <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            })
                        }
                        <ErrorMessage className="text-danger" name="cityId" component="div" />
                    </Field>
                </div>
            </>
        );
    }

    return <>
        <TableComponent
            fields={fields}
            title='Town'
            setIsOpenModal={setIsModalOpen}
            keyName={'towns'}
            controller={'Town'}
            setSelectItem={setSelectItem}
        />
        {isModalOpen && <Modal
            title={selectItem !== null ? 'Update Town' : "Add Town"}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            validate={validate}
            initialValues={selectItem !== null ? { ...selectItem } : { name: '',  cityId:0 }}
            actionType={selectItem !== null ? 'edit' : 'add'}
            inputs={inputs}
            controller={'Town'}
            keyName={'towns'}
            setSelectItem={setSelectItem}
        />}

    </>
}

export default Town