# React + Webpack 5 + Typescript 

## Info
```
    
    Typescript Type Declare
    - ./src/types/types.d.ts
```

## Scripts

```
    # package.json > scripts
    DevServer : webpack serve --config webpack.dev.js 
    - yarn start 
    Build : webpack --config webpack.prod.js
    - yarn build
    Standalone build : "docker build -t frontend:latest ."
    - yarn nginx:build
    Standalone Run :  "docker run -p 80:80 -v $PWD/log/nginx:/var/log/nginx frontend:latest"
    - yarn nginx:run
    Standalone Serve : "yarn nginx:build && yarn nginx:run"
    - yarn serve
```

## Support 
```
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "webpack" : "v5.38.1",
    "node-sass": "^6.0.0",
    Typescript -> ts-loader
    Style Sheet -> sass-loader 
    Media -> url-loader, file-loader
```