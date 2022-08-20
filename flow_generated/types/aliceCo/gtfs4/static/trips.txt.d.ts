
// Generated from collection schema aliceCo/gtfs4/static/trips.txt.schema.yaml.
// Referenced from aliceCo/gtfs4/static/flow.yaml#/collections/aliceCo~1gtfs4~1static~1trips.txt.
export type Document = {
    "_meta": {
        file: string;
        offset: number;
    };
    bikes_allowed?: string | null;
    block_id?: string | null;
    direction_id?: string | null;
    route_id: string;
    service_id: string;
    shape_id?: string | null;
    trip_headsign?: string | null;
    trip_id: string;
    trip_short_name: string | null;
    wheelchair_accessible: string | null;
};

