import React, { useEffect, useState } from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import axios from "axios";
import QuizItem from "./QuizItem";
const Quiz = () => {
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);
	const [error, setError] = useState(null);
	useEffect(() => {
		axios
			.get("https://carbonated-cautious-coast.glitch.me/api/questions")
			.then((res) => setQuestions(res.data.questions))
			.catch((error) => setError("Error Fetching Questions"));
	}, []);

	return (
		<Container centerContent maxW={"container.md"} py={10}>
			<Box p={6} borderWidth={2} boxShadow={"lg"} w="full">
				<Heading as="h1" size="2xl" textAlign={"center"}>
					Take The Quiz
				</Heading>
				{questions.length > 0 &&
					questions.map((ele) => {
						return <QuizItem ele={ele} key={ele.id} />;
					})}
			</Box>
		</Container>
	);
};

export default Quiz;
