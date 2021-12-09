
## Running The App
To run the app, make sure you have Node installed in your machine.
```
npm install
npm start

cd src/refactored 
npm install
npm start
```

To run the refactored frontend via docker,
```
cd src/refactored 
sudo docker build -t refatored/website .
sudo docker run -d -p 80:80 refatored/website

# visit localhost
```

