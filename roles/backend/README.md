# Backend Role

This role starts the yolo backend container in the provisioned vagrant VM

## Requirements

- Docker
- Vagrant
- Ansible

#### Role Variables

Define the following role specific variables in the roles/vars/main.yml

- forwarded_port
- yolo_backend_image
- database_uri

#### Tags

Use the tag - backend-start - to start only the backend container

```bash

  ansible-playbook playbook.yml --tags backend-start

```

Can combine tags to start multiple container

```bash

  ansible-playbook playbook.yml --tags "backend-start,frontend-start"

```
