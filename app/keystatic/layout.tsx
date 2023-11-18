import type { ReactNode } from "react";

import KeystaticApp from "@/app/keystatic/keystatic";

export default function RootLayout(): ReactNode {
	return (
		<html lang="en">
			<head />
			<body>
				<KeystaticApp />
			</body>
		</html>
	);
}
