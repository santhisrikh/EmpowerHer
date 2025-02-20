import "@testing-library/jest-dom";
import Counter from "./Counter";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe } from "vitest";

describe("Counter Component", () => {
	let incrementBtn, resetBtn, decrementBtn;
	beforeEach(() => {
		render(<Counter />);
		incrementBtn = screen.getByTestId("inc_btn");
		decrementBtn = screen.getByTestId("dec_btn");
		resetBtn = screen.getByText("Reset");
	});

	test("render Counter with initialValue", () => {
		// asserition
		expect(screen.getByText("Counter:0")).toBeInTheDocument();
	});

	test("increment Counter when increment button is clicked", () => {
		fireEvent.click(incrementBtn);
		expect(screen.getByText("Counter:1")).toBeInTheDocument();
		fireEvent.click(incrementBtn);
		expect(screen.getByText("Counter:2")).toBeInTheDocument();
		fireEvent.click(incrementBtn);
		expect(screen.getByText("Counter:3")).toBeInTheDocument();
	});
	test("Reset button should reset the count to 0", () => {
		fireEvent.click(incrementBtn);
		fireEvent.click(resetBtn);
		expect(screen.getByText("Counter:0")).toBeInTheDocument();
	});
	test("counter should n't go beyond 0", () => {
		fireEvent.click(decrementBtn);
		expect(screen.getByText("Counter:0")).toBeInTheDocument();
	});
	test.only("intiial value should be 0", () => {
		expect(screen.getByTestId("count").textContent).toBe("0");
	});
});
