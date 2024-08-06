"use client"
import {Box, Text, Button} from "@chakra-ui/react"
import {Link} from "@chakra-ui/next-js"

export default function Page() {
	return (
		<Box>
			<Text>
				Other&nbsp;
				<Link href="/" color="blue.400" _hover={{color: "blue.700"}}>
					&gt; Home
				</Link>
			</Text>
		</Box>
	)
}
