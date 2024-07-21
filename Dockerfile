# Copyright (c) Aymvn

# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

FROM node:20.15.1-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

CMD ["npm", "start"]