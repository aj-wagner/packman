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
		[5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3],
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
				//else{
				//	boardHTMLstr += "<div id='pacMan'></div>"
				//}
			}
			boardHTMLstr += "</div>";
		}

		return boardHTMLstr;
	}
	
	$(document).ready(function(){
		$('#board').html(buildBoardStr(board));
	});

	function collisionDetection(pos){
        //check pac man coordinates
        var coor = $('#pacman img').position()
        if(pos=="left" && coor.left<306){
            return false
        }else if(pos=="right" && coor.left>898){
            return false
        }else if(pos=="up" && coor.top<78){
            return false
        }else if(pos=="down" && coor.top > 360){
            return false
        }else{
            return true;
        }                
    }

	document.onkeydown = function(e){
		//35 LR
		//55 U&D
		console.log($('#pacman img').position().left);
		//left
		if(e.keyCode == 37 && collisionDetection('left')){
			$('#pacman img').animate({"left": "-=350%" }, "slow");
		}
		//right
		else if(e.keyCode == 39 && collisionDetection('right')){
			$('#pacman img').animate({"left": "+=350%" }, "slow");
		}
		//up
		else if(e.keyCode == 38 && collisionDetection('up')){
			$('#pacman img').animate({"top": "-=12.5%" }, "slow");
		}
		//down
		else if(e.keyCode == 40 && collisionDetection('down')){
			$('#pacman img').animate({"top": "+=12.5%" }, "slow");
		}
	}


	