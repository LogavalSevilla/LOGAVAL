"use client";

import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
import rawGeoData from "world-atlas/countries-110m.json";

const geoData = rawGeoData as unknown as Parameters<typeof Geographies>[0]["geography"];

type Port = {
  name: string;
  coords: [number, number];
  labelDx?: number;
  labelDy?: number;
  anchor?: "start" | "middle" | "end";
};

const ORIGIN: Port = { name: "Valencia", coords: [-0.38, 39.47] };

const PORTS: Port[] = [
  { name: "Jeddah", coords: [39.19, 21.49] },
  { name: "Jebel Ali", coords: [55.06, 25.01], labelDx: -6, labelDy: -8, anchor: "end" },
  { name: "Doha", coords: [51.53, 25.29], labelDx: -6, labelDy: 16, anchor: "end" },
  { name: "Bahrain", coords: [50.6, 26.2], labelDx: 0, labelDy: -9 },
  { name: "Sohar", coords: [56.71, 24.35], labelDx: 8, labelDy: 4, anchor: "start" },
  { name: "Salalah", coords: [54.09, 17.02] },
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

        {PORTS.map((port) => (
          <Line
            key={port.name}
            from={ORIGIN.coords}
            to={port.coords}
            stroke="#cba54a"
            strokeWidth={1.3}
            strokeDasharray="4 3"
            strokeLinecap="round"
            opacity={0.85}
          />
        ))}

        <Marker coordinates={ORIGIN.coords}>
          <circle r={4.5} fill="#cba54a" stroke="#faf7f1" strokeWidth={1.2} />
          <text
            textAnchor="middle"
            y={-11}
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: 13,
              fontWeight: 700,
              fill: "#faf7f1",
            }}
          >
            Valencia
          </text>
        </Marker>

        {PORTS.map((port) => (
          <Marker key={port.name} coordinates={port.coords}>
            <circle r={3.5} fill="#faf7f1" stroke="#cba54a" strokeWidth={1} />
            <text
              textAnchor={port.anchor ?? "middle"}
              x={port.labelDx ?? 0}
              y={port.labelDy ?? -9}
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 11,
                fontWeight: 600,
                fill: "#faf7f1",
              }}
            >
              {port.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
