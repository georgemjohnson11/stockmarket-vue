import { StockTickersEndpoint } from './stockTickers-endpoint';
import axios, { AxiosRequestConfig } from 'axios';
import { StockTickerModel } from './models/stockTicker-model';
import { BaseService } from '../base-service';

// TODO: handle eventual errors

export class StockTickersService extends BaseService implements StockTickersEndpoint {
    private readonly baseUrl: string = '/api/stocktickers';

    public async getAll(): Promise<StockTickerModel[]> {
        const response = await axios.get(this.baseUrl);
        return response.data;
    }

    public async getById(id: string): Promise<StockTickerModel> {
        const response = await axios.get(`${this.baseUrl}/${id}`);
        return response.data;
    }

    public async add(stockTicker: StockTickerModel): Promise<StockTickerModel> {
        const response = await axios.post(this.baseUrl, stockTicker, this.getAxiosConfig());
        return response.data;
    }

    public async update(stockTicker: StockTickerModel): Promise<StockTickerModel> {
        const response = await axios.put(`${this.baseUrl}/${stockTicker.id}`, stockTicker);
        return response.data;
    }

    public async remove(id: string): Promise<void> {
        const response = await axios.delete(`${this.baseUrl}/${id}`);
    }
}
