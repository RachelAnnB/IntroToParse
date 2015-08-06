$(function() {
    Parse.$ = jQuery;
    Parse.initialize("UCfrO6M5Hwq4tVrX5oqBgSJqAQPpsegngPrFbYz7", "Wi7ougERpzhOdN9nUZvQ94fBGjeXLmzhpEhCZREt");
    
    var Blog = Parse.Object.extend("Blog");
  
    var Blogs = Parse.Collection.extend({
        model: Blog        
    });
    
    var BlogsView = Parse.View.extend({
        template: Handlebars.compile($('#blogs-tpl').html()),
        render: function(){
            var collection = { blog: this.collection.toJSON};
            this.$el.html(this.template(collection));
        }
    });
    var blogs = new Blogs();    

    blogs.fetch({
        success: function(blogs) {
            var blogsView = BlogsView({ collection: blogs });
            blogsView.render();
            $('.main-container').html(blogsView.el);
        },
        error: function(blogs, error) {
            console.log(error);
    }
    });
    
});