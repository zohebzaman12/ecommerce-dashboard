import { atom } from "jotai";

export const productsAtom = atom([
  {
    name: "Nike Air Jordan",
    category: "Shoes",
    brand: "Nike",
    image: "/nike1.webp",
    variants: [
      {
        name: "Size",
        values: ["M", "L", "XL"],
      },
      {
        name: "Color",
        values: ["Black", "White"],
      },
    ],
    combinations: {
      a: {
        name: "M/Black",
        sku: "AJ001",
        quantity: 5,
        inStock: true,
      },
      b: {
        name: "L/White",
        sku: "AJ002",
        quantity: 2,
        inStock: true,
      },
    },
    priceInr: 12000,
    discount: {
      method: "flat",
      value: 1000,
    },
  },
  {
    name: "Nike Dunk Low",
    category: "Shoes",
    brand: "Nike",
    image: "/nike2.webp",
    variants: [
      {
        name: "Size",
        values: ["S", "M", "L"],
      },
      {
        name: "Color",
        values: ["Red", "Blue"],
      },
    ],
    combinations: {
      a: {
        name: "S/Red",
        sku: "DL001",
        quantity: 10,
        inStock: true,
      },
      b: {
        name: "M/Blue",
        sku: "DL002",
        quantity: 0,
        inStock: false,
      },
    },
    priceInr: 8000,
    discount: {
      method: "pct",
      value: 15,
    },
  },
  {
    name: "Nike Dunk 100",
    category: "Shoes",
    brand: "Nike",
    image: "/nike3.webp",
    variants: [
      {
        name: "Size",
        values: ["M", "L"],
      },
      {
        name: "Color",
        values: ["Green", "Yellow"],
      },
    ],
    combinations: {
      a: {
        name: "M/Green",
        sku: "D1001",
        quantity: 3,
        inStock: true,
      },
      b: {
        name: "L/Yellow",
        sku: "D1002",
        quantity: 5,
        inStock: true,
      },
    },
    priceInr: 3000,
    discount: {
      method: "pct",
      value: 10,
    },
  },
  // New T-shirt product 1
  {
    name: "Puma Sports T-shirt",
    category: "Tshirt",
    brand: "Puma",
    image: "/tshirt1.webp",
    variants: [
      {
        name: "Size",
        values: ["S", "M", "L", "XL"],
      },
      {
        name: "Color",
        values: ["Blue", "Gray"],
      },
    ],
    combinations: {
      a: {
        name: "S/Blue",
        sku: "TS001",
        quantity: 12,
        inStock: true,
      },
      b: {
        name: "M/Gray",
        sku: "TS002",
        quantity: 4,
        inStock: true,
      },
    },
    priceInr: 2000,
    discount: {
      method: "flat",
      value: 300,
    },
  },

  {
    name: "Puma Graphic T-shirt",
    category: "Tshirt",
    brand: "Puma",
    image: "/tshirt2.webp",
    variants: [
      {
        name: "Size",
        values: ["M", "L", "XL"],
      },
      {
        name: "Color",
        values: ["Black", "White"],
      },
    ],
    combinations: {
      a: {
        name: "M/Black",
        sku: "GT001",
        quantity: 6,
        inStock: true,
      },
      b: {
        name: "L/White",
        sku: "GT002",
        quantity: 3,
        inStock: true,
      },
    },
    priceInr: 2500,
    discount: {
      method: "pct",
      value: 5,
    },
  },
]);
