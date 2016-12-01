FROM angular-cli:1.0.0-beta.19

ENV HOME=/home/app
ENV APP_NAME=insc


COPY package.json $HOME/$APP_NAME/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/$APP_NAME

RUN npm install &&\
	npm cache clean

CMD ["ng", "serve", "--host", "0.0.0.0"]