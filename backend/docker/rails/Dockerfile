FROM ruby:3.1

RUN apt-get update -qq && \
  apt-get install -y apt-utils \
  build-essential \
  libpq-dev \
  nodejs \
  vim \
  default-mysql-client 

RUN mkdir /app
WORKDIR /app

ADD Gemfile /app/Gemfile
ADD Gemfile.lock /app/Gemfile.lock
RUN bundle install -j4

ADD . /app

RUN mkdir -p app/tmp/sockets

VOLUME /app/tmp/sockets

EXPOSE 3000

RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
