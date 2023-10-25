FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 4000 2222

COPY sshd_config /etc/ssh/       
COPY entrypoint.sh ./            

CMD ["./entrypoint.sh"]
