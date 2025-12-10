#!/bin/bash

AWS_REGION="us-east-1"
ACCOUNT_ID="860655786501"
ECR_REGISTRY="${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"

LOG_FILE="/home/ec2-user/deploy.log"
exec >> "$LOG_FILE" 2>&1

echo "=== [AutoBlog] Checking for new images at $(date) ==="

aws ecr get-login-password --region $AWS_REGION \
  | docker login --username AWS --password-stdin $ECR_REGISTRY

PROJECT_DIR="/home/ec2-user/auto-blog"
DOCKER_COMPOSE="/usr/local/bin/docker-compose"

cd $PROJECT_DIR || {
  echo "[ERROR] Project directory not found: $PROJECT_DIR"
  exit 1
}

echo "-> Pulling latest images from ECR..."
$DOCKER_COMPOSE --env-file infra/.env -f infra/docker-compose.yml pull

echo "-> Restarting containers with updated images..."
$DOCKER_COMPOSE --env-file infra/.env -f infra/docker-compose.yml up -d

echo "-> Pruning unused images..."
docker image prune -f

echo "=== Deployment finished ==="
