import AsociarmeQRCode from "../assets/images/qr-code.png";

const ListOfQNA = [
  {
    id: 1,
    question: "Dónde encuentro el QR para asociarme?",
    answer: "Aquí está el QR:",
    image: AsociarmeQRCode,
    alt: `QR para asociarme`,
  },
  {
    id: 2,
    question: "Cómo abonar las cuotas?",
    answer: `Tienes dos opciones:
      A través de transferencia Bancaria Alias:
              PAGO.CUOTA.AMCA (Bco. Santander), O Mercado Pago Alias: PAGO.AMCA.MP.`,
  },
  {
    id: 3,
    question: "Cómo saber el estado de mi membresia?",
    answer: "Si desea conocer el estado de su deuda, escribinos a ",
    href: "amcountry@gmail.com",
  },
];

export default ListOfQNA;
