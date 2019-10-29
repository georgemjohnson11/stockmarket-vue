import { StockTickerModel } from './models/stockTicker-model';

export interface StockTickersEndpoint {
    getAll(): Promise<StockTickerModel[]>;
    getById(id: number): Promise<StockTickerModel>;
    add(stockTicker: StockTickerModel): Promise<StockTickerModel>;
    update(stockTicker: StockTickerModel): Promise<StockTickerModel>;
    remove(id: number): Promise<void>;
}