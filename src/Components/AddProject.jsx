import React, { useEffect } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { addProjectAPI } from "../Services/allAPI";

function AddProject() {
  const [show, setShow] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    language: "",
    overview: "",
    github: "",
    website: "",
    projectImage: "",
  });
  const [token, setToken] = useState("");
  //  to store the url of user uploaded  image or file

  const [preview, setPreview] = useState("");
  console.log(projectDetails);
  const handleClose = () => {
    setShow(false);
    setProjectDetails({
      title: "",
      language: "",
      overview: "",
      github: "",
      website: "",
      projectImage: "",
    });
    setPreview("");
  };
  const handleShow = () => setShow(true);

  //useeffect for imgage url

  useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const { title, language, overview, projectImage, github, website } =
      projectDetails;
    if (
      !title ||
      !language ||
      !overview ||
      !projectImage ||
      !github ||
      !website
    ) {
      toast.info("please fill the form completely");
    } else {
      //this is a multiform data so we want sent our data in like this
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("language", language);
      reqBody.append("overview", overview);
      reqBody.append("projectImage", projectImage);
      reqBody.append("github", github);
      reqBody.append("website", website);
      //nthayaalum ingane aavanann by default
      if (token) {
        reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };
      }

      const result = await addProjectAPI(reqBody, reqHeader);

      if (result.status === 200) {
        console.log(result.data);
      } else {
        console.log(result.response.data);
      }
    }
  };
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      projectImage: e.target.files[0],
                    })
                  }
                ></input>
                <img
                  className="img-fluid"
                  src={
                    preview
                      ? preview
                      : "https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png"
                  }
                ></img>
              </label>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Project Title"
                  value={projectDetails.title}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      title: e.target.value,
                    })
                  }
                ></input>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Language Used"
                  value={projectDetails.language}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      language: e.target.value,
                    })
                  }
                ></input>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Github Link"
                  value={projectDetails.github}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      github: e.target.value,
                    })
                  }
                ></input>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Website Link"
                  value={projectDetails.website}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      website: e.target.value,
                    })
                  }
                ></input>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Project Overview"
                  value={projectDetails.overview}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      overview: e.target.value,
                    })
                  }
                ></input>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default AddProject;
