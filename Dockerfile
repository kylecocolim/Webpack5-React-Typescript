FROM node:14 as frontend-build
WORKDIR /app

COPY ./ /app/
COPY package.json /app/package.json 
COPY yarn.lock /yarn.lock 
RUN yarn
#CMD ["yarn" , "build"]
RUN yarn build


FROM nginx
COPY --from=frontend-build /app/build/ /frontend
COPY --from=frontend-build /app/nginx/nginx.conf /etc/nginx/nginx.conf

