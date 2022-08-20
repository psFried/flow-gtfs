
// Generated from collection schema aliceCo/gtfs/columbus/realtime/alerts/Alerts.pb.schema.yaml.
// Referenced from aliceCo/gtfs/columbus/realtime/alerts/flow.yaml#/collections/aliceCo~1gtfs~1columbus~1realtime~1alerts~1Alerts.pb.
export type Document = {
    "_meta": {
        file: string;
        offset: number;
    };
    entity: {
        alert: {
            activePeriod: {
                end: string;
                start: string;
            }[];
            descriptionText: {
                translation: {
                    language: string;
                    text: string;
                }[];
            };
            effect?: string;
            headerText: {
                translation: {
                    language: string;
                    text: string;
                }[];
            };
            informedEntity: {
                agencyId?: string;
                routeId?: string;
                stopId?: string;
            }[];
        };
        id: string;
    }[];
    header: {
        gtfsRealtimeVersion: string;
        timestamp: string;
    };
};

