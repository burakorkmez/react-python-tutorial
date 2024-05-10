import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	useDisclosure,
} from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";

function EditModal() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<IconButton
				onClick={onOpen}
				variant='ghost'
				colorScheme='blue'
				aria-label='See menu'
				size={"sm"}
				icon={<BiEditAlt size={20} />}
			/>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>My new BFF 😍</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Flex alignItems={"center"} gap={4}>
							<FormControl>
								<FormLabel>Full Name</FormLabel>
								<Input placeholder='John Doe' />
							</FormControl>

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
								placeholder="He's a software engineer who loves to code and build things. 
              "
							/>
						</FormControl>
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
}

export default EditModal;

// STARTER CODE
// import {
// 	Button,
// 	Flex,
// 	FormControl,
// 	FormLabel,
// 	IconButton,
// 	Input,
// 	Modal,
// 	ModalBody,
// 	ModalCloseButton,
// 	ModalContent,
// 	ModalFooter,
// 	ModalHeader,
// 	ModalOverlay,
// 	Radio,
// 	RadioGroup,
// 	Textarea,
// 	useDisclosure,
// } from "@chakra-ui/react";
// import { BiEditAlt } from "react-icons/bi";

// function EditModal({ user }) {
// 	const { isOpen, onOpen, onClose } = useDisclosure();

// 	return (
// 		<>
// 			<IconButton
// 				onClick={onOpen}
// 				variant='ghost'
// 				colorScheme='blue'
// 				aria-label='See menu'
// 				size={"sm"}
// 				icon={<BiEditAlt size={20} />}
// 			/>

// 			<Modal isOpen={isOpen} onClose={onClose}>
// 				<ModalOverlay />
// 				<ModalContent>
// 					<ModalHeader>My new BFF 😍</ModalHeader>
// 					<ModalCloseButton />
// 					<ModalBody pb={6}>
// 						<Flex alignItems={"center"} gap={4}>
// 							<FormControl>
// 								<FormLabel>Full Name</FormLabel>
// 								<Input placeholder='John Doe' />
// 							</FormControl>

// 							<FormControl>
// 								<FormLabel>Role</FormLabel>
// 								<Input placeholder='Software Engineer' />
// 							</FormControl>
// 						</Flex>
// 						<FormControl mt={4}>
// 							<FormLabel>Description</FormLabel>
// 							<Textarea
// 								resize={"none"}
// 								overflowY={"hidden"}
// 								placeholder="He's a software engineer who loves to code and build things.
//               "
// 							/>
// 						</FormControl>
// 						<RadioGroup defaultValue='male' mt={4}>
// 							<Flex gap={5}>
// 								<Radio value='male'>Male</Radio>
// 								<Radio value='female'>Female</Radio>
// 							</Flex>
// 						</RadioGroup>
// 					</ModalBody>

// 					<ModalFooter>
// 						<Button colorScheme='blue' mr={3}>
// 							Add
// 						</Button>
// 						<Button onClick={onClose}>Cancel</Button>
// 					</ModalFooter>
// 				</ModalContent>
// 			</Modal>
// 		</>
// 	);
// }

// export default EditModal;
