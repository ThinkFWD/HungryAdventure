const scrapeIt = require('scrape-it');

module.exports = {
  scrape(req, res) {
    const city = req.query.location || 'new york city';
    let results;
    scrapeIt(`https://www.viator.com/search/${city}/1?TOPX=1-15&section=ttd&sortBy=RELEVANCE`, {
      pages: {
        listItem: '.media',
        data: {
          title: '.product-title > a',
          price: '.price-amount',
          count: '.count',
          rating: {
            selector: '.unit.mrs',
            attr: 'alt',
          },
          reviews: {
            selector: '.man.mts.line.xsmall > a',
            attr: 'href',
          },
          image: {
            selector: '.img-rounded',
            attr: 'src',
          },
          url: {
            selector: 'a',
            attr: 'href',
          },
        },
      },
    }).then((page1) => {
      results = page1.pages;
      scrapeIt(`https://www.viator.com/search/${city}/2?TOPX=16-30&section=ttd&sortBy=RELEVANCE`, {
        pages: {
          listItem: '.media',
          data: {
            title: '.product-title > a',
            price: '.price-amount',
            count: '.count',
            rating: {
              selector: '.unit.mrs',
              attr: 'alt',
            },
            reviews: {
              selector: '.man.mts.line.xsmall > a',
              attr: 'href',
            },
            image: {
              selector: '.img-rounded',
              attr: 'src',
            },
            url: {
              selector: 'a',
              attr: 'href',
            },
          },
        },
      }).then((page2) => {
        const link = 'https://www.viator.com';
        results = results.concat(page2.pages);
        for (let i = 0; i < results.length; i += 1) {
          if (results[i].rating) {
            results[i].rating = Number(results[i].rating.slice(0, 1));
            results[i].reviews = link.concat(results[i].reviews);
          }
          results[i].url = link.concat(results[i].url);
          !results[i].count ? results[i].count = 0 : results[i].count = Number(results[i].count.replace(/\D/g,''));
          !results[i].price ? results[i] = '' : results[i].price = Number(results[i].price.replace(/[^\d.]/g, ''));
        }
        results = results.filter(str => /\S/.test(str));
      }).then(() => {
        results.splice(28, 2);
        results.forEach(result => result.image = result.image.replace('thumbs210x118', 'thumbs674x446'));
        res.send(results);
      });
    });
  },
};
