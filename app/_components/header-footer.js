import {Flex} from "@chakra-ui/react"
import Header from "./header"
import Footer from "./footer"

export default function HeaderFooter({children}) {
	return (
		<Flex
			direction="column"
			minH="100vh"
			justify="space-between"
			bgColor="teal.50">
			<Header />
			<Flex as="main" mt="100px" p="10px" flex={1} direction="column">
				{children}
			</Flex>
			<Footer />
		</Flex>
	)
}
