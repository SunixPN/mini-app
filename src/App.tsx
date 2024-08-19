import { useEffect } from "react"

const App = () => {

	useEffect(() => {
		const tg = window?.Telegram?.WebApp
		tg?.ready()

		console.log(tg.initDataUnsafe, window.Telegram, window)

		console.log(JSON.stringify({
			...tg.initDataUnsafe.user,
			hash: tg.initDataUnsafe.hash
		}))
	}, [])
	return (
		<div style={{ width: '100%', color: "#fff", textAlign: "center", fontSize: "50px" }}>
			App START
		</div>
	)
}

export default App