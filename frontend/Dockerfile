
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml . 2>/dev/null || true

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html


RUN rm -rf ./*
COPY --from=build /app/dist ./

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
