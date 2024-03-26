<template>
    <div class="container">
        <sidebar />
        <div class="box1 glass">
                <h1> sono il form di registrazione </h1>
                <h2> sono il sottotitolo del form del for di registrazione</h2>
                <p> sono un breve paragrafo di due frasi introduttive</p>
                <nuxt-link to="/login"  class="nav"><button class="button prm" type="button"> submit </button></nuxt-link>

                <nuxt-link to="/register"  class="nav"><button class="button scd" type="button"> annulla </button></nuxt-link>
        </div>
    </div>
</template>

<style scoped>
         .container {
             display: flex;
             align-items: center;
         }

         .button {
             padding: 8px;
             margin: 8px;
             border-radius: 8px;
             border-style: none;               
         }

         .prm {
             background-color: rgb(48, 101, 227);
             color: rgb(250, 253, 255);
             padding: 2% 4%;
         }

         .scd {
             background-color:rgb(250, 253, 255);
             color:rgb(10, 10, 10);
             padding: 2% 4%;
         }

         h1, h2, p, input {
                 color: rgb(53, 53, 53);
         }
         
         h1 {
             font-size: 48px;
             font-family: "Montserrat", sans-serif;
             font-weight: 800;
         }

         h2 {
             font-size: 24px;
             font-family: "Montserrat", sans-serif;
             font-weight: 600;
         }

         p {

             font-family: "Hind", sans-serif;
             font-weight: 300;
             font-style: normal;
         }

         .box1 {   
                position: absolute;
                left: 50%;
                width: 600px;
                padding: 1%;
         }

         .glass {
             background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
             backdrop-filter: blur(10px);
             -webkit-backdrop-filter: blur(10px);
             border-radius: 8px;
             border:1px solid rgba(255, 255, 255, 0.18);
             box-shadow: 0 8px 32px 0 rgba(58, 58, 58, 0.37);
             left: 35%;
         }


         input {
             border: 1px solid #b9b9b9;
             border-radius: 4px;
             padding: 16px 8px 16px 8px;
             background-color: rgb(17, 17, 17);

         } 


</style>