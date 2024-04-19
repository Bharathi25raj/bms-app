import React, { useEffect, useState } from "react";
import { Table, message } from "antd";
import moment from "moment";
import Button from "../../Components/Button";
import MovieForm from "./MovieForm";
import { DeleteMovie, GetAllMovies } from "../../apiCalls/movies";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loaderSlice";

function MoviesList() {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [formType, setFormType] = useState("add");
  const [showMovieFormModal, setShowMovieFormModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllMovies();
      if (response.success) {
        setMovies(response.data);
        dispatch(HideLoading());
      } else {
        message.error(response.message);
      }
    } catch (err) {
      dispatch(HideLoading());
      message.error(err.message);
    }
  };

  const handleDelete = async (movieId) => {
    try {
      dispatch(ShowLoading());
      const response = await DeleteMovie(movieId);
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (err) {
      dispatch(HideLoading());
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Poster",
      dataIndex: "poster",
      render: (text, record) => {
        return (
          <img
            src={record.poster}
            alt="poster"
            height="60"
            width="80"
            className="br-1"
          />
        );
      },
    },

    {
      title: "Name",
      dataIndex: "title",
    },

    {
      title: "Description",
      dataIndex: "description",
    },

    {
      title: "Duration",
      dataIndex: "duration",
    },

    {
      title: "Genre",
      dataIndex: "genre",
    },

    {
      title: "Language",
      dataIndex: "language",
    },

    {
      title: "Realease Date",
      dataIndex: "releaseDate",
      render: (text, record) => {
        return moment(record.releaseDate).format("DD-MM-YYYY");
      },
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex gap-1">
            {console.log(text)}
            <i
              class="ri-pencil-line"
              onClick={() => {
                setFormType("edit");
                setSelectedMovie(record);
                setShowMovieFormModal(true);
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
    getData();
  }, []);

  return (
    <div>
      <div className="flex justify-end mb-1">
        <Button
          title="Add Movie"
          variant="outlined"
          onClick={() => {
            setFormType("add");
            setShowMovieFormModal(true);
          }}
        />
      </div>

      <Table columns={columns} dataSource={movies} />

      {showMovieFormModal && (
        <MovieForm
          onClose={() => setShowMovieFormModal(false)}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          formType={formType}
          getData={getData}
        />
      )}
    </div>
  );
}

export default MoviesList;
