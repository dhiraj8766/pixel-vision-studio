// API Configuration - Update these URLs to match your Spring Boot backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

export const API = {
  BASE: API_BASE_URL,
  LOGIN: `${API_BASE_URL}/login`,
  EVENTS: `${API_BASE_URL}/events`,
  EVENTS_NEAREST: `${API_BASE_URL}/events/nearest`,
  TEAM: `${API_BASE_URL}/team`,
  FACULTY: `${API_BASE_URL}/faculty`,
  REGISTRATIONS: `${API_BASE_URL}/registrations`,
};
