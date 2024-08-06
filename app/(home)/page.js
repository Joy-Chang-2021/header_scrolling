"use client"
import {useState, useEffect} from "react"
import {Box, Text, useDisclosure} from "@chakra-ui/react"
import {Link} from "@chakra-ui/next-js"

export default function Page() {
	const [lines, setLines] = useState([0])
	const {isOpen, onToggle} = useDisclosure()

	useEffect(() => {
		const newLines = Array.from({length: 100}, (_, i) => i)
		setLines(newLines)
	}, [])

	return (
		<Box>
			<Text>
				Home&nbsp;
				<Link href="/about" color="blue.400" _hover={{color: "blue.700"}}>
					&gt; Other
				</Link>
			</Text>
			<Text
				cursor="pointer"
				color="cyan.500"
				_hover={{color: "cyan.700"}}
				onClick={onToggle}>
				&lt; toggle &gt;
			</Text>
			{isOpen &&
				lines.map((line, index) => (
					<Text key={"line" + index}>{line + 1}</Text>
				))}
		</Box>
	)
}
