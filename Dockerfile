FROM mysql:latest
ENV MYSQL_ALLOW_EMPTY_PASSWORD=yes
ENV MYSQL_DATABASE=dev 
ENV MYSQL_ROOT_PASSWORD=password


EXPOSE 3306