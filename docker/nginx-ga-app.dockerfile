FROM nginx:alpine

COPY ./config/default.conf /etc/nginx/conf.d/
COPY --from=node-ga-app app/dist/ga /usr/share/nginx/html

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

# FROM nginx:latest
# # VOLUME /var/cache/nginx
# COPY --from=node-ga-app app/dist/ga /usr/share/nginx/html
# COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

# # ENTRYPOINT [ "nginx" ]
# # CMD [ "-g", "daemon off;" ]