import axios from "./axios";

export const getTasksRequest = async () => axios.get("https://parcial2back-theta.vercel.app/tasks");

export const createTaskRequest = async (task) => axios.post("https://parcial2back-theta.vercel.app/auth/logintasks", task);

export const updateTaskRequest = async (task) =>
  axios.put(`https://parcial2back-theta.vercel.app/auth/login/tasks/${task._id}`, task);

export const deleteTaskRequest = async (id) => axios.delete(`https://parcial2back-theta.vercel.app/auth/login/tasks/${id}`);

export const getTaskRequest = async (id) => axios.get(`https://parcial2back-theta.vercel.app/auth/login/tasks/${id}`);
