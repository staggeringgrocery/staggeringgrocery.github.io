function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0zE2lqJJlKE6AmqNnlI6ord6QLlCKktlfyyuc2qsn8VD99Lr2LWQLfIYvB6uOtPQfmEhFZXteTIuF/pubhtml',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
