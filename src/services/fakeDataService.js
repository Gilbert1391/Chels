import haoriJacket from "../img/products/haori-jacket.jpg";
import swingDress from "../img/products/swing-dress.jpg";
import loungeJumpsuit from "../img/products/lounge-jumpsuit.jpg";
import linenTop from "../img/products/linen-top.jpg";
import bricks from "../img/journal/journal-1.jpeg";

export const data = [
  {
    product: "Haori Jacket",
    image: haoriJacket,
    path: "haori-jacket",
    price: "$210.00",
    category: "Outwear",
    description:
      "Sed ornare tellus non lectus blandit faucibus. Curabitur convallis nibh ut libero lobortis ullamcorper. Aliquam ornare risus in orci iaculis egestas. Vivamus varius ipsum eu leo euismod, id fringilla lectus laoreet."
  },
  {
    product: "Swing Dress",
    image: swingDress,
    path: "swing-dress",
    price: "$218.00",
    category: "Dresses+Jumpsuits",
    description:
      "Sed ornare tellus non lectus blandit faucibus. Curabitur convallis nibh ut libero lobortis ullamcorper. Aliquam ornare risus in orci iaculis egestas. Vivamus varius ipsum eu leo euismod, id fringilla lectus laoreet."
  },
  {
    product: "Lounge Jumpsuit",
    image: loungeJumpsuit,
    path: "lounge-jumpsuit",
    price: "$298.00",
    category: "Dresses+Jumpsuits",
    description:
      "Sed ornare tellus non lectus blandit faucibus. Curabitur convallis nibh ut libero lobortis ullamcorper. Aliquam ornare risus in orci iaculis egestas. Vivamus varius ipsum eu leo euismod, id fringilla lectus laoreet."
  },
  {
    product: "Linen Top",
    image: linenTop,
    path: "linen-top",
    price: "$125.00",
    category: "Tops",
    description:
      "Sed ornare tellus non lectus blandit faucibus. Curabitur convallis nibh ut libero lobortis ullamcorper. Aliquam ornare risus in orci iaculis egestas. Vivamus varius ipsum eu leo euismod, id fringilla lectus laoreet."
  }
];

export const categoriesData = [
  { id: 10, category: "Accesories" },
  { id: 11, category: "Bottoms" },
  { id: 12, category: "Dresses + Jumpsuits" },
  { id: 13, category: "Outwear" },
  { id: 14, category: "Tops" },
  { id: 15, category: "- Sale" }
];

export const journalData = [
  {
    image: bricks,
    author: "Michelle Liv",
    date: "October 9, 2015",
    title: "New York",
    id: 1
  },
  {
    image: bricks,
    author: "Michelle Liv",
    date: "September 2, 2015",
    title: "Natural Textures",
    id: 2
  },
  {
    image: bricks,
    author: "Michelle Liv",
    date: "August 14, 2015",
    title: "Sea",
    id: 3
  }
];
