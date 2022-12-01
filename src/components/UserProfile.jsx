import React, { useState } from "react";
import { FileDrop } from "./FileDrop";
import {useMutation} from "react-query"
import { Form,FormGroup,Label,Input,Col } from "reactstrap";
import { updateAvatar } from "./getData";
 
export const UserProfile = ({loggedInUser,setLoggedInUser}) => {
  const [selFile,setSelFile] = useState({})
  console.log(selFile)

  const mutationAvatar=useMutation(updateAvatar,{
    onSuccess:(data)=>{
      console.log("SIKER: ",data)
    }
  })

  const handleUpdateAvatar=()=>{
    const formdata = new FormData()
    formdata.append("selFile",selFile)
    formdata.append("username",loggedInUser.username)
    formdata.append("avatar_id",loggedInUser.avatar_id)
    mutationAvatar.mutate(formdata)
  }
  return (
    <div className="mt-3">
        <h3 className="p-2 border-bottom text-center">User Profile Settings</h3>
        <br />
        <div className="row border p1">
          <span className="col-2">Email:</span>
          <span className="col-10">{loggedInUser.email}</span>
        </div>
      <Form className="border p-2 m-2 shadow">
        <FormGroup row>
          <Label for="pw" sm={12}>
            New Password
          </Label>
          <Col sm={8}>
            <Input
              id="pw"
              name="password"
              type="password"
            />
          </Col>
          <Col sm={4}>
            <Input
              type="button"
              value="Change Password"
              onClick={()=>console.log("Change Password...")}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <FileDrop setSelFile={setSelFile}/>
        </FormGroup>
        <FormGroup row className="justify-content-center">
          <Input type="button" className="btn w-50 m-1 btn-primary" value="Update Avatar"
          disabled={!selFile.name}
          onClick={handleUpdateAvatar}
          />
          <Input type="button" className="btn w-50 m-1 btn-danger" value="Delete User"/>
        </FormGroup>
      </Form>
    </div>
  );
};