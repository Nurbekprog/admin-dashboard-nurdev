import {
  SET_STUDENTS,
  ADD_STUDENT,
  EDIT_STUDENT,
  DELETE_STUDENT,
  ERROR,
  PENDING,
} from "./types";

const initialState = {
  students: [],
  teachers: [],
  loading: false,
  error: null,
};

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return {
        ...state,
        students: action.payload,
        loading: false,
      };
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
        loading: false,
      };
    case EDIT_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
        loading: false,
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export default studentsReducer;
