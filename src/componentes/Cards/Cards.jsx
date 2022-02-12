import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../helpers/urlBack";
import {
  CardIzquierda,
  cardsStyle as Card,
  DivInterno,
  Feature,
  H4,
  Img,
  InnerCardDerecha,
  InnerCardIzquierda,
  NewFeature,
  NombreEmpresa,
  Tag,
  TimeTipeWhere,
} from "../../styles/style";

export let filterData;
const Cards = () => {
  const [dataBusqueda, setDataBusqueda] = useState([]);
  const [dataTrabajo, setDataTrabajo] = useState([]);

  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        setDataTrabajo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clickFilter = (tag) => {
    let stringBusqueda = dataBusqueda.filter((e) => e !== tag);

    stringBusqueda.push(tag);

    setDataBusqueda(stringBusqueda);
        
  };


  const drawData = (array) =>
    array.map((e) => (
      // , , e.features, e.name, e.dataPublished, , , e.tags, e.imagen} = e
      <Card key={e.id}>
        <CardIzquierda id="left">
          <Img src={e.imagen} width="50" height="50" alt=""></Img>
          <InnerCardIzquierda id="internLeft">
            <DivInterno id="top">
              <NombreEmpresa>{e.business}</NombreEmpresa>
              {e.isNew === "true" && <NewFeature>NEW!</NewFeature>}
              {e.isFeatured === "true" && <Feature>FEATURED</Feature>}
            </DivInterno>
            <DivInterno id="middle">
              <H4>{e.name}</H4>
            </DivInterno>
            <DivInterno id="bottom">
              <TimeTipeWhere>{e.datePublished}-</TimeTipeWhere>
              <TimeTipeWhere>{e.tipeOfWork}-</TimeTipeWhere>
              <TimeTipeWhere>{e.where}</TimeTipeWhere>
            </DivInterno>
          </InnerCardIzquierda>
        </CardIzquierda>
        <InnerCardDerecha id="right">
          {e.tags.map((e) => (
            <Tag key={e} onClick={() => clickFilter(e)}>
              {e}
            </Tag>
          ))}
        </InnerCardDerecha>
      </Card>
    ));

  useEffect(() => {
    getData();
   
  }, []);
  return <>{drawData(dataTrabajo)}</>;
};

export default Cards;
