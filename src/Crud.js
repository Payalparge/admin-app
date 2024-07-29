import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMethod, deleteMethod } from "./ApiService";
import EditUser from "./EditUser";
import { UrlConstant } from "./UrlConstant";

function Crud() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({
    name: "",
    description: "",
    code: "",
    isAction: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getMethod(UrlConstant.GET_ALL_USERS);
      console.log("response", response);
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = (item) => {
    setNewData(item);
    setIsEditing(true);
    navigate('/EditUser', { state: { item } }); 
    
  };

  const handleDelete = async (uniqueId) => {
    try {
      const response = await deleteMethod(`http://localhost:8080/api/v1/category/${uniqueId}`);
      console.log(response);
      fetchData();
      window.alert("Item deleted successfully."); 
    } catch (error) {
      console.error("Error deleting data:", error);
      setError("Failed to delete item.");
      window.alert("Failed to delete item.");     }
  };
  
  return (
    <div className="crud-app">
      {error && <p className="error-message">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Code</th>
            <th>isAction</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.uniqueid}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.code}</td>
              <td>{item.isAction ? "Yes" : "No"}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(item)}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => handleDelete(item.uniqueId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
  );
}

export default Crud;
