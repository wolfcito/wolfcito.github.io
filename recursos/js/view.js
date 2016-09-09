$(function(){
	$("#btn_acceder").click(function(){
		var usuario = $("#nameLogin").val();

		if(!validar(usuario)) {

			$("#imgMsn").html('<img src="recursos/img/msn.gif" width="100px">');
			$("#noNameLogin").css("display", "block");
			$("#noNameLogin").val("Oops algo anda mal!");
			
                        return false;
		}else{
			$("#imgMsn").html('<img src="recursos/img/msn1.gif" width="100px">');
			$("#noDist").css("display", "none");
			$("#frmLogin").delay(2000 ).fadeIn( 800 );
			$("#frmLogin").submit();
			console.log("Form enviado");
		}
		
	});
});

function validar(usuario)
{
	switch(usuario)
	{
		case "Luis":
			return true;
		break;
		case "Jenny":
			return true;
		break;
		default:
			return false;
		break;

	}
	return false;

}