#### docker buildx create
```
docker buildx create --use
```
#### docker buildx build & push
```
docker buildx build --platform linux/amd64,linux/arm64 --tag anti1346/node-app:latest --no-cache --push .
```
#### 모든 컨테이너를 강제로 중지하고 삭제
```
docker rm -f $(docker ps -aq --filter="name=node-app")
```
#### 모든 이미지를 강제로 삭제
```
docker rmi -f $(docker images -aq --filter=reference='anti1346/node-app')
```
#### dangling 이미지를 삭제(dangling 이미지란 사용되지 않는 이미지를 의미)
```
docker image prune
```
#### 컨테이너를 실행
```
docker run -d -p 3000:3000 --name node-app anti1346/node-app:latest
```
#### docker inspect
```
docker inspect anti1346/node-app:latest --format='{{.Architecture}}'
```
#### HTTP GET 요청
```
curl http://localhost:3000
```

<details>
<summary>Docker Build 명령어</summary>

#### Docker 이미지 빌드
```
docker build -t anti1346/node-app:latest . --no-cache
```
#### Docker 레지스트리에 푸시
```
docker push anti1346/node-app:latest
```
</details>