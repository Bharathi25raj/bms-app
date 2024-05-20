import { Table } from "antd";
import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import TheatreForm from "./TheatreForm";

function TheatreList() {
  const [theatres, setTheatres] = useState([]);
  const [showTheatreFormModal, setShowTheatreFormModal] = useState(false);
  const [formType, setFormType] = useState("add");
  const [selectedTheatre, setSelectedTheatre] = useState(null);

  const getTheatre = () => {

  }

  const handleDelete = (movieId) => {};

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Address",
      dataIndex: "address",
    },

    {
      title: "Phone",
      dataIndex: "phone",
    },

    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Status",
      dataIndex: "status",
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex gap-1">
            <i
              class="ri-pencil-line"
              onClick={() => {
                setFormType("edit");
                setSelectedTheatre(record);
                setShowTheatreFormModal(true);
              }}
            ></i>
            <i
              class="ri-delete-bin-line"
              onClick={() => handleDelete(record._id)}
            ></i>
          </div>
        );
      },
    },
  ];


  useEffect(() => {
    getTheatre();
  }, [])

  return (
    <div>
      <div className="flex justify-end mb-1">
        <Button
          title="Add Theatre"
          variant="outlined"
          onClick={() => {
            setFormType("add");
            setShowTheatreFormModal(true);
          }}
        />
      </div>

      <Table columns={columns} dataSource={theatres} />

      {showTheatreFormModal && (
        <TheatreForm
          onClose={() => setShowTheatreFormModal(false)}
          formType={formType}
          setSelectedTheatre={setSelectedTheatre}
          selectedTheatre={selectedTheatre}
          getTheatre={getTheatre}
        />
      )}
    </div>
  );
}

export default TheatreList;
