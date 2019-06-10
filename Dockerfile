FROM node:10

LABEL author="NGUYEN-QUANG Huy<huynguyennbk@gmail.com>" 

# Create app directory
WORKDIR /usr/src/yalvApp/

# Yarn Install
RUN npm install -g yarn

# COPY Essentential Files
COPY ./package.json ./
COPY ./webpack.config.js ./
COPY ./babel.config.js ./
COPY ./.env ./
COPY ./.eslintrc.json ./

# Bundle app source
COPY ./server/ ./server/

# Install libraries
RUN yarn

# Install WebPack
RUN npm install -g webpack webpack-cli

# RUN webpack
RUN yarn webpackDocker

#ENV 
ENV PORT 8000

# EXPOSE Port
EXPOSE $PORT

# CMD
CMD ["yarn", "server"]
