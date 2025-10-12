#### Strategy used
Used multi-stage build strategy to create a smaller image.
This strategy ensures build time tools and dev dependencies are not included in the final image

#### Tools:
  - Linux based Operating System
  - Node.js runtime environment.
  - Nginx for serving the application static files

**Node.js 24 Alpine** image as the build environment (alpine OS  and a Node runtime) - because
 it is lightweight, reducing build time.

**WORKDIR /yolo-client** - Set /yolo-client as the working directory

COPY package*.json . - copies only package.json and package-lock.json into the working dir 
This is a Docker optimization technique - because dependencies are not going to change oftenly -
  so Docker is going to reuse the layer from cache - faster building time.
  
**RUN npm ci** installs the exact version of dependencies defined in the package-lock.json - 

**RUN rm -rf /usr/share/nginx/html/*** deletes the default Nginx HTML directory to ensure no default content remains

**COPY --from=builder /yolo-client/build /usr/share/nginx/html** copies the optimized static build files from the builder stage into Nginx’s default web directory.


**CMD ["nginx", "-g", "daemon off;"]** - runs Nginx as the main process of the container
