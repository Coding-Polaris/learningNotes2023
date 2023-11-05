FROM ruby:3.2.2

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

RUN bundle install

CMD ["ruby", "server.rb"]