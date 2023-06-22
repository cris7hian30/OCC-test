import React from "react";
import StudentCard from "./StudentCard";

const StudentsGrid = ({ students, handleHideStudent }) => {
    
    const handleHide = (id) => {
        handleHideStudent(id);
      };

    return (
        <div className="grid grid-cols-4 gap-6">
            {students.map((student) => (
                <StudentCard key={student.id} student={student} handleHide={handleHide} />
            ))}
        </div>
    );
};

export default StudentsGrid;