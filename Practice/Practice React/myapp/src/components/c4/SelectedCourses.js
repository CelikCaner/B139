import React from "react";
import kurslar from "../../assets/data/students.json";

const SelectedCourses = () => {
  //!selectin icine kurslari tekrarsiz sekilde ekleyelim

  return (
    <div>
      <select>
        {kurslar
          .reduce((values, student) => {
            if (!values.includes(student.kurs)) values.push(student.kurs);
            return values;
          }, [])
          .map((item, index) => (
            <option key={index}>{item} </option>
          ))}
      </select>
    </div>
  );
};

export default SelectedCourses;
