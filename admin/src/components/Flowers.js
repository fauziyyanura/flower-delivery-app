import React, { useState, useEffect } from "react";

import Swal from "sweetalert2";

function Flowers() {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${process.env.REACT_APP_API_URL}/api/flowers`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // ✅ Debug API response

        if (Array.isArray(data)) { 
          setFlowers(data); // ✅ Ensure flowers is set as an array
        } else {
          setFlowers([]);
          setError("Unexpected API response.");
        }
      })
      .catch((err) => {
        console.error("❌ Error fetching flowers:", err.message);
        setFlowers([]);
        setError("Failed to fetch flowers.");
      })
      .finally(() => setLoading(false)); // ✅ Ensure loading stops
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

          setFlowers((prevFlowers) => prevFlowers.filter((flower) => flower._id !== id));
          Swal.fire("Deleted!", "The flower has been removed.", "success");
        } catch (err) {
          console.error("❌ Error deleting flower:", err.message);
          Swal.fire("Error!", "Failed to delete flower.", "error");
        }
      }
    });
  };

  if (loading) return <p>Loading flowers...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="flower-container">
       <div className="flowers-list">
        {console.log("Flowers state:", flowers)} {/* ✅ Debug flowers array */}
        {flowers.length > 0 ? (
          flowers.map((flower) => {
            // ✅ Ensure correct image URL format
            const imageUrl = flower.image?.startsWith("http") 
              ? flower.image 
              : `${process.env.REACT_APP_API_URL}${flower.image}`;

            return (
              <div key={flower._id} className="flower-card">
                <img
                  src={imageUrl}
                  alt={flower.name}
                  onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
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
        ) : (
          <p>No flowers available.</p>
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
