$(function() {
    Parse.$ = jQuery;
    Parse.initialize("UCfrO6M5Hwq4tVrX5oqBgSJqAQPpsegngPrFbYz7", "Wi7ougERpzhOdN9nUZvQ94fBGjeXLmzhpEhCZREt");
   
    $('.form-signin').on('submit', function(e) {
        //Prevent Default Submit Event
        e.preventDefault();
        
        //Get data from the form and put them into variables
        var data = $(this).serializeArray(),
            username = data[0].value,
            password = data[1].value;
        
        //Call Parse Login function with those variables
        Parse.User.logIn(username, password, {
            //if the username and password match
            success: function(user) {
                alert('Welcome!');
            },
            //if they do not match
            error: function(user, error) {
                console.log(error);
            }
        });
    });
    
    var LoginView = Parse.Veiw.extend({
        template: Handlebars.compile($('#login-tpl').html()),
        events: {
          'submit .form-signin': 'login'  
        },
        login: function(e) {
            //Prevent Defalut Submit Event
            e.preventDefault();
            
            //Get data from the form and put them into variables
            var data = $(e.target).serializeArray(),
                username = data[0].value,
                password = data[1].value;
            
            //Call Parse Login function with those variables
            Parse.User.logIn(username, password, {
               //if the username and password match
                success: function(user) {
                    var welcomeView = new WelcomeView({model: user});
                    welcomeView.render();
                    $('.main-container').html(welcomeView.el);
                },
                //if they do not match
                error: function(user, error) {
                    console.log(error);
                }
            });
        },
        render: function() {
            this.$el.html(this.template());
        }
    }),
        
    var loginView = new LoginView();
    loginView.render();
    $('.main-container').html(loginView.el);
        

    WelcomeView = Parse.View.extend({
        template: Handlebars.compile($('#welcome-tpl').html()),
        render: function() {
            var attributes = this.model.toJSON();
            this.$el.html(this.template(attributes));
        }
    });
    
});