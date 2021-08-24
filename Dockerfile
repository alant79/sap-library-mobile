FROM node

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g expo-cli

COPY . .

EXPOSE 19000 19002 19001 19006

CMD ["expo","start:web"]