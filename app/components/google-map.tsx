"use client"

import { useEffect, useRef } from "react"
import type { google } from "googlemaps"

interface GoogleMapProps {
  center: {
    lat: number
    lng: number
  }
  zoom?: number
  className?: string
}

export default function GoogleMap({ center, zoom = 15, className = "" }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current) return

    // Initialize the map
    const initMap = () => {
      if (!window.google) {
        console.error("Google Maps API not loaded")
        return
      }

      const map = new window.google.maps.Map(mapRef.current!, {
        center,
        zoom,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ color: "#f5f5f5" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
          },
          {
            featureType: "administrative",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }, { weight: 6 }],
          },
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#636363" }],
          },
        ],
      })

      // Add a marker
      new window.google.maps.Marker({
        position: center,
        map,
        title: "会社所在地",
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: "#374151",
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 2,
        },
      })

      mapInstanceRef.current = map
    }

    // Load Google Maps API if not already loaded
    if (!window.google) {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = initMap
      document.head.appendChild(script)
    } else {
      initMap()
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null
      }
    }
  }, [center, zoom])

  return <div ref={mapRef} className={`w-full h-64 rounded-lg ${className}`} style={{ minHeight: "256px" }} />
}

// Fallback component when Google Maps is not available
export function MapFallback({ className = "" }: { className?: string }) {
  return (
    <div className={`h-64 bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
      <div className="text-center text-gray-500">
        <div className="w-8 h-8 mx-auto mb-2">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-sm">地図を読み込んでいます...</p>
        <p className="text-xs">Loading map...</p>
      </div>
    </div>
  )
}
