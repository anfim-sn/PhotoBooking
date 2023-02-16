FROM node:18.11-alpine as frontend-build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . .
RUN yarn install && yarn build


# Nginx for web-server static html
FROM nginx:1.19-alpine 
COPY ci/frontend.nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend-build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]