FROM ruby:3.1

RUN apt-get update -qq && \
  apt-get install -y apt-utils \
  build-essential \
  libpq-dev \
  nodejs \
  vim \
  default-mysql-client 

WORKDIR /app

ADD Gemfile .
ADD Gemfile.lock .
RUN bundle install -j4

ADD . /app

RUN mkdir -p app/tmp/sockets

VOLUME /app/tmp/sockets
EXPOSE 3000
