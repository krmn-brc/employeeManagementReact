import { useState } from "react";
import Modal from "../../components/modal";
import { ErrorMessage, Field } from "formik";
import TableComponent from "../../components/table/table";

const fields = [
     {
         header:'ID',
         accessor:'id',
     },
     {
         header:'General Department Name',
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




const GeneralDepartment = () => {



const [isModalOpen, setIsModalOpen] = useState(false);
const [selectItem, setSelectItem] = useState(null);


   

    const inputs = () => {
         return (
            <>
             <Field text='Name:' htmlFor='name' component="label" >Name:</Field>
            <Field type="text" placeholder='Enter a name' id='name' className="form-control" name="name" />
            <ErrorMessage className="text-danger" name="name"  component="div" />
            </>
         )
    }
   


    return <>
            <TableComponent 
              fields={fields}
              title='General Department'
              setIsOpenModal={setIsModalOpen}
              keyName={'generalDepartments'}
              controller={'GeneralDepartment'}
              setSelectItem={setSelectItem}
            />
         {isModalOpen && <Modal 
         title={selectItem !== null ? 'Update General Department' : "Add General Department"}
         isOpen={isModalOpen} 
         setIsOpen={setIsModalOpen}
         validate={validate}
         initialValues={selectItem !== null ? {...selectItem} : {name:''}}
         actionType={selectItem !== null ? 'edit' : 'add'}
         inputs={inputs}
         controller={'GeneralDepartment'}
         keyName={'generalDepartments'}
         setSelectItem={setSelectItem}
         />}

    </>
}

export default GeneralDepartment