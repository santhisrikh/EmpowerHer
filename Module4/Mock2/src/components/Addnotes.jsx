import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/reducers/notesReducer";
import "../styles/AddNote.css"; // Import CSS file

const AddNote = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);

	const handleSubmit = () => {
		if (text.trim()) {
			dispatch(addNote({ text, userId: user.uid, timestamp: Date.now() }));
			setText("");
		}
	};

	return (
		<div className="add-note-container">
			<input
				className="add-note-input"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Add a note..."
			/>
			<button className="add-note-button" onClick={handleSubmit}>
				Add
			</button>
		</div>
	);
};

export default AddNote;
