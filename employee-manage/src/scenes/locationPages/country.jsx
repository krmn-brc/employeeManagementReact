
import { ErrorMessage, Field } from 'formik';
import React, { useState } from 'react'
import TableComponent from '../../components/table/table';
import Modal from '../../components/modal';

const fields = [
  {
      header:'ID',
      accessor:'id',
  },
  {
      header:'Country',
      accessor:'name'
  }
]



const validate = values => {
 const errors  = {}
 if(!values.name)
     errors.name = 'Required'
 else if(values.name.length < 3)
     errors.name = 'Name minimum length 3'
 return errors;
}


const Country = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectItem, setSelectItem] = useState(null);
  


  const inputs = () => {
    return (
      <>
        <div className="form-group">
          <Field text='Name:' htmlFor='name' component="label" >Name:</Field>
          <Field type="text" placeholder='Enter a name' id='name' className="form-control" name="name" />
          <ErrorMessage className="text-danger" name="name" component="div" />
        </div>
      </>
    )
  }
  return <>
    <TableComponent
      fields={fields}
      title='Country'
      setIsOpenModal={setIsModalOpen}
      keyName={'countries'}
      controller={'Country'}
      setSelectItem={setSelectItem}
    />
    {isModalOpen && <Modal
      title={selectItem !== null ? 'Update Country' : "Add Country"}
      isOpen={isModalOpen}
      setIsOpen={setIsModalOpen}
      validate={validate}
      initialValues={selectItem !== null ? { ...selectItem } : { name: '' }}
      actionType={selectItem !== null ? 'edit' : 'add'}
      inputs={inputs}
      controller={'Country'}
      keyName={'countries'}
      setSelectItem={setSelectItem}
    />}

  </>
}

export default Country