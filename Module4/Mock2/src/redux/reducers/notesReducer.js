import axios from "axios";
import { DATABASE_URL } from "../../firebase/firebaseconfig";
// import { DATABASE } from "../firebase/firebaseConfig";

// Action Types
const SET_NOTES = "SET_NOTES";
const ADD_NOTE = "ADD_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";
const DELETE_NOTE = "DELETE_NOTE";

// Initial State
const initialState = {
	notes: [],
};

// Action Creators
export const fetchNotes = () => async (dispatch) => {
	try {
		const response = await axios.get(`${DATABASE_URL}/notes.json`);
		console.log(response.data);
		const notesData = response.data
			? Object.keys(response.data).map((key) => ({
					id: key,
					...response.data[key],
			  }))
			: [];
		console.log(notesData, "notesData");
		dispatch({ type: SET_NOTES, payload: notesData });
	} catch (error) {
		console.error("Error fetching notes:", error);
	}
};

export const addNote = (note) => async (dispatch) => {
	try {
		const response = await axios.post(`${DATABASE_URL}/notes.json`, note);
		const newNote = { id: response.data.name, ...note };
		dispatch({ type: ADD_NOTE, payload: newNote });
	} catch (error) {
		console.error("Error adding note:", error);
	}
};

export const updateNote = (noteId, updatedText) => async (dispatch) => {
	try {
		await axios.patch(`${DATABASE_URL}/notes/${noteId}.json`, {
			text: updatedText,
		});
		dispatch({ type: UPDATE_NOTE, payload: { id: noteId, text: updatedText } });
	} catch (error) {
		console.error("Error updating note:", error);
	}
};

export const deleteNote = (id) => async (dispatch) => {
	try {
		await axios.delete(`${DATABASE_URL}/notes/${id}.json`);
		dispatch({ type: DELETE_NOTE, payload: id });
	} catch (error) {
		console.error("Error deleting note:", error);
	}
};

// Reducer
export default function notesReducer(state = initialState, action) {
	switch (action.type) {
		case SET_NOTES:
			return { ...state, notes: action.payload };
		case ADD_NOTE:
			return { ...state, notes: [...state.notes, action.payload] };
		case UPDATE_NOTE:
			return {
				...state,
				notes: state.notes.map((note) =>
					note.id === action.payload.id
						? { ...note, text: action.payload.text }
						: note,
				),
			};
		case DELETE_NOTE:
			return {
				...state,
				notes: state.notes.filter((note) => note.id !== action.payload),
			};
		default:
			return state;
	}
}
