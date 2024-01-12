import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import { StoreProvider } from "./store/provider.tsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StoreProvider>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</StoreProvider>,
);
