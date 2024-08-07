"use client"
import {useRef, useEffect, useCallback} from "react"
import {Box, useBoolean} from "@chakra-ui/react"

export default function Header() {
	// 滾動方向 (判斷導覽列隱藏狀態)
	const [isShow, setIsShow] = useBoolean(true)
	// 上一次滾動的位置
	const lastScrollY = useRef(false)

	const checkScrollDirection = useCallback(() => {
		// 目前滾動的位置、向上滾動的狀態
		const newScrollY = window.scrollY || document.documentElement.scrollTop
		const isScrollUp = newScrollY < lastScrollY.current
		// 滾動內容總高度、目前滾動高度
		const bodyHeight = document.body.scrollHeight
		const scrollHeight = window.innerHeight + newScrollY
		// 上下範圍 (mobile 於至頂/至底滾動時的微小抖動範圍)
		const nearTop = newScrollY < 50
		const nearBottom = scrollHeight + 50 > bodyHeight
		const isContentFits = bodyHeight <= window.innerHeight + 100

		if (isContentFits) {
			setIsShow.on()
		} else if (isScrollUp) {
			nearBottom ? setIsShow.off() : setIsShow.on()
		} else {
			nearTop ? setIsShow.on() : setIsShow.off()
		}

		lastScrollY.current = newScrollY
	}, [setIsShow])

	// 每次滾動時，只在必要時更新狀態
	const handleScroll = useCallback(() => {
		requestAnimationFrame(checkScrollDirection)
	}, [checkScrollDirection])

	useEffect(() => {
		// 註冊事件
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [handleScroll])

	return (
		<Box
			as="header"
			w="100%"
			h="100px"
			p="10px"
			pos="fixed"
			zIndex={100}
			transform={`translateY(${isShow ? "0" : "-100%"})`}
			transition="transform 1s ease"
			bgColor="pink.100">
			Header
		</Box>
	)
}
