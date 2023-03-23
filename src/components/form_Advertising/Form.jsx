import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./formStyle.css";

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const dropzoneRef = useRef();
  const inputRef = useRef(null);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  function handleDropzoneClick() {
    // Abre el explorador de archivos cuando el usuario hace clic en el dropzone
    inputRef.current.click();
  }

  function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function handleDropzoneHover(event) {
    event.preventDefault();
    dropzoneRef.current.style.cursor = "pointer";
  }
  function handleDropzoneHoverOut(event) {
    event.preventDefault();
    dropzoneRef.current.style.cursor = "initial";
  }

  return (
    <div className="form-container">
      <div className="form-group">
        <label>Fecha de inicio</label>
        <br />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <div className="form-group">
        <label>Fecha de fin</label>
        <br />
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>

      <div className="form-group">
        <label>Archivos</label>
        <br />
        <div
          className="dropzone"
          ref={dropzoneRef}
          onClick={handleDropzoneClick}
          onDrop={handleImageUpload}
          onDragOver={handleDropzoneHover}
          onDragLeave={handleDropzoneHoverOut}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={inputRef}
            style={{ display: "none" }}
          />
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: "250px", height: "400px" }}
            />
          ) : (
            <p>Arrastra una imagen aquí o haz clic para seleccionar una.</p>
          )}
        </div>

        <ul>
          {files.map((file) => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
          ))}
        </ul>
      </div>

      <button type="submit">Enviar</button>
    </div>
  );
};

export default Form;
