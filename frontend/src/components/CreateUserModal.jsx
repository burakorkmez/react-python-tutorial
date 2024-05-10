import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Radio,
	RadioGroup,
	Textarea,
	useDisclosure,
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

const CreateUserModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen}>
				<BiAddToQueue size={20} />
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader> My new BFF 😍 </ModalHeader>
					<ModalCloseButton />

					<ModalBody pb={6}>
						<Flex alignItems={"center"} gap={4}>
							{/* Left */}
							<FormControl>
								<FormLabel>Full Name</FormLabel>
								<Input placeholder='John Doe' />
							</FormControl>

							{/* Right */}
							<FormControl>
								<FormLabel>Role</FormLabel>
								<Input placeholder='Software Engineer' />
							</FormControl>
						</Flex>

						<FormControl mt={4}>
							<FormLabel>Description</FormLabel>
							<Textarea
								resize={"none"}
								overflowY={"hidden"}
								placeholder="He's a software engineer who loves to code and build things."
							/>
						</FormControl>

						<RadioGroup mt={4}>
							<Flex gap={5}>
								<Radio value='male'>Male</Radio>
								<Radio value='female'>Female</Radio>
							</Flex>
						</RadioGroup>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3}>
							Add
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
export default CreateUserModal;
