// SPDX-License-Identifier: EUPL-1.2
// Copyright © 2025 Daniel Arthur Gallagher

import { Buffer } from "node:buffer";
import { hash } from "node:crypto";

const input = process.argv[2];

if (!input) {
	console.error("Please provide an input string to hash.");
	process.exit(1);
}

const hashed = hash("sha512", Buffer.from(input));

console.log(hashed);
