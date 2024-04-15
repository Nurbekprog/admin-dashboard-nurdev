import axios from "axios";
import {
  ADD_STUDENT,
  DELETE_STUDENT,
  SET_STUDENT,
  EDIT_STUDENT,
  ERROR,
  PENDING,
} from "./studentType";

export const setStudents = (students) => ({
  type: SET_STUDENT,
  payload: students,
});

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: student,
});

export const deleteStudent = (studentId) => ({
  type: DELETE_STUDENT,
  payload: studentId,
});

export const editStudent = (student) => ({
  type: EDIT_STUDENT,
  payload: student,
});

export const error = (error) => ({
  type: ERROR,
  payload: error,
});

export const pending = () => ({
  type: PENDING,
});

export const fetchStudents = () => {
  return async (dispatch) => {
    dispatch(pending());
    try {
      const res = await axios.get("http://localhost:3000/students");
      dispatch(setStudents(res.data));
    } catch (error) {
      dispatch(
        error("Something went wrong, please check the console for details")
      );
    }
  };
};

export const addStudentAsync = (student) => {
  return async (dispatch) => {
    dispatch(pending());
    try {
      const res = await axios.post("http://localhost:3000/students", student);
      dispatch(addStudent(res.data));
    } catch (error) {
      dispatch(
       error("Something went wrong, please check the console for details")
      );
    }
  };
};

export const updateStudentAsync = (student) => {
  return async (dispatch) => {
    dispatch(pending());
    try {
      const res = await axios.put(
        `http://localhost:3000/students/${student.id}`,
        student
      );
      dispatch(updateStudent(res.data));
    } catch (error) {
      dispatch(
        error("Something went wrong, please check the console for details")
      );
    }
  };
};

export const deleteStudentAsync = (id) => {
  return async (dispatch) => {
    dispatch(pending());
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/students/${id}`);
        dispatch(deleteStudent(id));
      } catch (error) {
        dispatch(
          error("Something went wrong, please check the console for details")
        );
      }
    }
  };
};
