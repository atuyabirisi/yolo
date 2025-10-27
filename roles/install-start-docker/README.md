#### Install-Start-Docker Role

This role installs and starts docker on the provisioned VM

#### Requirements

Have the following tools installed

- Vagrant
- Ansible

#### Role Variables

Define the following role specific variables in the roles/vars/main.yml

- apt_key_url
- apt_repository_repo_url

#### Tags

Use the a single tag to run individual task and multiple tags to run multiple task
Example: Only run task to install Docker

```bash

  ansible-playbook playbook.yml --tags docker-install

```

Combine tags to run multiple tasks - install docker and start it

```bash

  ansible-playbook playbook.yml --tags "docker-install,docker-start"

```
