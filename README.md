#### Dockerizing the Yolo E-Commerce App
This project involved dockerizing this MERN stack Yolo e-commerce Application ,defining a multi-container setup with docker compose for frontend, backend and database services, creating a custom network for the services and persisting application data using volumes.

#### Key Features
 - Multi-stage builds for frontend and backend images with Docker
 - A multi-container setup with docker compose
 - A Custom docker compose network
 - Pushing images to docker hub

#### Requirements
  - Docker 
    
#### Launch the application locally
 - Fork repository - https://github.com/atuyabirisi/yolo.git
 - Clone repository
    ```bash
      git clone https://github.com/atuyabirisi/yolo.git
    ```
 - Build and start containers
    ```bash
      docker compose up
    ```
 - Open the application in a browser - http://localhost:3000/ 
