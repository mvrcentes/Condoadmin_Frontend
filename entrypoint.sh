#!/bin/sh
set -e
service ssh start
exec CMD ["npm", "run", "dev"]
