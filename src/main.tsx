import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import LoadingProvider from "@/context/LoadingProvider";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
	<React.StrictMode>
		<LoadingProvider>
			<App />
		</LoadingProvider>
	</React.StrictMode>
);
