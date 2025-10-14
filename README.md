#### Dockerizing the Yolo E-Commerce App
This project involved dockerizing the Yolo e-commerce Application ,defining a multi-container setup with docker compose for frontend, backend and database services, creating a custom network for the services, persisting application data using volumes pushing built images(frontend, backend) to docker hub.

#### Key Features
 - Multi-stage build for frontend image with Docker
 - A multi-container setup with docker compose
 - A Custom docker compose network
 - A volume for data persistance
 - Pushing images to docker hub
 - Automation of the above workflows using a Jenkins pipeline

#### Requirements
  - Docker
  - Jenkins
    
#### Launch the application locally
 - Fork repository - https://github.com/atuyabirisi/yolo.git
 - Clone repository
    ```bash
      git clone https://github.com/atuyabirisi/yolo.git
    ```
 - Build and start containers -Run the below command at the root of the application
    ```bash
      docker compose up --build
    ```
 - Open the application in a browser - http://localhost:3000/ 
