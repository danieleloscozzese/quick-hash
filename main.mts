// SPDX-License-Identifier: EUPL-1.2
// Copyright © 2025 Daniel Arthur Gallagher

import { Buffer } from "node:buffer";
import { hash } from "node:crypto";

const input = process.argv[2];

if (!input) {
	console.error("Please provide an input string to hash.");
	process.exitCode = 1;
}

const hashed = await hash("sha512", Buffer.from(input), {
	outputEncoding: "hex",
});

console.log(hashed);
