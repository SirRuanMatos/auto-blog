FROM public.ecr.aws/docker/library/node:20-alpine AS build

WORKDIR /app

COPY frontend/package*.json frontend/pnpm-lock.yaml* ./

RUN npm install

COPY frontend ./
RUN npm run build

FROM public.ecr.aws/docker/library/nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=build /app/dist ./

COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
