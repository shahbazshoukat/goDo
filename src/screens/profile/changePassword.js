import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Icon,
  Text,
  Label,
  Form,
  Item,
  Input,
  Button,
  Toast
} from "native-base";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Content>
          <Text style={{ fontSize: 30, marginLeft: 30, marginTop: 30 }}>
            Change Password
          </Text>
          <Label style={{ marginLeft: 30 }}>Use atleast 8 characters</Label>

          <Form style={{ marginLeft: 20, marginRight: 30 }}>
            <Item stackedLabel>
              <Label>Old Password</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>New Password</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Retype Password</Label>
              <Input />
            </Item>
          </Form>
          <Button
            light
            style={{ alignSelf: "center", marginTop: 20 }}
            onPress={() => {
              Toast.show({
                text: "Password Changed!",
                dration: 3000,
                type: "success"
              });
            }}
          >
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default ChangePassword;
