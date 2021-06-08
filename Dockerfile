FROM node:14 as frontend-build
WORKDIR /app
COPY ./ /app

RUN yarn
RUN yarn build


FROM nginx:1.12.1
COPY --from=frontend-build /app/build/ /frontend
COPY --from=frontend-build /app/nginx/nginx.conf /etc/nginx/nginx.conf

