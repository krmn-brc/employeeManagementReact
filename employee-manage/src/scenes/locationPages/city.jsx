import React, { useState } from 'react'
import Modal from '../../components/modal'
import TableComponent from '../../components/table/table'
import { ErrorMessage, Field } from 'formik'
import { fetchGetAll } from '../../services/baseService'
import { useQuery } from '@tanstack/react-query'
const fields = [
  {
      header: 'ID',
      accessor: 'id'
  },
  {
      header: 'City',
      accessor: 'name'
  },
  {
      header: 'Country',
      accessor: 'country',
      alt: 'name'
  }
]

const validate = values => {
  const errors = {}
  if (!values.name)
      errors.name = 'Required'
  else if (values.name.length < 3)
      errors.name = 'Name minimum length 3'

  if (values.countryId <= 0)
      errors.countryId = 'Select Country '
  return errors;
}
const City = () => {
  const country = useQuery({ queryKey: 'countries', queryFn: () => fetchGetAll('Country') })



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
                    <Field htmlFor='countryId' component='label'>Country:</Field>
                    <Field className="form-control" id='countryId' name='countryId' as='select'>
                        <option selected disabled>Selected Country</option>
                        {
                            country?.data && country?.data.map((item, index) => {
                                return <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            })
                        }
                        <ErrorMessage className="text-danger" name="countryId" component="div" />
                    </Field>
                </div>
            </>
        );
    }

    return <>
        <TableComponent
            fields={fields}
            title='City'
            setIsOpenModal={setIsModalOpen}
            keyName={'cities'}
            controller={'City'}
            setSelectItem={setSelectItem}
        />
        {isModalOpen && <Modal
            title={selectItem !== null ? 'Update City' : "Add City"}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            validate={validate}
            initialValues={selectItem !== null ? { ...selectItem } : { name: '',  countryId:0 }}
            actionType={selectItem !== null ? 'edit' : 'add'}
            inputs={inputs}
            controller={'City'}
            keyName={'cities'}
            setSelectItem={setSelectItem}
        />}

    </>
}

export default City