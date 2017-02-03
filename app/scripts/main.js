
var serviceRoot = "https://jsonplaceholder.typicode.com";

(function loadPosts() {
	var resource = 'posts';
	$.get(serviceRoot+'/'+resource, function(resp){
		resp.forEach(function(post) {
			var comboElement = $('<option />');
			comboElement.attr('value', post.id).text('['+post.id + '] ' +post.title);
			$('#posts').append(comboElement);
		});
	})
	
})();

function loadPost(postId){
	console.log("loading post.."+postId);
	if(postId == '') {
		$('#postTitle').text('');
		$('#postBody').text('');
		$('#authorMail').text('');
		$('#post').hide();
		return;
	}
	
	$.get(serviceRoot+'/posts/'+postId, function(postResp) {
		var post = postResp;
		$.get(serviceRoot+'/users/'+post.userId, function(userResp) {
			var user = userResp;
			
			$('#postTitle').text(post.title);
			$('#postBody').text(post.body);
			$('#authorMail').text(user.email);
			$('#post').show();
			
		});
	})
	
}

