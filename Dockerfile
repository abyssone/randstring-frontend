FROM node:18-alpine as builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm install

ARG REACT_APP_BACKEND_URL

ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL

COPY . /app
RUN npm run build

FROM nginx:1.26-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]