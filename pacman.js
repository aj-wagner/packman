	// //key
	// 1 == corner ==> board
	// 2 == top wall ==> board wallTop
	// 3 == right wall ==> board wallRight
	// 4 == bottom wall ==> board wallBottom
	// 5 == left wall ==> board wallLeft
	// 6 == coin
	// 0 == pacman

	var board = [
		[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
		[5, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3],
		[5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3],
		[5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3],
		[5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3],		
		[5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3],
		[5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3],
		[1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1]
	];

	function buildBoardStr(board){
		var boardHTMLstr = "";
		
		for(var i=0; i<board.length;i++){
			boardHTMLstr += "<div class='row'>";

			for(var c=0;c<board[i].length;c++){
				if(board[i][c] == 1){
					boardHTMLstr += "<div class='board corner'></div>"
				}
				else if(board[i][c] == 2){
					boardHTMLstr += "<div class='board wallTop'></div>"
				}
				else if(board[i][c] == 3){
					boardHTMLstr += "<div class='board wallRight'></div>"
				}
				else if(board[i][c] == 4){
					boardHTMLstr += "<div class='board wallBottom'></div>"
				}
				else if(board[i][c] == 5){
					boardHTMLstr += "<div class='board wallLeft'></div>"
				}
				else if(board[i][c] == 6){
					boardHTMLstr += "<div class='board dot'>&#176;</div>"
				}
				else{
					boardHTMLstr += "<div id='pacMan'></div>"
				}
			}
			boardHTMLstr += "</div>";
		}

		return boardHTMLstr;
	}
		$(document).ready(function(){
			$('#wrapper').html(buildBoardStr(board));
		});