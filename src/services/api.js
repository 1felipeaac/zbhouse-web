// @ts-nocheck
import axios from 'axios'

export const api = axios.create({
    // baseURL: "http://localhost:8080",
    baseURL: "https://reservaszbhouse-production.up.railway.app",
    withCredentials: true,
    
})

export function configHeaders(token) {
    return {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:5173',
      Authorization: `Bearer ${token}`,
    }
  }
  

