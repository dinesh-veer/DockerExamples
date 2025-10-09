#Builds a Docker image from the current directory (.) using the Dockerfile there and tags it as express-app.
docker build -t express-app . 


#Runs the express-app image, mapping host port 4000 → container port 3000, setting the PORT=3000 environment variable, and automatically removing the container when it stops.

docker run -p 4000:3000 -e PORT=3000 --rm express-app

#Runs the express-app Docker image, mapping host port 4000 → 3000, loading environment variables from .env, and auto-removing the container when it stops

docker run -p 4000:3000 --env-file .env --rm express-app