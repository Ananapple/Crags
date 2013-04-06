define([
  // Application.
  'app',
  'collections/cragSet',
  'models/crag',
  'viewModels/cragOverviewView'
],

function(app, CragSet, Crag, CragOverviewView) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    
    routes: {
      '': 'indexAction',
      'crags/:id': 'cragAction'
    },

    indexAction: function() {
        
        // var crags = CragSet.create();
        // crags.fetch();

    },

    cragAction: function (id) {
        var crag = Crag.create(id);
        crag.fetch({
            success: function () {
                var cragOverviewView = CragOverviewView.create(crag);
                cragOverviewView.render()
                $('#main').html(cragOverviewView.el);
            }
        });
    },

  });

  return Router;

});