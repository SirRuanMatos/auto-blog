FROM public.ecr.aws/docker/library/node:20-alpine AS build

WORKDIR /app

COPY package*.json pnpm-lock.yaml* ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=build /app/dist ./

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN addgroup -g 101 -S nginx && adduser -S nginx -u 101 && chown -R nginx:nginx /usr/share/nginx/html

USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
