import { Container, Stack, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";
import { useState } from "react";

// updated this after recording. Make sure you do the same so that it can work in production
export const BASE_URL = import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api";

function App() {
	const [users, setUsers] = useState([]);

	return (
		<Stack minH={"100vh"}>
			<Navbar setUsers={setUsers} />

			<Container maxW={"1200px"} my={4}>
				<Text
					fontSize={{ base: "3xl", md: "50" }}
					fontWeight={"bold"}
					letterSpacing={"2px"}
					textTransform={"uppercase"}
					textAlign={"center"}
					mb={8}
				>
					<Text as={"span"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>
						My Besties
					</Text>
					🚀
				</Text>

				<UserGrid users={users} setUsers={setUsers} />
			</Container>
		</Stack>
	);
}

export default App;
