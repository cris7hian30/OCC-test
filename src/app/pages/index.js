import React, { useState, useEffect } from "react";
import FilterByName from "../components/FilterByName";
import FilterByHouse from "../components/FilterbyHouse";
import StudentTable from "../components/StudentTable";
import { Button } from "../components/Button";
import { fetchStudents } from "../utils/api";

/**
 * Homepage de la aplicación
 */
const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false); // Nuevo estado para controlar si los datos han sido cargados

  useEffect(() => {
    // Cargar datos de estudiantes al montar el componente
    const fetchData = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data);
        setFilteredStudents(data); // Se usa como punto de control para las acciones de filtrado por el usuario
        setLoading(false);
        setDataLoaded(true); // Carga todos los datos recibidos por la API
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterByName = (e) => {
    // Se usa para hacer un filtro automatico de las coincidencias al escribir en el input
    const value = e.target.value || "";
    setFilterName(value);

    const filtered = students.filter((student) =>
      student.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  const handleFilterByHouse = (house) => {
    // Filtro de las casas
    setFilterHouse(house);

    if (house === "") {
      setFilteredStudents(students); // Default todas las casas
    } else {
      const filtered = students.filter(
        (student) => student.house.toLowerCase() === house.toLowerCase()
      );
      setFilteredStudents(filtered);
    }
  };

  const handleClearList = () => {
    // Limpia la lista de estudiantes ocultos y filtros
    setFilteredStudents([]);
    setFilterName("");
    setFilterHouse("");
  };

  const handleShowFullList = async () => {
    // Muestra la lista completa de estudiantes nuevamente
    setLoading(true);
    setFilterName("");
    setFilterHouse("");

    try {
      const data = await fetchStudents();
      setStudents(data);
      setFilteredStudents(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleHideStudent = (id) => {
    // Ocultar un estudiante específico de la lista o mejor dicho lo elimina para que cargue cuando se muestren todos de nuevo
    const updatedStudents = filteredStudents.filter(
      (student) => student.id !== id
    );
    setFilteredStudents(updatedStudents);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 uppercase">
        Personajes de Harry Potter
      </h1>
      <div className="flex justify-between mb-4">
        <FilterByName
          filterName={filterName}
          setFilterName={setFilterName}
          handleFilterByName={handleFilterByName}
        />

        <FilterByHouse
          filterHouse={filterHouse}
          setFilterHouse={setFilterHouse}
          handleFilterByHouse={handleFilterByHouse}
        />

        <div className="space-x-4">
          <Button onClick={handleClearList}>Limpiar lista</Button>
          <Button onClick={handleShowFullList}>Mostrar lista completa</Button>
        </div>
      </div>

      {loading ? (
        <p className="text-center mt-8">Cargando...</p>
      ) : dataLoaded && filteredStudents.length === 0 ? (
        <p className="text-center mt-8">No hay información por mostrar...</p>
      ) : (
        <StudentTable
          students={filteredStudents}
          handleHideStudent={handleHideStudent}
        />
      )}
    </div>
  );
};

export default HomePage;
