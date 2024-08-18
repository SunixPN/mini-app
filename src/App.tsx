import { useEffect } from "react"

const App = () => {

	useEffect(() => {
		const tg = window?.Telegram?.WebApp
		tg?.ready()
	}, [])
	return (
		<div style={{ width: '100%', color: "#fff", textAlign: "center", fontSize: "50px" }}>
			App START
		</div>
	)
}

export default App