FROM node:16-alpine
WORKDIR /server
RUN apk --no-cache add git
RUN npm install -g node-gyp
RUN npm install -g ipfs
COPY package.json db.ts index.ts types.ts ./
RUN npm i
EXPOSE 9000
CMD npm start
