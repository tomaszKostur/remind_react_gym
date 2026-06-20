FROM node:26-trixie

RUN apt-get update \
    && apt-get install -y curl less vim