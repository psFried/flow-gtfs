
// Generated from collection schema aliceCo/gtfs4/static/stop_times.txt.schema.yaml.
// Referenced from aliceCo/gtfs4/static/flow.yaml#/collections/aliceCo~1gtfs4~1static~1stop_times.txt.
export type Document = {
    "_meta": {
        file: string;
        offset: number;
    };
    arrival_time?: string | null;
    departure_time?: string | null;
    drop_off_type?: string | null;
    pickup_type?: string | null;
    shape_dist_traveled?: string | null;
    stop_headsign?: string | null;
    stop_id: string;
    stop_sequence: string;
    timepoint?: string | null;
    trip_id: string;
};

