### Yolo E-Commerce Web App Delivery using Docker, Ansible and Vagrant

### Milestone 1 : Dockerizing the Yolo E-Commerce Web App

This milestone focused on dockerizing the Yolo Web Application ,defining a multi-container setup with docker compose for frontend, backend and database services, creating a custom network for the services and persisting application data using volumes.

#### Key Features

- A multi-container setup with docker compose
- Multi-stage builds for frontend image with Docker
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

### Milestone 2 : Server Infrastructure Provisioning with Vagrant, configuration and Deployment with Ansible

This milestone focused on using Vagrant to provision virtual server infrastructure and ansible to configure the server and deployment of the Yolo e-commerce web application.

#### Key Features

- Using vagrant to provision virtual server infrastructure locally
- Utilizing ansible roles, that define different tasks
- Utilizing ansible main playbook to orchestrate the multiple roles created

#### Requirements

Install the following tools;

- Vagrant
- Ansible

#### How to run the application on host browser

- Fork the repository to your local machine
- Clone the repository
- At the project root run the following commands,
  (assuming you have required tools installed)

  ```bash
    vagrant up
  ```

  ```bash
    vagrant provision
  ```

- Open the application in a browser on host - http://localhost:3000/

### Milestone 3 :Orchestrating Containerized Yolo Web App with Kubernetes

This project demonstrates containerized deployment and inter-service communication using NodePort Services.This milestone utilizes minikube to simulate a local kubernetes environment.

#### Key Features

- Kubernetes Deployment -frontend and backend deployed as Deployments
- NodePort services for external access.
- StatefulSet for MongoDB to ensure persistent storage
- Pod replication and automatic restarts handled by K8s

#### Requirements

Install the following tools to run the project on a local machine;

- Minikube
- Kubectl
- Docker

#### How to run the application on host browser

- Start minikube

  ```bash
    minikube start
  ```

- Apply kubernetes configurations

  ```bash
    kubectl apply -f mongo-pvc.yaml
    kubectl apply -f manifests/mongodb-statefulset.yml
    kubectl apply -f manifests/Deployment-backend.yml
    kubectl apply -f manifests/Deployment-frontend.yml
    kubectl apply -f manifests/service-backend.yml
    kubectl apply -f manifests/service-frontend.yml

  ```

- Access the application in a browser on host - http://192.168.49.2:30080/
