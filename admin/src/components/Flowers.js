import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Flowers() {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
  setLoading(true);
  setError(null);

  fetch(`${process.env.REACT_APP_API_URL}/api/flowers`)
    .then((res) => res.json())
    .then((data) => {
      console.log("API Response:", data); // ✅ See full API response
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      setError("Failed to fetch flowers");
    })
    .finally(() => setLoading(false));
}, []);

  // Fetch flowers from API
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${process.env.REACT_APP_API_URL}/api/flowers`)
      .then((res) => res.json())
      .then((data) => setFlowers(data))
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to fetch flowers");
      })
      .finally(() => setLoading(false));
  }, []);

  // Function to delete a flower
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This flower will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch(`${process.env.REACT_APP_API_URL}/api/flowers/${id}`, { method: "DELETE" });

          // Update state to remove deleted flower
          setFlowers((prevFlowers) => prevFlowers.filter((flower) => flower._id !== id));

          Swal.fire("Deleted!", "The flower has been removed.", "success");
        } catch (err) {
          Swal.fire("Error!", "Failed to delete flower", "error");
        }
      }
    });
  };

  if (loading) return <p>Loading flowers...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="admin-panel">
      <div className="form-nav">
        <h1>Admin Panel</h1>
        <button onClick={() => navigate("/")}>Flowers</button>
        <button onClick={() => navigate("/add-flowers")}>Add Flowers</button>
      </div>

      {/* Vertical Line Under Navigation */}
      <div className="vertical-line"></div>  

      <div className="flowers-list">
        {flowers.length === 0 ? (
          <p>No flowers available</p>
        ) : (
          flowers.map((flower) => {
            // Ensure correct image URL formatting
            const imageUrl = flower.image?.startsWith("/uploads/")
              ? `${process.env.REACT_APP_API_URL}${flower.image}`
              : `${process.env.REACT_APP_API_URL}/uploads/${flower.image}`;//
        

            return (
              <div key={flower._id} className="flower-card">
                <img
                  src={imageUrl}
                  alt={flower.name}
                  
                  className="flower-image"
                />
                <div className="flower-info">
                  <h2>{flower.name}</h2>
                  <p><strong>Category:</strong> {flower.category}</p>
                  <p><strong>Price:</strong> ${flower.price}</p>
                  <p><strong>Description:</strong> {flower.description}</p>
                  <button className="delete-btn" onClick={() => handleDelete(flower._id)}>Delete</button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <footer>
        <p>Flower Delivery App</p>
        <p>Created for ElevateHER Innovation Space Ltd</p>
        <p>By Fauziyya Nura Ahmed</p>
      </footer>
    </div>
  );
}

export default Flowers;
