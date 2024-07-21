/**
 * Copyright (c) Aymvn
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Document, model, Schema } from "mongoose"

const TOKEN_EXPIRATION_IN_SECONDS = parseInt(
	process.env.TOKEN_EXPIRATION_IN_SECONDS!
)

const TokenSchema = new Schema(
	{
		userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
		token: { type: String, required: true },
		createdAt: { type: Date, default: Date.now },
		expiresAt: {
			type: Date,
			required: true,
			index: { expires: TOKEN_EXPIRATION_IN_SECONDS },
		},
	},
	{
		timestamps: true,
	}
)

export interface IToken extends Document {
	userId: Schema.Types.ObjectId
	token: string
	createdAt: Date
	expiresAt: Date
}

const Token = model<IToken>("Token", TokenSchema)

export default Token
