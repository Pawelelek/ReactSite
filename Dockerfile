FROM node:20.14.0
WORKDIR /app
#
COPY package*.json ./
#
COPY . .
#RUN npm install -g npm@9.5.1
RUN npm run build
#
# FROM nginx:alpine
# COPY --from=build/app/build/usr/share/nginx/html
#EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]
#
CMD ["npm", "start"]