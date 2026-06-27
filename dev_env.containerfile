# use network host for devcontainer.json
FROM node:26-trixie as dev_env 

RUN apt-get update \
    && apt-get install -y curl less vim nginx
RUN npm install -g pnpm
# remofe debian nginx configuration
RUN rm /etc/nginx/sites-enabled/default 
COPY ./nginx_dev_config.conf /etc/nginx/conf.d/default.conf
