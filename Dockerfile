FROM  node:20.11.0 AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build


FROM  nginx:1.27.0-alpine AS server

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/frontend-test-app/browser /usr/share/nginx/html

EXPOSE 80