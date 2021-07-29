FROM nginx:1.19-alpine

COPY nginx.conf /etc/nginx/templates/default.conf.template

COPY /dist/timestamp-ap-ui /usr/share/nginx/html

EXPOSE 80
