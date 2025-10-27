#### Database Role

This role starts a MongoDB container from the provided image

#### Requirements

Have the following tools inst

- Docker
- Vagrant
- Ansible

#### Role Variables

Define the following role specific variables in the roles/vars/main.yml

- database_image
- database_port

#### Tags

Use the tag - db-start - to start only the database container

```bash

  ansible-playbook playbook.yml --tags db-start

```

Can combine tags to start multiple container

```bash

  ansible-playbook playbook.yml --tags "db-start,backend-start,frontend-start"

```
