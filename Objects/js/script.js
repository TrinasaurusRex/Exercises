$(document).ready(function() {
	console.log("ready to code");

	
	function Image(title, url, tags, starred) {
		this.title = title;
		this.url = "images/" + url;
		this.tags = tags;
		this.starred = starred;
		this.starToggle = function() {
		$("#" + this.title + " .star").toggleClass("starOn");
		this.starred = !this.starred; };
	}

	var img1 = new Image("Bouquet", "Bouquet.jpg", ["flower", "pink", "rose", "purple"], false)
	var img2 = new Image("Tree", "tree.jpg",["tree", "green", "landscape", "forest"], false)
	

	// var img1 = {
	// 	title:"Bouquet",
	// 	url: "images/Bouquet.jpg",
	// 	tags: ["flower", "pink", "rose", "purple"],
	// 	starred: false,
	// 	starToggle: function() {
	// 		$("#" + this.title + " .star").toggleClass("starOn");
	// 		this.starred = !this.starred;
	// 	}
	// };

	// var img2 = {
	// 	title:"Tree",
	// 	url: "images/tree.jpg",
	// 	tags: ["tree", "green", "landscape", "forest"],
	// 	starred: false,
	// 	starToggle: function() {
	// 		$("#" + this.title + " .star").toggleClass("starOn");
	// 		this.starred = !this.starred;
	// 	}
	// };

	var images = [img1, img2];

		images.forEach(function(img){

		var $fig = $("<figure>");
		$fig.attr("id", img.title);

		var $img = $("<img>");
		$img.attr("src", img.url);

		var $imgInfo = $("<figcaption>");
		$imgInfo.text("TAGS: " + img.tags[0] + ", " + img.tags[1] + ", " 
			+ img.tags[2]);

		var $star = $("<span>");
		$star.addClass("star");

		$imgInfo.append($star);

		$fig.append($img);
		$fig.append($imgInfo);

		$("#gallery").append($fig); 

		if (img.starred == true){
			img.starToggle();
		}

		$(".star").on("click", function() {
			var obj = $(this).parent().parent().get(0);

			if(obj.id == img.title){
				img.starToggle();
			}
			
		});

	});

	$("#filterFlower").on("click", function() { 
		filter("flower");
	});

	$("#filterTree").on("click", function() { 
		filter("tree");
	});

	$("#filterFav").on("click", function() { 
		filter(true)
	});
	
	function filter(tag) {
		images.forEach(function (img) {
			if($.inArray(tag, img.tags) >= 0){
				$("#" + img.title).fadeIn(); 
			} else if(img.starred == tag){
				$("#" + img.title).fadeIn(); 
			}else {
				$("#" + img.title).fadeOut(); 
			}
		});
	}
});