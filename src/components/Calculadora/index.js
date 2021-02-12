import React from "react";
import { Line } from "@ant-design/charts";

const Calculadora = () => {
  const salesData = [];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const rentabilidad = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1200,
    1400,
    1600,
  ];

  const data = [
    {
      year: "1991",
      value: 3,
    },
    {
      year: "1992",
      value: 4,
    },
    {
      year: "1993",
      value: 3.5,
    },
    {
      year: "1994",
      value: 5,
    },
    {
      year: "1995",
      value: 4.9,
    },
    {
      year: "1996",
      value: 6,
    },
    {
      year: "1997",
      value: 7,
    },
    {
      year: "1998",
      value: 9,
    },
    {
      year: "1999",
      value: 13,
    },
  ];

  const config = {
    data,
    yField: "value",
    xField: "year",
    tooltip: {
      customContent: (title, items) => {
        return (
          <>
            <h5 style={{ marginTop: 16 }}>{title}</h5>
            <ul style={{ paddingLeft: 0 }}>
              {items?.map((item, index) => {
                const { name, value, color } = item;
                return (
                  <li
                    key={item.year}
                    className="g2-tooltip-list-item"
                    data-index={index}
                    style={{
                      marginBottom: 4,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="g2-tooltip-marker"
                      style={{ backgroundColor: color }}
                    ></span>
                    <span
                      style={{
                        display: "inline-flex",
                        flex: 1,
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ margiRight: 16 }}>{name}:</span>
                      <span className="g2-tooltip-list-item-value">
                        {value}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </>
        );
      },
    },
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#2593fc",
        lineWidth: 2,
      },
    },
  };

  for (let i = 0; i < 12; i += 1) {
    salesData.push({
      x: `${months[i]}`,
      y: `$ ${Math.floor(rentabilidad[i] * 10)}`,
    });
  }

  return (
    <div className="container bg-white">
        <div>
            
        </div>
      <Line {...config} />
    </div>
  );
};

export default Calculadora;
