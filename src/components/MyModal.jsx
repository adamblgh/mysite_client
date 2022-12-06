import React from 'react';
import { useMutation } from 'react-query';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteUser } from './getData';
import { useNavigate } from 'react-router-dom';

export const MyModal=({modal,setModal,username,avatar_id,setLoggedInUser})=> {
  const navigate = useNavigate()
  const toggle = () => setModal(!modal);
  const toggleDelete=()=>{
   console.log("Törlendő: ",username,avatar_id)
   mutationDelete.mutate({username:username,avatar_id:avatar_id})
  }

  const mutationDelete=useMutation(deleteUser,{
    onError:(err)=>{
        console.log(err)
    },
    onSuccess:(data)=>{
        console.log(data.data)
        setLoggedInUser({})
        navigate('/')
    }
  })

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>WARNING!</ModalHeader>
        <ModalBody>
          Biztosan törölni szeretné a fiókját?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggleDelete}>
            Igen
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Mégse
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}