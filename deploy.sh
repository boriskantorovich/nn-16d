#!/bin/bash

# Load environment variables
source .env

# Configuration
SERVER_USER="${DEPLOY_SERVER_USER}"
SERVER_IP="${DEPLOY_SERVER_IP}"
PROJECT_PATH="${DEPLOY_PROJECT_PATH}"
PROJECT_NAME="${DEPLOY_PROJECT_NAME}"
SSH_KEY="${DEPLOY_SSH_KEY}"

# SSH and SCP commands with specific key
SSH_CMD="ssh -i $SSH_KEY"
SCP_CMD="scp -i $SSH_KEY"

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

# Check if project directory exists
log "Checking remote directory..."
$SSH_CMD $SERVER_USER@$SERVER_IP "mkdir -p $PROJECT_PATH" || error "Failed to create project directory"

# Build the project
log "Building project..."
npm run build || error "Build failed"

# Create deployment archive
log "Creating deployment archive..."
tar -czf build.tar.gz .next package.json package-lock.json public || error "Failed to create archive"

# Upload to server
log "Uploading to server..."
$SCP_CMD build.tar.gz $SERVER_USER@$SERVER_IP:$PROJECT_PATH/build.tar.gz || error "Failed to upload archive"

# Execute commands on server
log "Deploying on server..."
$SSH_CMD $SERVER_USER@$SERVER_IP "cd $PROJECT_PATH && \
    tar -xzf build.tar.gz && \
    npm install --production && \
    pm2 restart $PROJECT_NAME || pm2 start npm --name $PROJECT_NAME -- start -- -p 3001" || error "Failed to deploy on server"

# Clean up local archive
log "Cleaning up..."
rm build.tar.gz

log "Deployment completed successfully!"
