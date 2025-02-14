import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchCategories,
	fetchWorkouts,
} from "../../../../../redux/actions/actions";
import {
	Heading,
	VStack,
	HStack,
	Grid,
	GridItem,
	Image,
	Text,
	Button,
	Skeleton,
} from "@chakra-ui/react";
import {
	NativeSelectField,
	NativeSelectRoot,
} from "@/components/ui/native-select";

const Workouts = () => {
	// const workout get from store
	const { workouts, categories, loading } = useSelector(
		(state) => state.fitness,
	);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [isLoading, setLoading] = useState(true);
	console.log(workouts, categories);
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch fetch workouts
		dispatch(fetchWorkouts()).finally(() => setLoading(false));
		// dispath fetch categories
		dispatch(fetchCategories());
	}, []);
	const handleFilter = (e) => {
		console.log(e.target.value);
		const category = e.target.value;
		setSelectedCategory(category);
		dispatch(fetchWorkouts(category));
	};
	return (
		<VStack width={"100%"} gap={6}>
			<Heading>Fitness Tracker</Heading>
			<HStack>
				<NativeSelectRoot size="sm" width="240px">
					<NativeSelectField
						placeholder="Select Category"
						value={selectedCategory}
						onChange={handleFilter}
					>
						{categories.map((category) => {
							return (
								<option key={category.id} value={category.name}>
									{category.name}
								</option>
							);
						})}
					</NativeSelectField>
				</NativeSelectRoot>
			</HStack>
			<Grid
				templateColumns="repeat(auto-fit,minmax(300px,1fr))"
				// templateColumns="repeat(2, 1fr)"
				gap={6}
				w="full"
			>
				{isLoading
					? [...Array(workouts.length)].map((_, index) => (
							<Skeleton key={index} height={"250px"} borderRadius={"lg"} />
					  ))
					: workouts.map((workout) => {
							return (
								<GridItem
									key={workout.id}
									p={4}
									borderWidth={"1px"}
									borderRadius={"lg"}
									boxShadow={"lg"}
									bg="white"
									maxW="400px"
								>
									<Image
										src={workout.image}
										alt={workout.name}
										borderRadius={"md"}
										mb={2}
										width="100%"
										objectFit={"cover"}
										height={"200px"}
									/>
									<Text fontSize={"lg"} fontWeight={"bold"}>
										{workout.name}
									</Text>
									<Text>
										{workout.duration} min - {workout.calories} cal -{" "}
										{workout.difficulty}
									</Text>
									<Text fontSize={"sm"} color={"gray.500"}>
										{" "}
										{workout.description}
									</Text>
									<HStack justifyContent={"space-between"}>
										<Text color={"blue.500"}>{workout.category}</Text>
										<Button colorPalette={"red"}>Delete</Button>
									</HStack>
								</GridItem>
							);
					  })}
			</Grid>
		</VStack>
	);
};

export default Workouts;
//
