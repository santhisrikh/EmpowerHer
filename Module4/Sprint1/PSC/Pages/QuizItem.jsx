import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Radio, RadioGroup } from "@/components/ui/radio";
import Results from "./Results";

const QuizItem = (props) => {
	const [selectedOption, setselectedOption] = useState("");
	const [showResult, setShowResult] = useState(false);
	const [feedback, setFeedback] = useState("");
	const { ele } = props;
	// ele : {options:[],question:"ghjk",answer:"correct answer"}
	// console.log(props);
	const handleSelectedOption = (e) => {
		console.log(e.value);
		setselectedOption(e.value);
	};
	const handleShow = () => {
		setShowResult(!showResult);
		// login to show the correct answer
		if (!showResult) {
			if (ele.answer == selectedOption) {
				// ye ur answered correctly the answer is
				setFeedback(`Correct ! The answer is ${ele.answer}`);
			} else {
				setFeedback(`Incorrect ! The correct answer is ${ele.answer}`);

				// in correct option the correct answer would be
			}
		}
	};
	return (
		<Box p={4} borderWidth={"1px"} boxShadow={"md"} bg="whiteAlpha.300" m={4}>
			<Text fontSize={"lg"} fontWeight="bold">
				{" "}
				{ele.id} {ele.question}
			</Text>
			<RadioGroup value={selectedOption} onValueChange={handleSelectedOption}>
				<Stack gap={3}>
					{ele.options.map((option) => (
						<Box
							key={option}
							p={2}
							bg={
								showResult
									? option == ele.answer
										? "green.100"
										: option === selectedOption
										? "red.100"
										: "white"
									: "white"
							}
						>
							<Radio value={option}>{option}</Radio>
						</Box>
					))}
				</Stack>
			</RadioGroup>
			<Button mt={3} colorPalette={"blue"} onClick={handleShow}>
				{showResult ? "Hide Answer" : "Show Answer"}
			</Button>
			{showResult && <Text mt={2}>{feedback}</Text>}
		</Box>
	);
};

export default QuizItem;

// bg

// show result is true
// if option ==corect =>green
// ig option is incorrect u have selected=>red

// showResult
// 	? option == ele.answer
// 		? "green.100"
// 		: option === selectedOption
// 		? "red.100"
// 		: "white"
// 	: "white";

// if(show Results){
//     if(option is correct){
//         show it in green
//     }
//     else{
//         if(you selected){
//             show it in red
//         }
//     }

// }
// else{
//     white
// }

// if(option=correct){
//     bg = "green"
// }
// else{
//     if()
//     i
// }
