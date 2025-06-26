import React, { useState, useRef } from "react";


function AddFlowers() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: null,
  });

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      //fetch("https://your-deployed-backend-url/api/flowers", ...)
      //http://localhost:5000/api/flowers
      //`${process.env.REACT_APP_API_URL}/api/flowers`
    fetch(`${process.env.REACT_APP_API_URL}/api/flowers`, {
      method: "POST",
      body: data,
    })
      .then(() => {
        alert("Flower added successfully!");
        setFormData({ name: "", category: "", price: "", description: "", image: null });
        fileInputRef.current.value = null;
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  };

  return (
    <div className="flower-container">
      

      {/* Upload Box */}
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" hidden />
      <div className="upload-box" onClick={handleUploadClick}>
        {formData.image ? (
          <img src={URL.createObjectURL(formData.image)} alt="Preview" className="preview-image" />
        ) : (
          <div>📷 Upload Image</div>
        )}
      </div>

      {/* Form Fields */}
      <form className="add-flower-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="Enter flower name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

        <div className="input-row">
          <div className="input-group">
            <label>Category</label>
            <input type="text" placeholder="Enter category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
          </div>

          <div className="input-group">
            <label>Price</label>
            <input type="number" placeholder="Enter price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} min="0" />
          </div>
        </div>

        <label>Description</label>
        <textarea placeholder="Enter description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />

        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>

      <footer>
        <p>Flower Delivery App</p>
        <p>Created for ElevateHER Innovation Space Ltd</p>
        <p>By Fauziyya Nura Ahmed</p>
      </footer>
    </div>
  );
}

export default AddFlowers;
