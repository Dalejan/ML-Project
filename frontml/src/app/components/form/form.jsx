import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    lat: "",
    lon: "",
    rooms: "",
    bedrooms: "",
    bathrooms: "",
    surface_total: "",
    surface_covered: "",
  });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.lat + " " + datos.lon);
  };

  return (
    <Fragment>
      <div className="container">
        <h2 className="display-5">Predictor del precio de una casa con ML</h2>
        <form className="row" onSubmit={enviarDatos}>
          <div className="col-md-3 ">
            <label className="form-label">Latitud</label>
            <input
              type="text"
              className="form-control"
              onChange={handleInputChange}
              name="lat"
            ></input>
          </div>
          <div className="col-md-3">
            <label className="form-label">Longitud</label>
            <input
              type="text"
              className="form-control"
              onChange={handleInputChange}
              name="lon"
            ></input>
          </div>
          <div className="col-md-3">
            <label className="form-label">Numero de Salas</label>
            <input
              type="text"
              className="form-control"
              onChange={handleInputChange}
              name="rooms"
            ></input>
          </div>
          <div className="col-md-3">
            <label className="form-label">Numero de Dormitorios</label>
            <input
              type="text"
              className="form-control"
              onChange={handleInputChange}
              name="bedrooms"
            ></input>
          </div>
          <div className="col-md-3">
            <label className="form-label">Numero de Baños</label>
            <input
              type="text"
              className="form-control"
              onChange={handleInputChange}
              name="bathrooms"
            ></input>
          </div>
          <div className="col-md-3">
            <label className="form-label">Superficie Total</label>
            <input
              type="text"
              className="form-control"
              onChange={handleInputChange}
              name="surface_total"
            ></input>
          </div>
          <div className="col-md-3">
            <label className="form-label">Superficie Construida</label>
            <input
              type="text"
              className="form-control"
              onChange={handleInputChange}
              name="surface_covered"
            ></input>
          </div>
          <div className="contenedor-boton">
          <button type="submit" className="enviar btn btn-dark">
            Enviar
          </button>
          </div>
        </form>
      </div>
      <h3 className="resultado display-6">Resultado:</h3>
    </Fragment>
  );
};

export default Formulario;
