                 var m,n;
                 n=Math.floor((Math.random()*6))+1;
                                                    // adding one because range from1 to 6
                 m=Math.floor((Math.random()*6))+1;


            	 if( n === m )
            	 {
            	 	document.querySelector("h1.diceresult").innerHTML="&#128400 Draw";
            	 }
            	 else if( n > m)
            	 {
            	 	document.querySelector("h1.diceresult").innerHTML="&#128681 Player 1 is Win";
            	 }

            	  else
            	 {
            	 	document.querySelector("h1.diceresult").innerHTML="&#128681 Player 2 is Win";
            	 }

                  var randomImage1 = "d" + n + ".png" ;

                  var ranImageSource = "images/" +  randomImage1 ;  // images / dice

                  var image1 = document.querySelectorAll("img")[0];   // we select query selector ALL because we have two img to change it

                  image1.setAttribute("src",ranImageSource);   // for set image to the sourse


                  var randomImage2 ="d" + m + ".png" ;

                  var ranImageSource2 = "images/" +  randomImage2;

                  var image2 = document.querySelectorAll("img")[1];

                  image2.setAttribute("src",ranImageSource2);
