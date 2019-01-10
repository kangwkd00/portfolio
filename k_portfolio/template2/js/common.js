// menu
$(document).ready(function(){
	$('#header .lnb').hide();
	$('.btn_nav').click(function(){
		$('#header .lnb').slideToggle(500);
	})

})

function initialize() {

		var myLatlng = new google.maps.LatLng(37.5148743,127.5864929);		// 지도에 표시할 위치좌표

		var mapOptions = {

			zoom : 17,

			center : myLatlng,

			mapTypeId : google.maps.MapTypeId.ROADMAP

		}

		var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

		var companyIcon = new google.maps.MarkerImage(				// 표시하고 싶은 로고이미지

				   "/img/logo.png",

				   new google.maps.Size(128, 81)

				);

		var marker = new google.maps.Marker({

			position : myLatlng,

			icon : companyIcon,

			map : map,

			title : "timecoms"

		});

	}


