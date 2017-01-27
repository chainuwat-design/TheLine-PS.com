window.onload = function() {
        
    var call = function(eName) {
        var name = document.getElementById(eName);
        return name;
    };
    
    var clickArr = [call('click1'),call('click2'),call('click3'),call('click4'),call('click5'),call('click6'),call('click7'),call('click8'),call('click9'),call('click10')];
    var hovArr = [call('hover1'),call('hover2'),call('hover3'),call('hover4'),call('hover5'),call('hover6'),call('hover7'),call('hover8'),call('hover9'),call('hover10')];
        
    $(clickArr[0]).mouseover(function() {
        $(hovArr[0]).show()
        $(clickArr[0]).mouseleave(function() {
        $(hovArr[0]).hide()
    })
    });
    
    $(clickArr[1]).mouseover(function() {
        $(hovArr[1]).show()
        $(clickArr[1]).mouseleave(function() {
        $(hovArr[1]).hide()
    })
    });
        
    $(clickArr[2]).mouseover(function() {
        $(hovArr[2]).show()
        $(clickArr[2]).mouseleave(function() {
        $(hovArr[2]).hide()
    })
    });
        
    $(clickArr[3]).mouseover(function() {
        $(hovArr[3]).show()
        $(clickArr[3]).mouseleave(function() {
        $(hovArr[3]).hide()
    })
    });
        
    $(clickArr[4]).mouseover(function() {
        $(hovArr[4]).show()
        $(clickArr[4]).mouseleave(function() {
        $(hovArr[4]).hide()
    })
    });      
    $(clickArr[5]).mouseover(function() {
        $(hovArr[5]).show()
        $(clickArr[5]).mouseleave(function() {
        $(hovArr[5]).hide()
    })
    }); 
        
    $(clickArr[6]).mouseover(function() {
        $(hovArr[6]).show()
        $(clickArr[6]).mouseleave(function() {
        $(hovArr[6]).hide()
    })
    });
        
    $(clickArr[7]).mouseover(function() {
        $(hovArr[7]).show()
        $(clickArr[7]).mouseleave(function() {
        $(hovArr[7]).hide()
    })
    });  
        
    $(clickArr[8]).mouseover(function() {
        $(hovArr[8]).show()
        $(clickArr[8]).mouseleave(function() {
        $(hovArr[8]).hide()
    })  
    }); 
        
    $(clickArr[9]).mouseover(function() {
        $(hovArr[9]).show()
        $(clickArr[9]).mouseleave(function() {
        $(hovArr[9]).hide()
    })  
    });

    }