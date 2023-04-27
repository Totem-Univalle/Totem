import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./formStyle.css";
import React, { useState } from "react";
import axios from "axios";

function Formulario() {
  const [FechaInicio, setFechaInicio] = useState("");
  const [FechaFin, setFechaFin] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [totem, setTotem] = useState(1);
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("FechaInicio", FechaInicio);
    formData.append("FechaFin", FechaFin);
    formData.append("Imagen", imageFile);
    formData.append("IdTotem", totem);

    axios
      .post("https://localhost:7264/api/Publicidad", formData)
      .then((response) => {
        console.log(response);
        setMensajeConfirmacion("La publicidad se ha creado correctamente.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>FechaInicio:</label>
          <input
            type="date"
            value={FechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>FechaFin:</label>
          <input
            type="date"
            value={FechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>totem id:</label>
          <input
            type="number"
            value={totem}
            onChange={(e) => setTotem(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Imagen:</label>
          <input
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>
        <button type="submit">Enviar</button>
        <br></br>
        {mensajeConfirmacion && <p>{mensajeConfirmacion}</p>}
      </form>
    </div>
  );
}

export default Formulario;
