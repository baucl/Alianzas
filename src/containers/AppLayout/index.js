import React, { useEffect } from "react";
import "../../index.css";
import Routes from "../../app/index";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  PicCenterOutlined,
  GiftOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const IndexPage = ({ children }) => {
  const { Item } = Menu;
  //const { allPromotion } = useSelector(({ promotions }) => promotions);
  const dispatch = useDispatch();
  const { Header, Content, Footer } = Layout;

  const deleteLocalStorageInfo = () => {
    localStorage.removeItem("tokenExpiration");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  /*useEffect(() => {
      allPromotion === null && dispatch(get_all_promotions());
    }, [allPromotion]);*/
  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right,#3c71b5,#753c90)!important",
      }}
    >
      <Header className="ant-layout bg-white m-0">
        <Menu
          className="bg-white"
          defaultSelectedKeys={["1"]}
          mode="horizontal"
        >
          <Item key="0" className="float-left">
            <Link
              style={{
                textDecoration: "none",
                color: "#863399",
              }}
              className="font-weight-bold"
              to="/"
            >
              <div
                style={{
                  textDecoration: "none",
                  color: "#863399",
                }}
                className="font-weight-bold"
              >
                <img
                  className="w-50"
                  src="https://www.iudu.com.ar/wp-content/uploads/2020/11/iudu_logo.svg"
                />
              </div>
            </Link>
          </Item>
          <Item key="1">
            <Link
              style={{
                textDecoration: "none",
                color: "#863399",
              }}
              className="font-weight-bold"
              to="/nosotros"
            >
              Nosotros
            </Link>
          </Item>
          <Item key="2">
            <Link
              style={{
                textDecoration: "none",
                color: "#863399",
              }}
              className="font-weight-bold"
              to="/faqs"
            >
              FAQs
            </Link>
          </Item>
          <Item key="3">
            <Link
              style={{
                textDecoration: "none",
                color: "#863399",
              }}
              className="font-weight-bold"
              to="/know-how"
            >
              Know-How
            </Link>
          </Item>
          <Item key="4">
            <Link
              style={{
                textDecoration: "none",
                color: "#863399",
              }}
              className="font-weight-bold"
              to="/productos"
            >
              Productos
            </Link>
          </Item>
          <Item key="5">
            <Link
              style={{
                textDecoration: "none",
                color: "#863399",
              }}
              className="font-weight-bold"
              to="/calculadora-rentabilidad"
            >
              Calculador de rentabilidad
            </Link>
          </Item>
          <Item key="6">
            <Link
              style={{
                textDecoration: "none",
                color: "#863399",
              }}
              className="font-weight-bold"
              to="/hacete-socio"
            >
              Hacete socio
            </Link>
          </Item>
          <Item key="7">
            <Link
              style={{
                textDecoration: "none",
                color: "#863399",
              }}
              className="font-weight-bold"
              to="/crm"
            >
              CRM
            </Link>
          </Item>
          <Item key="8">
            <Link
              style={{
                textDecoration: "none",
                color: "#863399",
              }}
              className="font-weight-bold"
              to="/formulario-contacto"
            >
              Formulario de contacto
            </Link>
          </Item>
          <a className="float-right text-decoration-none">
            <Link
              className="rounded-lg"
              style={{
                textDecoration: "none",
              }}
              className="font-weight-bold"
              to="/login"
            >
              Iniciar Sesi&oacute;n
            </Link>
          </a>
        </Menu>
      </Header>
      <Content style={{ margin: "0 16px" }}>{children}</Content>
      <Footer
        style={{
          textAlign: "center",
          background: "linear-gradient(to right, #3c71b5, #753c90)",
        }}
        className="text-white p-0"
      >
        <div
          className="container col-12 py-2"
          style={{ background: "rgba(0,0,0,.1)" }}
        >
          <div className="column one column_column">
            <div className="cta-align-middle">
              <strong style={{ padding: "10px" }}>
                Descargate IUDÚ ahora y hacé más
              </strong>
              <a
                href="https://play.google.com/store/apps/details?id=com.cordial.iudu"
                target="_blank"
              >
                <img
                  src="https://iudu.com.ar/wp-content/uploads/2020/10/google-play-badge.svg"
                  style={{ padding: "5px" }}
                  className=" lazy-loaded"
                  data-src="https://iudu.com.ar/wp-content/uploads/2020/10/google-play-badge.svg"
                />
                <noscript>
                  <img
                    src="https://iudu.com.ar/wp-content/uploads/2020/10/google-play-badge.svg"
                    style={{ padding: "5px" }}
                  />
                </noscript>
              </a>
              <a
                href="https://apps.apple.com/ar/app/iud%C3%BA/id1475542231"
                target="_blank"
              >
                <img
                  src="https://iudu.com.ar/wp-content/uploads/2020/10/store_ios.svg"
                  style={{ padding: "5px" }}
                  className=" lazy-loaded"
                  data-src="https://iudu.com.ar/wp-content/uploads/2020/10/store_ios.svg"
                />
                <noscript>
                  <img
                    src="https://iudu.com.ar/wp-content/uploads/2020/10/store_ios.svg"
                    style={{ padding: "5px" }}
                  />
                </noscript>
              </a>
            </div>
          </div>
        </div>
        {/*<div className="p-2">
          Alianzas - IUD&Uacute; ©{new Date().getFullYear()}
      </div>*/}
      </Footer>
    </Layout>
  );
};

const AppLayout = () => (
  <IndexPage>
    <Routes />
  </IndexPage>
);

export default AppLayout;
