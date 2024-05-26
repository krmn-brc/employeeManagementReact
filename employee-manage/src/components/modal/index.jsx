import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  Form, Formik } from "formik";
import { fetchAdd, fetchUpdate } from "../../services/baseService";


const Modal = ({ title,  isOpen, setIsOpen, initialValues, validate, inputs, controller, keyName, actionType, setSelectItem }) => {
      const queryClient = useQueryClient()

      const addMutation = useMutation({mutationFn:(values) => fetchAdd(controller, values), 
          onSuccess:() => {
               queryClient.invalidateQueries({queryKey:[keyName]})
          }
      })
      
      const updateMutation = useMutation({mutationFn:(values) => fetchUpdate(controller, values), 
          onSuccess:() => {
               queryClient.invalidateQueries({queryKey:[keyName]})
          }
      })

      const closeHandler = () => {
              setSelectItem(null);
              setIsOpen(false)
      }

      return <>
            <div style={{ display: `${isOpen ? 'block' : 'none'}` }}
                  tabIndex='-1'
                  aria-hidden='true'
                  id="staticBackdrop"
                  className={`modal fade ${isOpen ? 'show' : ''}`}
                  data-bs-backdrop='static'>


                  <div className="modal-dialog">
                        <div className="modal-content">
                              <div className="modal-header">
                                    <h5 className="modal-title"> {title} </h5>
                                    <button onClick={closeHandler} type="button" className="btn-close"></button>
                              </div>
                              <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={(values, { setSubmitting }) => {
                                          setTimeout(() => {
                                          setSubmitting(false);
                                           if(actionType === 'add')
                                                addMutation.mutate({...values})
                                            else
                                                updateMutation.mutate({...values})

                                          }, 400);
                                           
                                        setIsOpen(false)
                                    }}
                              >
                                 {({ isSubmitting }) => (
                                    <Form >
                                          <div className="modal-body">
                                                {inputs()}
                                          </div>
                                          <div className="modal-footer">
                                                <button onClick={closeHandler} type="button" data-bs-dismiss='modal' className="btn btn-secondary">Close</button>
                                                <button type="submit" disabled={isSubmitting} className="btn btn-success">Save Changes</button>
                                          </div>
                                    </Form>
                                    )} 
                              </Formik>
                        </div>
                  </div>
            </div>

      </>
}



export default Modal;