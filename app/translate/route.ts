import { NextResponse } from "next/server";
import { exec } from "child_process";

export async function POST(request: Request) {
	const { text } = await request.json();

	const translatedTextPromise = new Promise((resolve, reject) => {
		exec(
			`source virenv/bin/activate && python3 translate.py "${text}"`,
			(error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}`);
					reject(error);
				}
				resolve(stdout);
			}
		);
	});

	const translatedText = await translatedTextPromise;
	return NextResponse.json({ translatedText });
}
