#!/bin/bash

REQUESTS=10
URL="http://localhost:3000"

for ((i=1; i<=REQUESTS; i++)); do
  echo -n "Request $i -> "
  curl -s $URL
  echo ""
done

echo "All requests have been sent."
