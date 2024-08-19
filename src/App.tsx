import { useEffect } from "react"

const App = () => {

	useEffect(() => {
		const tg = window?.Telegram?.WebApp
		tg?.ready()

		console.log(tg.initDataUnsafe, window.Telegram, window)

		const parsedData = window.Telegram.Utils.urlParseQueryString(window.Telegram.WebApp.initData)

		console.log(parsedData)
	}, [])
	return (
		<div style={{ width: '100%', color: "#fff", textAlign: "center", fontSize: "50px" }}>
			App START
		</div>
	)
}

export default App