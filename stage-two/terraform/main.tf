provider "aws" {
  region = var.aws_region
}

resource "aws_security_group" "yolo_sg" {
  name        = "yolo-security-group"
  description = "Allow SSH and HTTP inbound traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "yolo_ec2" {
  ami           = var.ami_id
  instance_type = var.instance_type
  security_groups = [aws_security_group.yolo_sg.name]

  tags = {
    Name = "YoloServer"
  }
}
