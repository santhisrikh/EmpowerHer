import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { beforeEach, describe, expect } from "vitest";
import TodoApp from "./TodoApp";
describe("TodoApp Component", () => {
	let addBtn;
	beforeEach(() => {
		render(<TodoApp />);
		addBtn = screen.getByText("Add Task");
	});
	test("render the Todo App correctly", () => {
		expect(screen.getByText("Todo App")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Enter a task")).toBeInTheDocument();
		expect(screen.getByText("Add Task")).toBeInTheDocument();
	});
	test("adds a new task seccesfully", () => {
		const input = screen.getByPlaceholderText("Enter a task");
		fireEvent.change(input, { target: { value: "Learn Vitest" } });
		fireEvent.click(addBtn);
		expect(screen.getByText("Learn Vitest")).toBeInTheDocument();
	});
	test("Shouldn't add an empty task to the list", () => {
		const input = screen.getByPlaceholderText("Enter a task");
		fireEvent.change(input, { target: { value: "Learn Vitest" } });
		fireEvent.click(addBtn);

		const tasks = screen.getAllByRole("listitem");
		expect(tasks.length).toBe(1);
		fireEvent.click(addBtn); // an empty string is not added to the list items
		expect(tasks.length).toBe(1);
	});
});
