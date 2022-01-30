import React, { Component } from "react";
    import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
    } from "reactstrap";

    export default class CustomModal extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem
        };
      }
      handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
          value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
      };
      render() {
        const { toggle, onSave } = this.props;
        return (
          <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}> Nowe zadanie </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="title">Tytuł</Label>
                  <Input
                    type="text"
                    name="title"
                    value={this.state.activeItem.title}
                    onChange={this.handleChange}
                    placeholder="Podaj tytuł zadania"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Opis</Label>
                  <Input
                    type="text"
                    name="description"
                    value={this.state.activeItem.description}
                    onChange={this.handleChange}
                    placeholder="Podaj opis zadania"
                  />
                </FormGroup>
                <FormGroup check>
                  <Label for="completed">
                    <Input
                      type="checkbox"
                      name="completed"
                      checked={this.state.activeItem.completed}
                      onChange={this.handleChange}
                    />
                    Zakończone
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Label for="completionDate">Planowana data zakończenia</Label>
                  <Input
                      type="date"
                      name="completionDate"
                      value={this.state.activeItem.completionDate}
                      onChange={this.handleChange}
                      min="2022-01-30"
                    />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                Zapisz
              </Button>
            </ModalFooter>
          </Modal>
        );
      }
    }