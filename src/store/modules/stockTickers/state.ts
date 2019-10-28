export interface StockTicker {
  id: number;
  name: string;
  rowVersion: string;
}

export interface StockTickersState {
  stockTickers: StockTicker[];
}
