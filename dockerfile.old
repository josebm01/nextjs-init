# IMAGEN BASE
# - version de node lista para producción
FROM node:18-alpine 

# work directory
WORKDIR /app

# copiar - origen y destino (a la imagen)
COPY package.json /

# construir los módulos en base al sistema operativo
RUN npm install 

# copiar todos los archivos del proyecto
COPY . /

# ejecutar build 
RUN npm run build 

# comunicación hacia la imagen en el puerto especificado
EXPOSE 3000

# comando para inicializar el servidor
CMD ["npm", "start"]