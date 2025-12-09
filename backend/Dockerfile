FROM public.ecr.aws/docker/library/node:20-alpine AS build

WORKDIR /app

COPY backend/package*.json backend/pnpm-lock.yaml* ./

RUN npm install

COPY backend/tsconfig.json backend/drizzle.config.ts ./
COPY backend/src ./src
COPY backend/drizzle ./drizzle

RUN npm run build

FROM public.ecr.aws/docker/library/node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

COPY backend/package*.json ./

RUN npm install --omit=dev

COPY --from=build /app/dist ./dist
COPY --from=build /app/drizzle ./drizzle
COPY infra/scripts/docker-entrypoint.sh ./docker-entrypoint.sh

RUN chmod +x ./docker-entrypoint.sh && chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 3000

CMD ["./docker-entrypoint.sh"]
