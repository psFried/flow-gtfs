# General Transit Feed data for Columbus, OH

This repo houses a Flow catalog that ingests both static and realtime [GTFS data](https://gtfs.org/) from the Central Ohio Transit Authority (COTA) on their municipal busses. This was built in order to demonstrate Flow's ability to work with realtime data.

GTFS defines two separate data formats, a "schedule" feed contains relatively slow-changing information about a transit system, such as the routes, stops, and timetables. This data is provided as a collection of CSV files inside of a zip archive, which is fetched periodially.

There are also three separate realtime feeds, providing information on vehicle positions, trip updates (delays), and service alerts (stop moved). Each of these feeds an HTTP endpoint which is polled to provide the latest state as a protobuf message.


### Capturing the schedule feed

The schedule feed is [documented here](https://gtfs.org/schedule/).

To capture the static feed, I built a `source-gtfs` connector which fetches the zip file and outputs the data for each contained file as a separate source stream. Thus there's a binding for each file in the zip archive to a separate Flow collection of that type. The connector can handle any zip archive with parseable files in it, so it's not necessarily specific to GTFS data. The intention is to polish up the connector a bit and either publish it as a `source-http-zip-archive` connector, or else incorporate the functionality into the existing `source-http-file` connector.

### Capturing the realtime feed

The realtime data is [documented here](https://gtfs.org/realtime/), and I've also included the [protobuf definition file](gtfs-realtime.proto) for reference.

To capture the realtime feed, I used the `source-http-file` connector with a short (30 second) interval. There's a capture each for trip-updates, alerts, and vehicle-positions. I added support for protobuf messages to `flow-parser` to enable it to parse the responses. Protobuf encoding is common enough that it made sense to support it in our parser, anyway.

## What's happening with the captured data?

For now, it's simply made available as public Flow collections. Feel free to use it for whatever you want, as long as it complies with [COTA's terms of use](https://www.cota.com/data/).

I'd originally intended on putting together derivations to join the static and realtime data and create
a data product tracking the routes and stops with the most frequent delays. I may still finish that
as I find the time.

