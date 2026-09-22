function firstPromise(resp){
                return resp.json();

            }
            function theEdit(edit){
                if(edit.status.toLowerCase()=="fail"){
                    document.getElementById("errorMsg").innerHTML='<h3>Message:</h3>'+
                                                                    '<p id="error">Sorry Booke Not Found</p>';
                    document.getElementById("title").innerText="";
                    document.getElementById("author").innerText="";
                    document.getElementById("desc").innerText="";


                }else{
                /*document.querySelector("h1").innerHTML=edit;*/
                document.getElementById("title").innerText=edit.title;
                document.getElementById("author").innerText=edit.author;
                document.getElementById("desc").innerText=edit.description;
                document.getElementById("errorMsg").innerHTML="";

                }


            }
            function controller(evnt){
                evnt.preventDefault();
            
                let val=document.getElementById("q1").value;
                let url="bookSearch?query="+val;
                console.log(url);
                let prom=fetch(url);
                let prom2=prom.then(firstPromise);
                prom2.then(theEdit);


                 
                
                console.log(val);
                
                

            }
            document.getElementById("sub").addEventListener("submit",controller);


           