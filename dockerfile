FROM node AS publish
COPY index.html .
COPY package.json .
COPY entrypoint.sh .
RUN npm install
ENTRYPOINT ["bash", "entrypoint.sh" ]