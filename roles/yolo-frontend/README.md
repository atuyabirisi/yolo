#### yolo-frontend Role

This role starts the yolo-frontend container from the provided image

#### Requirements

Have the following tools inst

- Docker
- Vagrant
- Ansible

#### Role Variables

Define the following role specific variables in the roles/vars/main.yml

- forwarded_port
- backend_url
- frontend_image

#### Tags

Use the tag - frontend-start - to start only the frontend container

```bash

  ansible-playbook playbook.yml --tags frontend-start

```
