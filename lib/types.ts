export type Edition = {
  name: string;
  priceJpy: number | null;
  url: string;
  note?: string;
};

export type Daw = {
  id: string;
  name: string;
  vendor: string;
  productUrl: string;
  editions: Edition[];
  fetchedAt: string;
  error?: string;
};

export type PricesFile = {
  updatedAt: string;
  daws: Daw[];
};
