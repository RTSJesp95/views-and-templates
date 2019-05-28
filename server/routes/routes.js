module.exports = (app) => {
   app.get('/', (req, res, next) => {
      //Det er den der indlæser ejs-filen. Den leder endelig bare efter navnet
      res.render('home', {
         title: "Forside"
      });
   });

   app.get('/product', (req, res, next) => {
      res.render('product', {
         title: "Produktside"
      });
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact', {
         title: "Kontaktside"
      });
   });

   app.get('/images', (req, res, next) => {
      res.render('images', {
         title: "Billedside"
      });
      //Send gør at man kan sende noget direkte til hjemmesiden
      // res.send('images');
   });
};