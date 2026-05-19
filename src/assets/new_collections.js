// personalCareData.js
import colgate from "./colgate.jpg";
import parachutecoconutoil from "./parachutecoconutoil.jpg";
import oralbrush from "./oralbrush.avif";
import niveabodylotion from "./niveabodylotion.jpg";
import himayalaneem from "./himalayaneemfacewash.jpg";
import Headandshoulders from "./Headandshoulders.jpg";
import Dovebody from "./Dovebodywash.jpg";
import DettolSoap3 from "./DettolSoap3.jpg";
import lifebuoyhand from "./lifebouyhand.jpeg";
import vaselinepetroleumjelly from "./vaselinepetroleumjelly.webp";
import p1_img from "./Rice.jpg";
import p2_img from "./Milk.webp";
import p3_img from "./Potatoes.jpg";
import p4_img from "./Onions.jpg";

const personalCareData = [
  {
    id: 1,
    name: "Rice",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  { id: 2, name: "Milk", image: p2_img, new_price: 85.0, old_price: 120.5 },
  { id: 3, name: "Potatoes", image: p3_img, new_price: 60.0, old_price: 100.5 },
  { id: 4, name: "Onions", image: p4_img, new_price: 100.0, old_price: 150.0 },
  {
    id: 5,
    name: "Dettol Soap (Pack of 3)",
    image: DettolSoap3,
    new_price: "99",
    old_price: "120",
  },
  {
    id: 6,
    name: "Dove Body Wash",
    image: Dovebody,
    new_price: "249",
    old_price: "299",
  },
  {
    id: 7,
    name: "Head & Shoulders Shampoo (180ml)",
    image: Headandshoulders,
    new_price: "160",
    old_price: "190",
  },
  {
    id: 8,
    name: "Colgate Toothpaste (200g)",
    image: colgate,
    new_price: "85",
    old_price: "99",
  },
  {
    id: 9,
    name: "Oral-B Toothbrush (Pack of 2)",
    image: oralbrush,
    new_price: "120",
    old_price: "150",
  },
  {
    id: 10,
    name: "Himalaya Neem Face Wash (150ml)",
    image: himayalaneem,
    new_price: "140",
    old_price: "165",
  },
  {
    id: 11,
    name: "Nivea Body Lotion (400ml)",
    image: niveabodylotion,
    new_price: "310",
    old_price: "360",
  },
  {
    id: 12,
    name: "Parachute Coconut Hair Oil (250ml)",
    image: parachutecoconutoil,
    new_price: "95",
    old_price: "110",
  },
  {
    id: 13,
    name: "Vaseline Petroleum Jelly (250ml)",
    image: vaselinepetroleumjelly,
    new_price: "180",
    old_price: "210",
  },
  {
    id: 14,
    name: "Lifebuoy Hand Sanitizer (500ml)",
    image: lifebuoyhand,
    new_price: "230",
    old_price: "260",
  },
];

export default personalCareData;
