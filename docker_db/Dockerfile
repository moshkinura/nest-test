FROM mongo:latest

WORKDIR /src/

ADD ./src/import.sh /src/
COPY ./src/data /src/data

# RUN chmod +x /src/import.sh

# CMD ["./import.sh"]
# CMD ["/bin/sh", "-c", "/src/import.sh"]