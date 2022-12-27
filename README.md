# Bem vindo(a) ao projeto Lista de Series

## Para rodar este projeto na sua máquina utilizando o docker, siga estes passos:

```
git clonde https://github.com/eduardo-de-carvalho-couto/lista-de-series-com-react
```

```
docker build -t app/node .
```

```
docker run -itv $(pwd):/usr/src/app -u $(id -u):$(id -g) -p 3000:3000 --name meu-app app/node
```
