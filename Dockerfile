FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

COPY sshd_config /etc/ssh/
COPY entrypoint.sh ./

# Start and enable SSH
RUN apk add openssh \
    && echo "root:Docker!" | chpasswd \
    && chmod +x ./entrypoint.sh \
    && cd /etc/ssh/ \
    && ssh-keygen -A

EXPOSE 8000 2222

ENTRYPOINT [ "./entrypoint.sh" ]