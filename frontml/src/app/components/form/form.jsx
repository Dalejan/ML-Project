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
      <h1>Formulario</h1>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Latitud"
            className="form-control"
            onChange={handleInputChange}
            name="lat"
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Longitud"
            className="form-control"
            onChange={handleInputChange}
            name="lon"
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Numero de Cuartos en general"
            className="form-control"
            onChange={handleInputChange}
            name="rooms"
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Numero de Dormitorios"
            className="form-control"
            onChange={handleInputChange}
            name="bedrooms"
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Numero de Baños"
            className="form-control"
            onChange={handleInputChange}
            name="bathrooms"
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Superficie Total"
            className="form-control"
            onChange={handleInputChange}
            name="surface_total"
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Superficie Construida"
            className="form-control"
            onChange={handleInputChange}
            name="surface_covered"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>

      <ul>
        <li>{datos.lat}</li>
        <li>{datos.lon}</li>
        <li>{datos.rooms}</li>
        <li>{datos.bedrooms}</li>
        <li>{datos.bathrooms}</li>
        <li>{datos.surface_total}</li>
        <li>{datos.surface_covered}</li>
      </ul>
    </Fragment>
  );
};

export default Formulario;
