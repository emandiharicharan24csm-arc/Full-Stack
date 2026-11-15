// ============================================
// API SERVICE (Axios Client)
// Connects React frontend to Express backend API.
//
// In Vite:
//   import.meta.env.VITE_API_URL reads from .env
//   If not found, it falls back to http://localhost:5000/api/students
// ============================================

import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/students';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// CRUD API calls:
export const getAllStudents = () => api.get('/');
export const getStudentById = (id) => api.get(`/${id}`);
export const createStudent = (studentData) => api.post('/', studentData);
export const updateStudent = (id, studentData) => api.put(`/${id}`, studentData);
export const deleteStudent = (id) => api.delete(`/${id}`);

export default api;
