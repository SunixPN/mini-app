import { useEffect } from "react"

const App = () => {

	useEffect(() => {
		const tg = window.Telegram.WebApp
		tg.ready()
	}, [])
	return (
		<div>
			App START
		</div>
	)
}

export default App