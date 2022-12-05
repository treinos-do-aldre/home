import { api } from "pages/api/axios"
import { environment } from "@environment";

class Testes {
    static instance: Testes;
    constructor() {
        if (Testes.instance) return Testes.instance;
        Testes.instance = this;
    }

    async customRequest(model: string, method: string, query: string, payload: any): Promise<any> {
        const headers = {
            headers: {
                "Content-Type": "application/json",
            }
        };
        var response;
        switch (method) {
            case "get":
                response = await api.get(`${model}?${query}`, headers);
                break;

            case "post":
                response = await api.post(`${model}`, payload, headers);
                break;

            case "delete":
                response = await api.delete(`${model}?${query}`, headers);
                break;
            default:
                response = {}
                break;
        }
        return response;
    }
}

export default function TestesService() {
    return Testes.instance || new Testes();
}