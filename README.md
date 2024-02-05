```
docker build -t anti1346/node-app:latest . --no-cache
```
```
docker push anti1346/node-app:latest
```
```
docker rm -f $(docker ps -aq --filter="name=node-app")
```
```
docker rmi -f $(docker images | grep '<none>' | awk '{ print $3 }')
```
```
docker image prune
```
```
docker run -d -p 3000:3000 --name node-app anti1346/node-app:latest
```
```
curl http://localhost:3000
```
