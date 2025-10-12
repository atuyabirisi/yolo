#### Strategy used
Used multi-stage build strategy to create a smaller image.
This strategy ensures build time tools and dev dependencies are not included in the final image

#### Tools:
  - Linux based Operating System
  - Node.js runtime environment.
  - Nginx for serving the application static files
    
#### Stage 1:
- **Node.js 24 Alpine** as the base image (alpine OS  and a Node runtime) - because
    it is lightweight, for faster builds and image size.

- **WORKDIR /yolo-client** - Set /yolo-client as the working directory

- COPY package*.json . - copies only package.json and package-lock.json into the working dir 
  This is a Docker optimization technique - because dependencies are not going to change oftenly -
  so Docker is going to reuse the layer from cache - faster building time.
  
- **RUN npm ci** installs the exact version of dependencies defined in the package-lock.json - in contrast with npm 
  install that loos up for the latest compatible version of the package

#### Stage 2:
- **RUN rm -rf /usr/share/nginx/html/*** deletes the default Nginx HTML directory to ensure no default content remains

- **COPY --from=builder /yolo-client/build /usr/share/nginx/html** copies the optimized static build files from the     builder stage into Nginx’s default web directory.


- **CMD ["nginx", "-g", "daemon off;"]** - runs Nginx as the main process of the container

[Docker Hub URL](https://hub.docker.com/repositories/birisi)

