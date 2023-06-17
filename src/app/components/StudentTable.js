import React from "react";
import { Button } from "./Button";

const StudentTable = ({ students, handleHideStudent }) => {
  const handleHide = (id) => {
    handleHideStudent(id);
  };

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="py-2">Fotografía</th>
          <th className="py-2">Nombre</th>
          <th className="py-2">Especie</th>
          <th className="py-2">Casa</th>
          <th className="py-2">Patronus</th>
          <th className="py-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id} className={student.hidden ? "hidden" : ""}>
            <td className="py-2 text-center">
              {student.image ? (
                <img
                  src={student.image}
                  alt={student.name}
                  className="h-16 w-16 object-cover mx-auto"
                />
              ) : (
                <img
                  src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
                  alt={student.name}
                  className="h-16 w-16 object-cover mx-auto"
                />
              )}
            </td>
            <td className="py-2 text-center">
              {student.name ? (
                student.name
              ) : (
                <span className="italic">-----------</span>
              )}
            </td>
            <td className="py-2 text-center">
              {student.species ? (
                student.species
              ) : (
                <span className="italic">-----------</span>
              )}
            </td>
            <td className="py-2 text-center">
              {student.house ? (
                student.house
              ) : (
                <span className="italic">-----------</span>
              )}
            </td>
            <td className="py-2 text-center">
              {student.patronus ? (
                student.patronus
              ) : (
                <span className="italic">-----------</span>
              )}
            </td>
            <td className="py-2 text-center">
              <Button onClick={() => handleHide(student.id)}>Ocultar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
