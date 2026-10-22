"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function StudentChapterMap({ chapters, onChapterClick }: { chapters: any[], onChapterClick: (chapter: any) => void }) {
  return (
    <div className="w-full h-[500px] md:h-[600px] bg-white border border-[#1E1B1D]/15 p-2 md:p-3 relative z-0">
      <div className="w-full h-full border border-[#1E1B1D]/10 overflow-hidden">
        <MapContainer 
          center={[53.5, -2.5]} 
          zoom={6} 
          scrollWheelZoom={false} 
          className="w-full h-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {chapters.map((chapter, i) => (
            chapter.lat && chapter.lng ? (
              <CircleMarker
                key={i}
                center={[chapter.lat, chapter.lng]}
                radius={8}
                pathOptions={{ 
                  color: '#ffffff', 
                  fillColor: '#D45995', 
                  fillOpacity: 1, 
                  weight: 2 
                }}
              >
                <Popup className="square-popup">
                  <div className="font-sans text-center min-w-[140px] p-2">
                    <h3 className="font-extrabold text-[#D45995] text-base leading-tight mb-1">{chapter.city}</h3>
                    <p className="font-medium text-[#1E1B1D] text-xs leading-tight mb-3">{chapter.university}</p>
                    <button 
                      onClick={(e) => { e.preventDefault(); onChapterClick(chapter); }}
                      className="bg-[#1E1B1D] text-white text-[11px] font-bold px-4 py-2 hover:bg-[#D45995] transition-colors w-full cursor-pointer uppercase tracking-widest"
                    >
                      View Chapter
                    </button>
                  </div>
                </Popup>
              </CircleMarker>
            ) : null
          ))}
        </MapContainer>
      </div>

      {/* Global styles for leaflet popup to match clean editorial aesthetic */}
      <style jsx global>{`
        .leaflet-popup-content-wrapper {
          background: #ffffff !important;
          border-radius: 0px !important;
          border: 1px solid rgba(30, 27, 29, 0.2) !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1) !important;
          padding: 0 !important;
        }
        .leaflet-popup-tip {
          background: #ffffff !important;
          border: 1px solid rgba(30, 27, 29, 0.2) !important;
          box-shadow: none !important;
        }
        .leaflet-popup-content {
          margin: 12px 16px !important;
        }
        .leaflet-container a.leaflet-popup-close-button {
          color: #1E1B1D !important;
          top: 6px !important;
          right: 6px !important;
        }
        .leaflet-control-zoom {
          border: 1px solid rgba(30, 27, 29, 0.2) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05) !important;
          border-radius: 0px !important;
          overflow: hidden !important;
        }
        .leaflet-control-zoom a {
          background-color: #ffffff !important;
          color: #1E1B1D !important;
          border-radius: 0px !important;
          border-bottom: 1px solid rgba(30, 27, 29, 0.1) !important;
        }
        .leaflet-control-zoom a:hover {
          background-color: #F1EEF4 !important;
          color: #D45995 !important;
        }
      `}</style>
    </div>
  );
}
