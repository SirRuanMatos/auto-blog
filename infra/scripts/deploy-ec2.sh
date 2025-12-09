PROJECT_DIR="/home/ec2-user/auto-blog"
DOCKER_COMPOSE="/usr/local/bin/docker-compose"

echo "=== [AutoBlog] Checking for new images at $(date) ==="

cd $PROJECT_DIR || {
  echo "[ERROR] Project directory not found: $PROJECT_DIR"
  exit 1
}

source infra/.env

SERVICES=("backend" "frontend")

SHOULD_DEPLOY=false

for SERVICE in "${SERVICES[@]}"; do
  IMAGE_VAR="${SERVICE^^}_IMAGE"
  IMAGE="${!IMAGE_VAR}"

  echo "-> Checking service: $SERVICE"
  echo "   Image: $IMAGE"

  LOCAL_DIGEST=$(docker inspect --format='{{index .RepoDigests 0}}' "$IMAGE" 2>/dev/null)

  REMOTE_DIGEST=$(aws ecr describe-images \
    --repository-name "$(echo "$IMAGE" | cut -d'/' -f2 | cut -d':' -f1)" \
    --region us-east-1 \
    --query 'imageDetails[0].imageDigest' \
    --output text 2>/dev/null)

  echo "   Local digest:  $LOCAL_DIGEST"
  echo "   Remote digest: $REMOTE_DIGEST"

  if [[ "$LOCAL_DIGEST" != *"$REMOTE_DIGEST"* ]]; then
    echo "   -> New image detected! Will deploy."
    SHOULD_DEPLOY=true
  else
    echo "   -> No changes."
  fi
done

if [ "$SHOULD_DEPLOY" = true ]; then
  echo "=== Changes detected, deploying... ==="

  $DOCKER_COMPOSE --env-file infra/.env -f infra/docker-compose.yml pull
  $DOCKER_COMPOSE --env-file infra/.env -f infra/docker-compose.yml up -d
  docker image prune -f

  echo "=== Deployment finished ==="
else
  echo "=== No new images. Nothing to do. ==="
fi
