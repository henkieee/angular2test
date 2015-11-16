(function()
{

  var AppComponent = ng
    .Component({
      selector: 'my-app',
      template: '<h1>{{ test }} is on the RUNNNN {{ tictac }}</h1><br /><button on-click="onClick($event, tictac)">Click me!</button>'
    })
    .Class({
      constructor: function ()
      {
        var self = this;
        self.test = 'Angular 2';
        self.tictac = 0;

        setInterval(function ()
        {
          self.tictac++;
        }, 1000)
      },
      onClick: function (event, value)
      {
        console.error('event', event);
        console.error('value', value);
      }
    })

  document.addEventListener('DOMContentLoaded', function ()
  {
    ng.bootstrap(AppComponent);
  });

})();