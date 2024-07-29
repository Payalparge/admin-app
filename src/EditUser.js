import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { putMethod } from './ApiService';
import Sidebar from './Sidebar';
import Layout from './Layout';

function EditUser() {
  const location = useLocation();
  const [newData, setNewData] = useState(location.state?.item || {});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUpdate = async () => {
    try {
      const intId = parseInt(newData.uniqueId);
      console.log('New data for PUT request:', newData);
      const response = await putMethod(
        `http://localhost:8080/api/v1/category/${intId}`,
        newData
      );
      setNewData({
        name: "",
        description: "",
        code: "",
        isAction: "",
      });
      if (response.success === true) {
        window.alert("Item updated successfully."); 
        navigate('/');
      } else {
        window.alert("Failed to update item."); 
      }
    } catch (error) {
      console.error("Error updating data:", error);
      setError("Failed to update item.");
      window.alert("Failed to update item."); 
    }
  };

  return (
    <Layout>
    <div className="edit-user-container">
      <h2>Edit User</h2>
      <div className="edit-user-form">
        <input
          type="text"
          placeholder="Name"
          value={newData.name || ''}
          onChange={(e) => setNewData({ ...newData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newData.description || ''}
          onChange={(e) => setNewData({ ...newData, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Code"
          value={newData.code || ''}
          onChange={(e) => setNewData({ ...newData, code: e.target.value })}
        />
        <input
          type="text"
          placeholder="isAction"
          value={newData.isAction || ''}
          onChange={(e) => setNewData({ ...newData, isAction: e.target.value })}
        />
        <button onClick={handleUpdate}>Update</button>
        {error && <p className="error-message">{error}</p>}
      </div>
      </div>
      </Layout>
  );
}

export default EditUser;
