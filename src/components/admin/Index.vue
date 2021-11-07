<template>
      <div id="admin">
			<Header />
			<div class="row main">
				<div class="col-3 p-0">
					<Menu />
				</div>
				<div class="col-9 p-0">
					<div class="data-box">
						<router-view></router-view>
					</div>
				</div>
			</div>
			<Footer />
      </div>
</template>

<script>
    import Header from '@/components/admin/layouts/Header';
    import Footer from '@/components/admin/layouts/Footer';
	import Menu from '@/components/admin/layouts/Menu';
    export default {
        name: 'admin',
        components: {
            Header,
            Footer,
			Menu,
        }
    }
</script>
<style>
	#admin{
		background-color: #131417;
	}
	.main{
		min-height: 900px;
	}
	.data-box{
		background-color: #212529;
        margin : 20px 20px 20px 0px;
        padding:  20px 80px 50px 80px;
        border-radius: 20px;
	}
	.data-name{
		color: white;
		font-size: 40px;
		text-align: center;
		font-weight: bold;
	}
	.table{
		font-size: 20px;
	}
	.item:hover{
        font-weight: bold;
        cursor: pointer;
    }



	.group 			  { 
		position:relative; 
		margin-bottom:45px;
    }
    input 				{
		font-size:18px;
		padding:10px 10px 10px 5px;
		display:block;
		width:100%;
		border:none;
		border-bottom:1px solid #757575;
		background-color: #212529;
		color: white;
    }
    input:focus {
		outline:none; 
    }
    /* LABEL ======================================= */
    label 				 {
    color:#999; 
    font-size:18px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:10px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
    }

    /* active state */
    input:focus ~ label, input:valid ~ label 		{
    top:-20px;
    font-size:20px;
    font-weight: bold;
    color: white;
    }

    /* BOTTOM BARS ================================= */
    .bar 	{ position:relative; display:block; width:100%; }
    .bar:before, .bar:after 	{
    content:'';
    height:2px; 
    width:0;
    bottom:1px; 
    position:absolute;
    background:white; 
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
    }
    .bar:before {
    left:50%;
    }
    .bar:after {
    right:50%; 
    }

    /* active state */
    input:focus ~ .bar:before, input:focus ~ .bar:after {
    width:50%;
    }

    /* HIGHLIGHTER ================================== */
    .highlight {
    position:absolute;
    height:60%; 
    width:100px; 
    top:25%; 
    left:0;
    pointer-events:none;
    opacity:0.5;
    }

    /* active state */
    input:focus ~ .highlight {
    -webkit-animation:inputHighlighter 0.3s ease;
    -moz-animation:inputHighlighter 0.3s ease;
    animation:inputHighlighter 0.3s ease;
    }

    /* ANIMATIONS ================ */
    @-webkit-keyframes inputHighlighter {
        from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
    }
    @-moz-keyframes inputHighlighter {
        from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
    }
    @keyframes inputHighlighter {
        from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
    }


</style>