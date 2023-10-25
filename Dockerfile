FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

COPY entrypoint.sh ./

# Start and enable SSH
RUN apt-get update \
    && apt-get install -y --no-install-recommends dialog \
    && apt-get install -y --no-install-recommends openssh-server \
    && echo "root:Docker!" | chpasswd \
    && chmod u+x ./entrypoint.sh

EXPOSE 8000 2222

ENTRYPOINT [ "./entrypoint.sh" ]

CMD ["npm", "run", "dev"]