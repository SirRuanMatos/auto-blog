#!/usr/bin/env sh
set -e

echo "==> Running Drizzle migrations..."
npm run migrate:prod

echo "==> Starting backend server..."
node dist/server.js
