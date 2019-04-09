app.set("view engine","pug");
app.set("view","./view");

app.get("/first_template",function(){
    res.render("/first_view");
})

app.listen(4545);