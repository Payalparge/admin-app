import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCreateUser = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/category/save",
        {
          name,
          description,
          code,
          isActive,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        console.log("Create successful:", response.data);
        setName("");
        setDescription("");
        setCode("");
        setIsActive(true);
        setError(null);
        navigate("/");
      } else {
        setError("Unexpected response status.");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "Create failed. Please try again."
      );
      console.error("Create failed:", error);
    }
  };

  return (
    <Layout>
      <div className="create-user">
        <form onSubmit={handleCreateUser}>
          <input
            className="input-tap"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            className="input-tap"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
          <input
            className="input-tap"
            type="number"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Code"
            required
          />
          <label>
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
            />
            Is Active
          </label>
          <button className="create-button-create" type="submit">
            Create
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
    </div>
    </Layout>
  );
};

export default CreateUser;
