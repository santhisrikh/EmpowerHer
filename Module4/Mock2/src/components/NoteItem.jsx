import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../redux/reducers/notesReducer";
import "../styles/NoteItem.css"; // Import CSS file

const NoteItem = ({ note }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newText, setNewText] = useState(note.text);
	const dispatch = useDispatch();

	// Convert timestamp to a readable format
	const formattedDate = new Date(note.timestamp).toLocaleString();

	const handleUpdate = () => {
		dispatch(updateNote(note.id, newText));
		setIsEditing(false);
	};

	return (
		<div className="note-item">
			{isEditing ? (
				<>
					<input
						className="note-input"
						value={newText}
						onChange={(e) => setNewText(e.target.value)}
					/>
					<button className="save-button" onClick={handleUpdate}>
						Save
					</button>
				</>
			) : (
				<>
					<p className="note-text">{note.text}</p>
					<p className="note-timestamp">🕒 {formattedDate}</p>{" "}
					{/* Display timestamp */}
					<div className="note-actions">
						<button className="edit-button" onClick={() => setIsEditing(true)}>
							Edit
						</button>
						<button
							className="delete-button"
							onClick={() => dispatch(deleteNote(note.id))}
						>
							Delete
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default NoteItem;
