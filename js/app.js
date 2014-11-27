/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

article2 = $('.article-list').children();
article2.toggleClass('featured', false);

article3 = article2.siblings.next();
article3 = article3.toggleClass('featured');


var articleList, h1, kids, parents;

articleList = $('.article-list');
h1 = articleList.siblings('h1');
kids = articleList.find('*');
parents = articleList.parents('div');

var featured;
featured = $('featured');
featured.toggleClass('featured');
