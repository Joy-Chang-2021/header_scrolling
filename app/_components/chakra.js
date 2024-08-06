"use client"
import {ChakraProvider as Providers, extendTheme} from "@chakra-ui/react"

const theme = extendTheme({
	fonts: {
		heading: "var(--font-rubik)",
		body: "var(--font-rubik)",
	},
})

export default function ChakraProvider({children}) {
	return <Providers theme={theme}>{children}</Providers>
}
