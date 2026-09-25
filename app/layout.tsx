import { clsx } from "clsx";
import { Outfit, Young_Serif } from "next/font/google";
import "./globals.css";
const youngSerif = Young_Serif({
	weight: "400"
});
const outfit = Outfit();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="ko"
			className={clsx(outfit.className, youngSerif.className)}
		>
			<body>{children}</body>
		</html>
	);
}
