#!/bin/sh
set -e
/usr/sbin/sshd
exec CMD ["npm", "run", "dev"]
