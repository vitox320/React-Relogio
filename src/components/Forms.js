import React from 'react';
import {  Form, FormGroup, Label, Input } from 'reactstrap';

const Forms = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="forms">Email</Label>
        <Input type="number" name="form" id="forms"  />
      </FormGroup>
             
    </Form>
  );
}

export default Forms;