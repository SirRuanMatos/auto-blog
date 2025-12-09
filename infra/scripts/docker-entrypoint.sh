#!/usr/bin/env sh
set -e

echo "==> Running Drizzle migrations..."
npm run migrate

echo "==> Starting backend server..."
node dist/server.js
