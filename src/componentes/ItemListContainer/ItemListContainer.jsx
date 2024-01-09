import { useState } from "react";
import foto from "../../assets/impresora.png";
import foto1 from "../../assets/impresora2.jpg";
import foto2 from "../../assets/impresora4.png";
import cart from "../../assets/cart.png";
const ItemListContainer = () => {
  const [producto, setProducto] = useState({
    valor1: 1,
    valor2: 1,
    valor3: 1,
    valor4: 1,
    valor5: 1,
  });

  const [carritoContador, setCarritoContador] = useState(0);

  const listProducts = [
    {
      Nombre: "Imporesora 3D",
      Precio: "$2300",
      Marca: "Narnia",
      Foto: foto,
      add: () => {
        setProducto((prev) => ({ ...prev, valor1: producto.valor1 + 1 }));
      },
      substract: () => {
        setProducto((prev) => ({
          ...prev,
          valor1: producto.valor1 > 1 ? producto.valor1 - 1 : 1,
        }));
      },
      cantidad: producto.valor1,
    },
    {
      Nombre: "Imporesora 3D 2D",
      Precio: "$3300",
      Marca: "Narnia",
      Foto: foto1,
      add: () => {
        setProducto((prev) => ({ ...prev, valor2: producto.valor2 + 1 }));
      },
      substract: () => {
        setProducto((prev) => ({
          ...prev,
          valor2: producto.valor2 > 1 ? producto.valor2 - 1 : 1,
        }));
      },
      cantidad: producto.valor2,
    },
    {
      Nombre: "Imporesora 3D",
      Precio: "$300",
      Marca: "Narnia",
      Foto: foto,
      add: () => {
        setProducto((prev) => ({ ...prev, valor3: producto.valor3 + 1 }));
      },
      substract: () => {
        setProducto((prev) => ({
          ...prev,
          valor3: producto.valor3 > 1 ? producto.valor3 - 1 : 1,
        }));
      },

      cantidad: producto.valor3,
    },
    {
      Nombre: "Imporesora 3D CUADRADA",
      Precio: "$500",
      Marca: "Narnia",
      Foto: foto,
      add: () => {
        setProducto((prev) => ({ ...prev, valor4: producto.valor4 + 1 }));
      },
      substract: () => {
        setProducto((prev) => ({
          ...prev,
          valor4: producto.valor4 > 1 ? producto.valor4 - 1 : 1,
        }));
      },
      cantidad: producto.valor4,
    },
    {
      Nombre: "Imporesora 3D CIRCULAR",
      Precio: "$1300",
      Marca: "Narnia",
      Foto: foto2,
      add: () => {
        setProducto((prev) => ({ ...prev, valor5: producto.valor5 + 1 }));
      },
      substract: () => {
        setProducto((prev) => ({
          ...prev,
          valor5: producto.valor5 > 1 ? producto.valor5 - 1 : 1,
        }));
      },
      cantidad: producto.valor5,
    },
  ];

  const handleChange = (newValue) => {
    setCarritoContador(carritoContador + newValue);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>IMPRESORAS 3D</h1>
        <div style={{ marginLeft: "30px", display: "flex" }}>
          <img style={{ height: "30px", width: "30px" }} src={cart} />
          {carritoContador >= 1 && (
            <div
              style={{
                backgroundColor: "orange",
                width: "30px",
                borderRadius: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {carritoContador}
            </div>
          )}
        </div>
      </div>
      {listProducts.map((producto, index) => {
        return (
          <div
            style={{
              width: "35%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow:
                " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
            key={index}
          >
            {/* NOMBRE PRODUCTO */}

            <div>{producto.Nombre}</div>
            {/* IMAGEN */}
            <div>
              <img
                style={{ height: "300px", width: "300px" }}
                src={producto.Foto}
              />
            </div>

            {/* BOTONES */}
            <div style={{ display: "flex" }}>
              <div
                onClick={producto.substract}
                style={{
                  height: "30px",
                  width: "30px",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "grey",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
              >
                -
              </div>
              <div
                style={{
                  height: "30px",
                  width: "60px",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid gray",
                  marginLeft: "3px",
                  marginRight: "3px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                {producto.cantidad}
              </div>
              <div
                onClick={producto.add}
                style={{
                  height: "20px",
                  width: "20px",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  backgroundColor: "grey",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
              >
                +
              </div>
            </div>
            <div
              onClick={() => handleChange(producto.cantidad)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40%",
                borderRadius: "10px",
                border: "1px solid",
                marginBottom: "20px",
                cursor: "pointer",
                backgroundColor: "lightgreen",
              }}
            >
              <div>Add to Cart</div>
              <img style={{ height: "30px", width: "30px" }} src={cart} />{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
