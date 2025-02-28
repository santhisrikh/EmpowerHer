import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteItem from "./NoteItem";
import { fetchNotes } from "../redux/reducers/notesReducer";
import "../styles/NoteList.css"; // Import CSS file

const NoteList = () => {
	const dispatch = useDispatch();
	const notes = useSelector((state) => state.notes.notes); // redux store

	useEffect(() => {
		dispatch(fetchNotes());
	}, [dispatch]);

	return (
		<div className="note-list">
			{notes.length > 0 ? (
				notes.map((note) => <NoteItem key={note.id} note={note} />)
			) : (
				<p className="no-notes">
					No notes available. Add a note to get started!
				</p>
			)}
		</div>
	);
};

export default NoteList;
