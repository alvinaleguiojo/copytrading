FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . .
RUN npm install --production 
RUN npm run build 
CMD ["npm", "start"]
