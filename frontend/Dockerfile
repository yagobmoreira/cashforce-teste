
FROM node:20.15.1-slim as base

WORKDIR /src

# Build
FROM base as build

COPY --link package.json package-lock.json ./
RUN npm install 

COPY --link . .

RUN npm run build
RUN npm prune

# Run
FROM base

COPY --from=build /src/.output /src/.output

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]