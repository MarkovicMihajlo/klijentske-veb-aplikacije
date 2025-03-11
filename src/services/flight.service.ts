import axios from 'axios';

const client = axios.create({
    baseURL: 'https://flight.pequla.com/api',
    headers: {
        'Accept': 'application/json',
        'X-Client-Name': 'KVA/2025'
    },
    validateStatus: (status: number) => {
        return status === 200
    }
})

export class FlightService{

    static async getFlights(page : number = 0, size : number = 10){

        return client.request({
            url: '/flight',
            method: 'GET',
            params:{
                'page': page,
                'size': size,
                'sort': 'scheduledAt,asc',
                'type': 'departure'
            }
        })

    }

    static async getFlightById(id : number){
        return client.get(`/flight/${id}`)
    }

    static async getDestinations(){
        return client.get('/flight/destination')
    }

}