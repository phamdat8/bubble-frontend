<template>
    <div id="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-pink fixed-top">
            <div class="container-fluid">
                <div class="name-text">Bubble</div>
                <div class="d-flex">
                    <div class="button_container m-2">
                        <button class="btn-layout"><span>Đăng nhập</span></button>
                    </div>
                    <div class="button_container m-2">
                        <router-link to="/dangky"><button class="btn-layout"><span>Đăng ký</span></button></router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'Header'
    }


</script>
<style>
.name-text{
    color: white;
    text-shadow: 2px 2px 15px #ff003d;
    font-size: 60px;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
  }


.btn-layout {
  border: none;
  border-radius: 15px;
  display: block;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  background-color: #ff6395;
  padding: 15px 40px;
  margin: 0 auto;
  width: 190px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);

}

.btn-layout span {
  position: relative; 
  z-index: 1;
}

.btn-layout:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 490%;
  width: 140%;
  background: #78c7d2;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);
}

.btn-layout:hover:after {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
}

.link {
  font-size: 20px;
  margin-top: 30px;
}

.link a {
  color: #000;
  font-size: 25px; 
}



</style>