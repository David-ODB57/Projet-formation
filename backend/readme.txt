STEPS FOR INSTALLING PROJECT FROM REPO IN A TERMINAL:

    1. $ git clone <name of the project>  # Cloning project repository
    2. $ python3 -m venv my_venv # If not created, creating virtualenv
    3. $ my_venv/Scripts/activate # Activating virtualenv
    4. (my_venv)$ pip3 install -r ./requirements.txt # Installing dependencies
    5. (my_venv)$ my_venv/Scripts/deactivate # When you want to leave virtual environment

All installed dependencies at step 5 will be unavailable after you leave virtual environment.
