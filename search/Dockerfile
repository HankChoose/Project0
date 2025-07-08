# Use the Python 3.9 image
FROM python:3.9

# Setup work folder
WORKDIR /app
ADD requirements.txt /app/

# Install Python dependency
RUN pip install django
RUN pip install --upgrade django
RUN pip install -r requirements.txt
RUN pip3 install markdown2
# Copy to app folder
COPY . /app/

# Run application
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
CMD python manage.py runserver 0.0.0.0:8000

########################################################################
# syntax=docker/dockerfile:1
#FROM node:18-alpine
#WORKDIR /app
#COPY . /app
#RUN yarn install --production

#RUN npm install react react-dom
#RUN npm install
#RUN npm update express
#RUN npm install -g express

#EXPOSE 3000

#CMD ["npm", "start"]
#CMD ["node", "index.js"]


