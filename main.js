

           var h = 0;
           var m = 0;
           var s = 0;
           var ms = 0;
           var x;
        function start(){
           ms++;    
            if ( ms === 100 ) {ms = 0; s++; } 
            if ( s === 60 ) { s = 0; m++; }
                if ( m === 60 ) { m = 0; h++; } 
                document.getElementById("hour").innerText = h;
                document.getElementById("minute").innerText = m;
                document.getElementById("second").innerText = s;
                document.getElementById("milisecond").innerText = ms;
                }
                function timer(){
                    document.getElementById("start").innerText = 'Start';
                    x = setInterval(start, 10);
                }

                    function reset(){
                        location.reload();}

                    function stop(){
                        clearTimeout(x);
                        document.getElementById("start").innerText = 'Resume';
                    }