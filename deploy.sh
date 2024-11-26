#!/bin/bash

# Load environment variables
source .env

# Configuration (moved to .env)
SERVER_USER="${DEPLOY_SERVER_USER}"
SERVER_IP="${DEPLOY_SERVER_IP}"
PROJECT_PATH="${DEPLOY_PROJECT_PATH}"
PROJECT_NAME="${DEPLOY_PROJECT_NAME}"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to log messages
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
    exit 1
}

# Build the project
log "Building project..."
npm run build || error "Build failed"

# Create deployment archive
log "Creating deployment archive..."
tar -czf build.tar.gz .next package.json package-lock.json public || error "Failed to create archive"

# Upload to server
log "Uploading to server..."
scp build.tar.gz $SERVER_USER@$SERVER_IP:$PROJECT_PATH/build.tar.gz || error "Failed to upload archive"

# Execute commands on server
log "Deploying on server..."
ssh $SERVER_USER@$SERVER_IP "cd /var/www && ./restart_server.sh $PROJECT_NAME" || error "Failed to deploy on server"

# Clean up local archive
log "Cleaning up..."
rm build.tar.gz

log "Deployment completed successfully!"
