# Bem vindo(a) ao projeto Lista de Series

## Para rodar este projeto na sua máquina utilizando o docker, siga estes passos:

```
git clone https://github.com/eduardo-de-carvalho-couto/lista-de-series-com-react
```

```
cd lista-de-series-com-react/
```

```
docker build -t app/node .
```

```
docker run --rm -itv $(pwd):/app -w /app -u $(id -u):$(id -g) node npm install
```

```
docker run -itv $(pwd):/usr/src/app -u $(id -u):$(id -g) -p 3000:3000 --name meu-app app/node
```
