import powerbankImg from "../../assets/powerbank.png";

export const powerOptions = [{ label: "Powerbanks", value: "powerbanks" }];

export const typeOptions = [{ label: "Type: All", value: "all" }];

export const sorbByOptions = [
  { label: "Sort by: Low Price", value: "lowPrice" },
  { label: "Sort by: High Price", value: "highPrice" },
];

interface Item {
  img: string;
  duration: number;
  quantity: number;
  price: number;
  priceSymbol: string;
}

export const items: Item[] = [
  { img: powerbankImg, duration: 24, quantity: 89000, price: 18.5, priceSymbol: "CHF" },
  { img: powerbankImg, duration: 12, quantity: 890000, price: 9.5, priceSymbol: "£" },
  { img: powerbankImg, duration: 6, quantity: 8900000, price: 4.5, priceSymbol: "£" },
  { img: powerbankImg, duration: 3, quantity: 89000000, price: 2, priceSymbol: "£" },
];
