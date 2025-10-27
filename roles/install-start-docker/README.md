# Role Name

A brief description of the role goes here.

## Requirements

Any pre-requisites that may not be covered by Ansible itself or the role should be mentioned here. For instance, if the role uses the EC2 module, it may be a good idea to mention in this section that the boto package is required.

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

## Dependencies

A list of other roles hosted on Galaxy should go here, plus any details in regards to parameters that may need to be set for other roles, or variables that are used from other roles.

## Example Playbook

Including an example of how to use your role (for instance, with variables passed in as parameters) is always nice for users too:

    - hosts: servers
      roles:
         - { role: username.rolename, x: 42 }

## License

BSD

## Author Information

An optional section for the role authors to include contact information, or a website (HTML is not allowed).
