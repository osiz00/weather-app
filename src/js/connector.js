window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
   t.card('all').then(function(card) {
    console.log(card)
   })
    }})