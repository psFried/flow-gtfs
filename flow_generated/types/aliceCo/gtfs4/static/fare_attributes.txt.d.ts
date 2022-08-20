
// Generated from collection schema aliceCo/gtfs4/static/fare_attributes.txt.schema.yaml.
// Referenced from aliceCo/gtfs4/static/flow.yaml#/collections/aliceCo~1gtfs4~1static~1fare_attributes.txt.
export type Document = {
    "_meta": {
        file: string;
        offset: number;
    };
    agency_id?: string | null;
    currency_type: string;
    fare_id: string;
    payment_method: string;
    price: string;
    transfer_duration?: string | null;
    transfers: /* this field is always required, but a null value indicates that unlimited transfers are allowed */ string | null;
};

