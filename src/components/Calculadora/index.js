import React, { useEffect, useState } from "react";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import {
  Statistic,
  Card,
  Row,
  Col,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { Line } from "@ant-design/charts";

const Calculadora = () => {
  const [precioVentaPublicoNetoIva, setPrecioVentaPublicoNetoIva] = useState(
    null
  );
  const [attrition, setAttrition] = useState(null);
  const [qDeVenta, setQDeVenta] = useState(null);
  const [puntosDeVenta, setPuntosDeVenta] = useState(null);
  const [promedioQMensual, setPromedioQMensual] = useState(null);
  const [curvaDeExperiencia, setCurvaDeExperiencia] = useState(null);
  const [comision, setComision] = useState(null);
  const [precioNetoIva, setPrecioNetoIva] = useState(null);
  const [ingresoNeto, setingresoNeto] = useState(null);
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

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
    //setArrayTest(oldArray => [...oldArray, `${months[i]}`]);
    salesData.push({
      x: `${months[i]}`,
      y: `$ ${Math.floor(rentabilidad[i] * 10)}`,
    });
    //console.log(arrayTest, "prueba");
  }

  return (
    <div className="row">
      <div className="p-3 bg-white ml-xs-1 ml-sm-1 ml-md-1 ml-lg-5 mt-5 mb-xs-1 mb-sm-1 mb-md-1 mb-lg-5 mr-xs-1 mr-sm-1 mr-md-1 mr-lg-2 text-center shadow-sm col-xs-12 col-sm-12 col-md-12 col-lg-3">
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
        >
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Input">
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                {
                  title: "Light",
                  value: "light",
                  children: [
                    {
                      title: "Bamboo",
                      value: "bamboo",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Cascader">
            <Cascader
              options={[
                {
                  value: "zhejiang",
                  label: "Zhejiang",
                  children: [
                    {
                      value: "hangzhou",
                      label: "Hangzhou",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Switch">
            <Switch />
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Form>
      </div>
      <Row className="bg-white p-5 mb-5 mt-5 shadow-sm col-xs-12 col-sm-12 col-md-12 col-lg-8">
        <div className="col-sm-12 col-md-12 col-lg-9">
          <Line {...config} />
        </div>
        <div className="pt-lg-0 pt-5 col-sm-12 col-md-12 col-lg-3">
          <Card>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </div>
      </Row>
    </div>
  );
};

export default Calculadora;
