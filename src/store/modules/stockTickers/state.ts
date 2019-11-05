export interface StockTicker {
  id: string;
  name: string;
  rowVersion: string;
}

export interface StockTickersState {
  stockTickers: StockTicker[];
}
