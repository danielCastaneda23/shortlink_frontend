FROM nginx:1.27.0-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./dist/frontend-test-app/browser /usr/share/nginx/html/angular

COPY ./index.html /usr/share/nginx/html/static/index.html

EXPOSE 80