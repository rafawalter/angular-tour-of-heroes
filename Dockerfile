FROM node:8

RUN yarn global add @angular/cli

VOLUME [ "/source" ]
WORKDIR /source

CMD yarn && ng serve
EXPOSE 4200

USER node
