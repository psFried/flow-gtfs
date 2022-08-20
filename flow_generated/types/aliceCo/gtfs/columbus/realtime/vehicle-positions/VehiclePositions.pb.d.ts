
// Generated from collection schema aliceCo/gtfs/columbus/realtime/vehicle-positions/VehiclePositions.pb.schema.yaml.
// Referenced from aliceCo/gtfs/columbus/realtime/vehicle-positions/flow.yaml#/collections/aliceCo~1gtfs~1columbus~1realtime~1vehicle-positions~1VehiclePositions.pb.
export type Document = {
    "_meta": {
        file: string;
        offset: number;
    };
    entity: {
        id: string;
        vehicle: {
            position: {
                bearing?: number;
                latitude: number;
                longitude: number;
                speed?: number;
            };
            timestamp: string;
            trip: {
                routeId: string;
                startDate: string;
                tripId: string;
            };
            vehicle: {
                id: string;
                label: string;
            };
        };
    }[];
    header: {
        gtfsRealtimeVersion: string;
        timestamp: string;
    };
};

