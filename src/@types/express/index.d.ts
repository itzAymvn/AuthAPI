/**
 * Copyright (c) Aymvn
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IUser } from "../../database/models/user"
import { Request, Express } from "express"

declare global {
	namespace Express {
		interface Request {
			token?: string
			user?: IUser
		}
	}
}
