import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Toast,
  Text
} from "native-base";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Arslan Ali",
      email: "arslan@gmail.com",
      phone: "03213220124"
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input
                placeholder={this.state.name}
                multiline={false}
                maxLength={40}
              />
            </Item>
            <Text style={{ color: "red", marginLeft: 20 }}>
              Enter valid name
            </Text>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                placeholder={this.state.email}
                multiline={false}
                maxLength={50}
              />
            </Item>
            <Item stackedLabel error>
              <Label>Phone Number</Label>
              <Input
                placeholder={this.state.phone}
                keyboardType="numeric"
                multiline={false}
                maxLength={11}
              />
            </Item>
          </Form>
          <Button
            light
            style={{ alignSelf: "center", marginTop: 20 }}
            onPress={() => {
              Toast.show({
                text: "Updated!",
                dration: 3000,
                type: "success"
              });
            }}
          >
            <Text>Update</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default EditProfile;
