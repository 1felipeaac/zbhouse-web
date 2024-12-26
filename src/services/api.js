// @ts-nocheck
import axios from 'axios'
import {BASE_URL} from "../config/index"

export const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    
})

export function configHeaders(token) {
    return {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:5173',
      Authorization: `Bearer ${token}`,
    }
  }
  

