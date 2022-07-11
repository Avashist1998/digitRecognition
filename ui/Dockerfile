FROM node:current-alpine

ENV PORT=3000

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install


COPY . .
RUN npm run build

CMD ["npm", "start"]