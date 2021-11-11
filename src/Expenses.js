import React, { useEffect, useState } from "react";
import TimeAgo from 'timeago-react';
import { Modal, Form, Header, Button, Image } from 'semantic-ui-react'

const ExpensesPage = ({ projectId }) => {

  const [projectDetails, setProjectDetails] = useState(null)
  const [openViewModal, setOpenViewModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)

  const [description, setDescription] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleEditSubmit = (event) => {
  }

  useEffect(() => fetchProjectDetails(), [])

  const fetchProjectDetails = async () => {

    // Fetch project details with from /getprojectdetails and set project details
    const projectDetails = {
      "id": 2,
      "user_id": 1,
      "name": "RTF",
      "budget": 12000,
      "description": "Realtime Face Recogniton",
      "expenses":
        [{
          "id": 1,
          "project_id": 2,
          "category_id": 2,
          "name": "Server Maintenance",
          "description": "Server maintenance and upgrading work to incorporate BC plans",
          "amount": 30000,
          "created_at": "2021-11-04T16:00:00.000Z",
          "created_by": "Jacky",
          "updated_at": "2021-11-06T16:00:00.000Z",
          "updated_by": "Jacky"
        },
        {
          "id": 2,
          "project_id": 2,
          "category_id": 4,
          "name": "Consultant",
          "description": "Consultancy services for integration work",
          "amount": 10000,
          "created_at": "2021-11-06T16:00:00.000Z",
          "created_by": "Helen",
          "updated_at": "2021-11-07T16:00:00.000Z",
          "updated_by": "Helen"
      }]
    }
    setProjectDetails(projectDetails)
  }

  return <>
    {projectDetails
      ? <div style={{ fontSize: "16px", marginTop: "1rem" }} class="ui container">
        <div class="ui header">
          Project {" "}
          <span style={{ textDecoration: "underline" }}>{projectDetails.name}</span>
        </div>
        <div>
          <span class="ui sub header">Description:</span>
          {' '}
          {projectDetails.description}
        </div>
        <div>
          <span class="ui sub header">Budget:</span>
          {' '}
          ${projectDetails.budget}
        </div>
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '18px' }} class="ui sub header">Expenses:</span>
          <button class="blue ui button">
            Add expense
          </button>
        </div>
        <div class="ui relaxed divided list">
          {projectDetails.expenses.map((expense, idx) => {
            return <>
              <div class="item">
                <div style={{ display: 'flex' }}>
                  <i style={{ alignSelf: 'center' }} class="large file alternate middle aligned icon"></i>
                  <div style={{ marginRight: 'auto' }} class="content">
                    <div class="header">{expense.name}</div>
                    <div class="description">
                      {expense.updated_at ?
                        <>{'Updated at '}<TimeAgo
                          datetime={expense.updated_at}
                          locale='en_US' />
                        </>
                        : <>{'Created at '}<TimeAgo
                          datetime={expense.created_at}
                          locale='en_US' />
                        </>
                      }
                    </div>
                  </div>
                  <div>
                    <Modal
                      onClose={() => setOpenViewModal(false)}
                      onOpen={() => {setSelectedIndex(idx); setOpenViewModal(true);}}
                      open={openViewModal}
                      trigger={<button class="ui blue button">
                        View
                      </button>}
                    >
                      <Modal.Header>{projectDetails.expenses[selectedIndex].name}</Modal.Header>
                      <Modal.Content image>
                        <Modal.Description style={{ fontSize: "16px" }}>
                          <div>
                            <span class="ui sub header">ID:</span>
                            {' '}
                            {projectDetails.expenses[selectedIndex].id}
                          </div>
                          <div>
                            <span class="ui sub header">Project ID:</span>
                            {' '}
                            {projectDetails.expenses[selectedIndex].project_id}
                          </div>
                          <div>
                            <span class="ui sub header">Category ID:</span>
                            {' '}
                            {projectDetails.expenses[selectedIndex].category_id}
                          </div>
                          <div>
                            <span class="ui sub header">Description:</span>
                            {' '}
                            {projectDetails.expenses[selectedIndex].description}
                          </div>
                          <div>
                            <span class="ui sub header">Amount:</span>
                            {' '}
                            {projectDetails.expenses[selectedIndex].amount}
                          </div>
                          <div>
                            <span class="ui sub header">Created At:</span>
                            {' '}
                            {projectDetails.expenses[selectedIndex].created_at}
                          </div>
                          <div>
                            <span class="ui sub header">Created By:</span>
                            {' '}
                            {projectDetails.expenses[selectedIndex].created_by}
                          </div>
                          <div>
                            <span class="ui sub header">Updated At:</span>
                            {' '}
                            {projectDetails.expenses[selectedIndex].updated_at}
                          </div>
                          <div>
                            <span class="ui sub header">Updated By:</span>
                            {' '}
                            {projectDetails.expenses[selectedIndex].updated_by}
                          </div>
                        </Modal.Description>
                      </Modal.Content>
                      <Modal.Actions>
                        <Button color='blue' onClick={() => setOpenViewModal(false)}>
                          Close
                        </Button>
                      </Modal.Actions>
                    </Modal>
                    <Modal
                      onClose={() => setOpenEditModal(false)}
                      onOpen={() => setOpenEditModal(true)}
                      open={openEditModal}
                      trigger={<button class="ui orange button">
                        Edit
                      </button>}
                    >
                      <Modal.Header>Edit</Modal.Header>
                      <Modal.Content image>
                        <Modal.Description>
                        <Form onSubmit={handleEditSubmit}>
                          <Form.Field>
                            <input
                              value={projectId}
                              onChange={handleDescriptionChange}
                              placeholder="Project"
                            />
                          </Form.Field>
                          <Form.Field>
                            <input
                              value={description}
                              onChange={handleDescriptionChange}
                              placeholder="Name"
                            />
                          </Form.Field>
                          <Form.Field>
                            <input
                              value={description}
                              onChange={handleDescriptionChange}
                              placeholder="Description"
                            />
                          </Form.Field>
                          <Form.Field>
                            <input
                              value={description}
                              onChange={handleDescriptionChange}
                              placeholder="Category"
                            />
                          </Form.Field>
                          <Form.Field>
                            <input
                              value={description}
                              onChange={handleDescriptionChange}
                              placeholder="Amount"
                            />
                          </Form.Field>
                          </Form>
                        </Modal.Description>
                      </Modal.Content>
                      <Modal.Actions>
                        <Button color='green' onClick={() => setOpenEditModal(false)}>
                          Submit
                        </Button>
                        <Button color='red' onClick={() => setOpenEditModal(false)}>
                          Exit
                        </Button>
                      </Modal.Actions>
                    </Modal>
                    <button class="ui red button">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </>
          })}

        </div>
      </div>
      : null}
  </>
}

export default ExpensesPage