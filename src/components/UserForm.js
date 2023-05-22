import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import "./UserForm.css";

const UserForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: null,
    kvk: false,
    role: "",
  });

  const InputTextChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const InputCheckboxChangeHandler = (e) => {
    const { name, checked } = e.target;
    setUser({ ...user, [name]: checked });
  };

  useEffect(() => {
    console.log("user: ", user);
  }, [user]);

  return (
    <div>
      <div>
        <h2>User Data:</h2>
        <hr />
        <div data-test-id="test-name">{user.name}</div>
        <div data-test-id="test-email">{user.email}</div>
        <div data-test-id="test-gender">{user.gender}</div>
        <div data-test-id="test-kvk">{user.kvk ? "KVK" : "İPTAL"}</div>
        <div data-test-id="test-role">{user.role}</div>
      </div>
      <Form className="user-form">
        <FormGroup>
          <Label htmlFor="name">İsim</Label>
          <Input
            id="name"
            type="text"
            name="name"
            onChange={InputTextChangeHandler}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            onChange={InputTextChangeHandler}
          ></Input>
        </FormGroup>

        <FormGroup>
          Cinsiyet:
          <Label htmlFor="gender-e">Erkek</Label>
          <Input
            id="gender-e"
            type="radio"
            name="gender"
            value={"Erkek"}
            onChange={InputTextChangeHandler}
          ></Input>
          <br />
          <Label htmlFor="gender-k">Kadın</Label>
          <Input
            id="gender-k"
            type="radio"
            name="gender"
            value={"Kadın"}
            onChange={InputTextChangeHandler}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="kvk">KVK Metnini kabul ediyor musun?</Label>
          <Input
            id="kvk"
            type="checkbox"
            name="kvk"
            onChange={InputCheckboxChangeHandler}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label>Role</Label>
          <Input type="select" name="role" onChange={InputTextChangeHandler}>
            <option disabled selected hidden>
              Lütfen Role Seçiniz...
            </option>
            <option>okur</option>
            <option>yazar</option>
            <option>admin</option>
          </Input>
        </FormGroup>
        <Button type="submit">Kaydet</Button>
      </Form>
    </div>
  );
};

export default UserForm;
