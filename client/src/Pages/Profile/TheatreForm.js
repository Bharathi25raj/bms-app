import { Form, Modal } from "antd";
import React from "react";
import Button from "../../Components/Button";

function TheatreForm({ onClose, formType, setSelectedTheatre, selectedTheatre, getTheatre }) {


    const onFinish = (values) => {

    }

  return (
    <div>
      <Modal
        title={formType === "add" ? "Add Theatre" : "Edit Theatre"}
        open={true}
        onCancel={() => {
            onClose();
            setSelectedTheatre(null);
        }}
        footer={null}
        width={500}
      >
        <Form layout="vertical" initialValues={selectedTheatre} onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input theatre name!",
              },
            ]}
          >
            <input type="text" />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              { required: true, message: "Please input theatre address!" },
            ]}
          >
            <input type="text" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please input theatre phone number!" },
            ]}
          >
            <input type="text" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input theatre email!" }]}
          >
            <input type="email" />
          </Form.Item>

          <div className="flex justify-end gap-1">
            <Button title='Cancel' type='button' variant='outlined' onClick={() => {
                onClose();
                setSelectedTheatre(null);
            }}/>
            <Button title='Save' type='submit' />
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default TheatreForm;
