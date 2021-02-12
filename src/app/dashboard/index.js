import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Calculadora from "../../components/Calculadora";
import Faqs from "../../components/Faqs";
import FormularioContacto from "../../components/FormularioContacto";
import HaceteSocio from "../../components/HaceteSocio";
import KNowHow from "../../components/KNowHow";
import Nosotros from "../../components/Nosotros";
import Productos from "../../components/Productos";
import CRM from "../../components/CRM";


const IndexPage = () => (
  <Switch>
    <Route exact path={"/calculadora-rentabilidad"} component={Calculadora} />
    <Route exact path={"/faqs"} component={Faqs} />
    <Route exact path={"/formulario-contacto"} component={FormularioContacto} />
    <Route exact path={"/hacete-socio"} component={HaceteSocio} />
    <Route exact path={"/know-how"} component={KNowHow} />
    <Route exact path={"/nosotros"} component={Nosotros} />
    <Route exact path={"/productos"} component={Productos} />
    <Route exact path={"/crm"} component={CRM} />
    <Route component={() => import("../../components/404")} />
  </Switch>
);

export default IndexPage;
