function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1VKP2y8QT1w1EUemWhM73LMyTiPSclb-6OJLy_wD9ukw/pubhtml',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
