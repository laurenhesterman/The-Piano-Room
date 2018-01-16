
var express = require( "express");
var path = require( "path");
var app = express();
var player = require('play-sound')(opts = {})
var howler = require("howler")
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);


io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    
    
    socket.on( "button1_clicked", function (){
        player.play('keys.mp3')       
        io.emit('server_response');
    })
    socket.on( "button2_clicked", function (){
         audio = player.play('song1.mp3')
        io.emit('server_response');
    })
    socket.on( "button3_clicked", function (){
        audio = player.play('bounce1.mp3')
        io.emit('server_response');
    })
    socket.on( "f_clicked", function (){
        player.play('f.wav')   
        var letter = "F "    
        io.emit( 'server_response0', letter);
    })
    socket.on( "gb_clicked", function (){
        player.play('gb.wav')
        var letter = "F♯/G♭  "        
        io.emit( 'server_response1', letter);
    })
    socket.on( "g_clicked", function (){
        player.play('g.wav')
        var letter = "G  "        
        io.emit( 'server_response2', letter);
    })
    socket.on( "a_clicked", function (){
        player.play('a.wav')
        var letter = "A  "        
        io.emit( 'server_response4', letter);
    })
    socket.on( "ab_clicked", function (){
        player.play('ab.wav') 
        var letter = "G♯/A♭  "       
        io.emit( 'server_response3', letter);
    })
    socket.on( "bb_clicked", function (){
        player.play('bb.wav') 
        var letter = "A♯/B♭  "       
        io.emit( 'server_response5', letter);
    })
    socket.on( "b_clicked", function (){
        player.play('b.wav') 
        var letter = "B  "       
        io.emit( 'server_response6', letter);
        })
    socket.on( "c_clicked", function (){
        player.play('c.wav')
        var letter = "C  "        
        io.emit( 'server_response7', letter);
    })
    socket.on( "db_clicked", function (){
        player.play('db.wav') 
        var letter = "C♯/D♭  "       
        io.emit( 'server_response8', letter);
    })
    socket.on( "d_clicked", function (){
        player.play('d.wav') 
        var letter = "D  "       
        io.emit( 'server_response9', letter);
    })
    socket.on( "eb_clicked", function (){
        player.play('eb.wav')
        var letter = "D♯/E♭  "        
        io.emit( 'server_response10', letter);
    })
    socket.on( "e_clicked", function (){
        player.play('e.wav')
        var letter = "E  "        
        io.emit( 'server_response11', letter);
    })
    socket.on( "f2_clicked", function (){
        player.play('f2.wav') 
        var letter = "F  "       
        io.emit( 'server_response12', letter);
    })
    socket.on( "gb2_clicked", function (){
        player.play('gb2.wav') 
        var letter = "F♯/G♭  "       
        io.emit( 'server_response13', letter);
    })
    socket.on( "g2_clicked", function (){
        player.play('g2.wav')
        var letter = "G "        
        io.emit( 'server_response14', letter);
    })
    socket.on( "ab2_clicked", function (){
        player.play('ab2.wav')
        var letter = "G♯/A♭  "        
        io.emit( 'server_response17', letter);
    })
    socket.on( "a2_clicked", function (){
        player.play('a2.wav') 
        var letter = "A  "       
        io.emit( 'server_response15', letter);
    })
    socket.on( "bb2_clicked", function (){
        player.play('bb2.wav')
        var letter = "A♯/B♭  "        
        io.emit( 'server_response18', letter);
    })
    socket.on( "b2_clicked", function (){
        player.play('b2.wav')
        var letter = "B  "        
        io.emit( 'server_response16', letter);
    })

  })   
