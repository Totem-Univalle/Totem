import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditLocacion() {
    const { id } = useParams();
    const [locacion, setLocacion] = useState({
        nombre: "",
        descripcion: "",
        keywords: [],
        idTotem: null,
        imagenesCarrucel: null,
        imagenMapa: null,
    });

    useEffect(() => {
        axios.get(`https://localhost:7264/api/Locaciones/${id}`)
            .then((response) => {
                setLocacion(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLocacion((prevLocacion) => ({
            ...prevLocacion,
            [name]: value,
        }));
    };

    const handleKeywordsChange = (event) => {
        const { value } = event.target;
        setLocacion((prevLocacion) => ({
            ...prevLocacion,
            keywords: value.split(","),
        }));
    };

    const handleImagenesCarrucelChange = (event) => {
        const { files } = event.target;
        setLocacion((prevLocacion) => ({
            ...prevLocacion,
            imagenesCarrucel: files,
        }));
    };

    const handleImagenMapaChange = (event) => {
        const { files } = event.target;
        setLocacion((prevLocacion) => ({
            ...prevLocacion,
            imagenMapa: files[0],
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("nombre", locacion.nombre);
        formData.append("descripcion", locacion.descripcion);
        formData.append("keywords", locacion.keywords);
        formData.append("idTotem", locacion.idTotem);

        // formData.append("imagenesCarrucel", locacion.imagenesCarrucel);

        // formData.append("imagenMapa", locacion.imagenMapa);

        if (locacion.imagenesCarrucel) {
            for (let i = 0; i < locacion.imagenesCarrucel.length; i++) {
                formData.append('imagenesCarrucel', locacion.imagenesCarrucel[i]);
            }
        }

        if (locacion.imagenMapa) {
            formData.append('imagenMapa', locacion.imagenMapa);
        }
        axios.put(`https://localhost:7264/api/Locaciones/${id}`, formData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>

            <h2>Editar locación</h2>

            <form onSubmit={handleSubmit}>

                <div>

                    <label>Nombre:</label>

                    <input

                        type="text"

                        name="nombre"

                        value={locacion.nombre}

                        onChange={handleInputChange}

                    />

                </div>

                <div>

                    <label>Descripción:</label>

                    <textarea

                        name="descripcion"

                        value={locacion.descripcion}

                        onChange={handleInputChange}

                    />

                </div>

                <div>

                    <label>Palabras clave:</label>

                    <input

                        type="text"

                        name="keywords"

                        value={locacion.keywords}

                        onChange={handleKeywordsChange}

                    />

                </div>

                <div>

                    <label>Id Totem:</label>

                    <input

                        type="number"

                        name="idTotem"

                        value={locacion.idTotem}

                        onChange={handleInputChange}

                    />

                </div>

                <div>

                    <label>Imágenes de carrusel:</label>

                    <input

                        type="file"

                        name="imagenesCarrucel"

                        multiple

                        onChange={handleImagenesCarrucelChange}

                    />

                </div>

                <div>
                    <label>Imagen del mapa:</label>

                    <input

                        type="file"

                        name="imagenMapa"

                        onChange={handleImagenMapaChange}

                    />
                </div>
                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    );
}

export default EditLocacion;