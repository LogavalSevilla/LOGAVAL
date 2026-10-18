"use client";

import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
import rawGeoData from "world-atlas/countries-110m.json";

const geoData = rawGeoData as unknown as Parameters<typeof Geographies>[0]["geography"];

type Coords = [number, number];

// Origin, then the maritime route: Mediterranean -> Suez Canal -> Red Sea (call at
// Jeddah) -> Bab-el-Mandeb -> around the Arabian Sea coast (calls at Salalah, Sohar)
// -> Strait of Hormuz -> into the Gulf (calls at Dubai, Doha, Bahrain, Kuwait).
const ROUTE: Coords[] = [
  [-0.38, 39.47], // Valencia
  [4, 38],
  [14, 35],
  [24, 33],
  [31, 32],
  [32.31, 31.26], // Port Said / Suez Canal (north)
  [32.55, 29.97], // Suez (canal south exit)
  [36, 25],
  [39.19, 21.49], // Jeddah
  [41.5, 17],
  [43.4, 12.6], // Bab-el-Mandeb
  [47, 12.5],
  [52, 14.5],
  [54.09, 17.02], // Salalah
  [55.7, 17.9],
  [57.4, 19.2],
  [58.9, 20.5], // off Masirah Island
  [59.8, 22.4], // Ras al Hadd (easternmost point, rounding the corner)
  [58.6, 23.5], // off Muscat
  [57.4, 24.1],
  [56.71, 24.35], // Sohar
  [56.3, 26.6], // Strait of Hormuz
  [55.27, 25.2], // Dubai
  [51.6, 26],
  [51.53, 25.29], // Doha
  [50.6, 26.2], // Bahrain
  [47.98, 29.37], // Kuwait
];

type Stop = {
  name: string;
  coords: Coords;
  origin?: boolean;
  labelDx?: number;
  labelDy?: number;
  anchor?: "start" | "middle" | "end";
};

const STOPS: Stop[] = [
  { name: "Valencia", coords: [-0.38, 39.47], origin: true },
  { name: "Jeddah", coords: [39.19, 21.49] },
  { name: "Salalah", coords: [54.09, 17.02] },
  { name: "Sohar", coords: [56.71, 24.35], labelDx: 8, labelDy: 4, anchor: "start" },
  { name: "Dubai", coords: [55.27, 25.2], labelDx: -6, labelDy: -8, anchor: "end" },
  { name: "Doha", coords: [51.53, 25.29], labelDx: -6, labelDy: 16, anchor: "end" },
  { name: "Bahrain", coords: [50.6, 26.2], labelDx: 0, labelDy: -9 },
  { name: "Kuwait", coords: [47.98, 29.37] },
];

export default function RoutesMap() {
  return (
    <div className="overflow-hidden rounded-sm bg-cream/5">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [28, 27], scale: 620 }}
        width={800}
        height={660}
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(250,247,241,0.14)"
                stroke="rgba(250,247,241,0.35)"
                strokeWidth={0.6}
                style={{ outline: "none" }}
              />
            ))
          }
        </Geographies>

        <Line
          coordinates={ROUTE}
          stroke="#cba54a"
          strokeWidth={1.4}
          strokeDasharray="4 3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.9}
        />

        {STOPS.map((stop) => (
          <Marker key={stop.name} coordinates={stop.coords}>
            <circle
              r={stop.origin ? 4.5 : 3.5}
              fill={stop.origin ? "#cba54a" : "#faf7f1"}
              stroke={stop.origin ? "#faf7f1" : "#cba54a"}
              strokeWidth={stop.origin ? 1.2 : 1}
            />
            <text
              textAnchor={stop.anchor ?? "middle"}
              x={stop.labelDx ?? 0}
              y={stop.labelDy ?? (stop.origin ? -11 : -9)}
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: stop.origin ? 13 : 11,
                fontWeight: stop.origin ? 700 : 600,
                fill: "#faf7f1",
              }}
            >
              {stop.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
