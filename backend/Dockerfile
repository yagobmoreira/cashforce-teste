FROM node:20.15.1-slim

WORKDIR /app-backend

COPY package*.json .

RUN npm clean-install

COPY . .

COPY start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

EXPOSE 3001

CMD ["sh", "/usr/local/bin/start.sh"]


