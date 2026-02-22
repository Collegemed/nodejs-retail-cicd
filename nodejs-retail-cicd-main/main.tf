terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
} 

provider "aws" {
  region = "eu-north-1"
  access_key = "AKIA35OKIW5UXGN5XUUX"
  secret_key = "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"
}

resource "aws_instance" "demo" {
  ami           = "ami-073130f74f5ffb161"
  instance_type = "t3.micro"
  key_name      = "mykey" 

  user_data = <<-EOF
              #!/bin/bash
              apt update -y
              apt install apache2 -y
              systemctl start apache2
              systemctl enable apache2
              echo "<h1>Hello from Terraform EC2</h1>" > /var/www/html/index.html
              EOF

  tags = {
    Name = "Terraform-Web"
  }
}
