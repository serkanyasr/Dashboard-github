# Django Azure Deployment Guide

This guide provides step-by-step instructions to successfully deploy your Django application on Azure Cloud.

[Read on Medium](https://medium.com/@serkanyasr/django-uygulaman%C4%B1z%C4%B1-azure-sanal-makine-%C3%BCzerinde-da%C4%9F%C4%B1t%C4%B1n-c6cce42a56d1)

## Handling Static Files

The Django file hierarchy is crucial for organizing static files. In this guide, you will learn the necessary steps to ensure the server-side processing of static files.

1. Specify `STATIC_ROOT` in the `settings.py` file of your project.
    ```python
    # settings.py

    STATIC_ROOT = os.path.join(BASE_DIR, 'static')
    ```

2. Comment out the `STATIC_DIRS` variable in the `settings.py` file of your project.
    ```python
    # settings.py

    # STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
    ```

3. Run the following command in your project directory to collect all static files:
    ```bash
    $ python manage.py collectstatic
    ```

4. Transfer the library requirements used to the `requirements.txt` file:
    ```bash
    $ python -m pip freeze > requirements.txt
    ```

## Determining the Domain Address

To introduce and make your website accessible, you should choose a domain address. This guide recommends using the 'site.ac' website to obtain a free domain.

1. Go to [site.ac](https://site.ac) and create an account.
2. Follow the relevant steps to choose a free domain name.

## Creating an Azure Account

Create an Azure account to deploy your Django application on Azure Cloud.

1. Go to the [Azure portal](https://portal.azure.com/) and sign in or create a new account.
2. Choose the package that suits you and make the purchase. Free credits worth $100 are available for students.
3. Fill in the necessary information, create your account by specifying a username and password.
4. Complete authentication processes for security purposes.

## Creating a Virtual Machine

Create a virtual machine on Azure portal.

1. Give your virtual machine a name and specify the region, traffic intensity, disk, and RAM sizes.
2. Choose the Linux operating system (Ubuntu 20.04 LTS is recommended).
3. Create an SSH key and connect to your virtual machine.

## Setting Up the Web Server with Gunicorn and Nginx

Configure your Django application to work with Gunicorn and Nginx.

1. Install the necessary packages on your virtual machine:
    ```bash
    $ sudo apt-get update
    $ sudo apt-get install python3-pip python3-dev libpq-dev nginx
    ```

2. Clone the Django project from GitHub and create a virtual environment:
    ```bash
    $ git clone https://github.com/serkanyasr/Django-DashBoard.git
    $ cd Django-DashBoard
    $ virtualenv venv
    $ source venv/bin/activate
    $ pip install -r requirements.txt
    ```

3. Install Gunicorn and run the Django project:
    ```bash
    $ pip install gunicorn
    $ gunicorn --bind 0.0.0.0:8000 DashBoard.wsgi
    ```

4. Create the Nginx configuration file:
    ```nginx
    server {
        listen 80;
        server_name your_domain.com www.your_domain.com your_virtual_machine_IP;

        root /path/to/your/project;

        location /static/ {
            alias /path/to/your/project/static/;
        }

        location /media/ {
            alias /path/to/your/project/media/;
        }

        location / {
            include proxy_params;
            proxy_pass http://unix:/path/to/your/project/DashBoard.sock;
        }
    }
    ```

5. Start Nginx and register Gunicorn as a service:
    ```bash
    $ sudo systemctl start nginx
    $ sudo systemctl enable nginx
    ```

    ```bash
    $ cd /etc/systemd/system
    $ sudo nano gunicorn.service
    ```
    After opening the service file, edit the content as follows:

    ```ini
    [Unit]
    Description=gunicorn daemon for Django project
    After=network.target

    [Service]
    User=your_username
    Group=your_username
    WorkingDirectory=/path/to/your/project
    ExecStart=/path/to/your/project/venv/bin/gunicorn --workers=3 --bind unix:/path/to/your/project/DashBoard.sock DashBoard.wsgi:application

    [Install]
    WantedBy=multi-user.target
    ```

    Start and enable the service:

    ```bash
    $ sudo systemctl start gunicorn
    $ sudo systemctl enable gunicorn
    ```

    Your Django application is now successfully running on Azure Cloud! If you encounter any issues, carefully review the steps and correct any errors. Best of luck!
