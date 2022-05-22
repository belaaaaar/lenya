FROM node:16-alpine3.14 as builder

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
RUN npm ci --silent
RUN npm run build

FROM nginx:1.21.6-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN apk --no-cache add curl
HEALTHCHECK --interval=5s --timeout=3s CMD curl --fail http://localhost/ || exit 1
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
