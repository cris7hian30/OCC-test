import React from "react";
import { Button } from "../Button";

const StudentCard = ({ student, key }) => {

    return (
        <div class="card w-50 bg-base-100 shadow-xl" key={key}>
            <figure class="px-10 pt-10">
                <div className="h-28 w-28 object-cover rounded-md">
                    <img src={student.image ? student.image : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg'} alt={student.name} class="rounded-xl" />
                </div>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{student.name ? student.name : <span className="italic">-----------</span>}</h2>
                <p className="capitalize">{student.species ? student.species : <span className="italic">-----------</span>}</p>
                <p><span className="font-bold">Patronus: </span>{student.patronus ? student.patronus : <span className="italic">-----------</span>}</p>
                <p><span className="font-bold">Casa: </span>{student.house ? student.house : <span className="italic">-----------</span>}</p>
                <div class="card-actions" className="pt-2">
                    <Button onClick={() => handleHide(student.id)}>Ocultar</Button>
                </div>
            </div>
        </div>
        );
}

export default StudentCard;