
// Generated from collection schema aliceCo/gtfs/columbus/realtime/trip-updates/TripUpdates.pb.schema.yaml.
// Referenced from aliceCo/gtfs/columbus/realtime/trip-updates/flow.yaml#/collections/aliceCo~1gtfs~1columbus~1realtime~1trip-updates~1TripUpdates.pb.
export type Document = {
    "_meta": {
        file: string;
        offset: number;
    };
    entity: {
        id: string;
        tripUpdate: {
            stopTimeUpdate: {
                arrival: {
                    time: string;
                };
                departure: {
                    time: string;
                };
                scheduleRelationship?: string;
                stopId: string;
                stopSequence: number;
            }[];
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

