import React from "react";

const API_URL = 'https://hp-api.onrender.com/api/characters';

export const fetchStudents = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener los estudiantes de Hogwarts');
  }
};
