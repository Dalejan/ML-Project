FROM python:3.8

WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .

CMD [ "python3", "-m" , "flask", "run", "main.py", "--host=0.0.0.0"]
