export interface TravelEntry {
  place: string;
  country: string;
  lat: number;
  lng: number;
  photo: string;
  caption?: string;
}

// Replace these placeholder entries with your real photos and coordinates.
// 1. Drop your photos into /public/travel/ (e.g. tokyo.jpg, paris.jpg)
// 2. Set the photo path relative to public (e.g. "/travel/tokyo.jpg")
// 3. Set lat/lng from Google Maps (right-click a spot, copy coordinates)
// 4. Caption is optional, omit it or leave it out entirely.
export const travel: TravelEntry[] = [
  {
    place: "Tokyo Tower",
    country: "Japan",
    lat: 35.6586,
    lng: 139.7454,
    photo: "/travel/placeholder-1.jpg",
    caption: "First visit to Tokyo",
  },
  {
    place: "Eiffel Tower",
    country: "France",
    lat: 48.8584,
    lng: 2.2945,
    photo: "/travel/placeholder-2.jpg",
    caption: "Summer in Paris",
  },
  {
    place: "Golden Gate Bridge",
    country: "United States",
    lat: 37.8199,
    lng: -122.4783,
    photo: "/travel/placeholder-3.jpg",
  },
];
