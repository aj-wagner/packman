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

		//wall coordinates
		var wallTopCoor = $('.wallTop').position().top;
		var wallLowerCoor = $('.wallBottom').position().top;
		var wallLeftCoor = $('.wallLeft').position().left;
		var wallRightCoor = $('.wallRight').position().left;

        //check pac man coordinates
        var pacCoorLR = $('#pacman img').position().left;
        var pacCoorUD = $('#pacman img').position().top;


        if(pos=="left" && pacCoorLR-40< wallLowerCoor){
            return false
        }else if(pos=="right" && pacCoorLR+40>wallRightCoor){
            return false
        }else if(pos=="up" && pacCoorUD-58>wallTopCoor){
            return false
        }else if(pos=="down" && pacCoorUD+58<wallLowerCoor){
            return false
        }else{
            return true;
        }                
    }

	document.onkeydown = function(e){
		//35 LR
		//55 U&D

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
			$('#pacman img').animate({"top": "-=550%" }, "slow");
		}
		//down
		else if(e.keyCode == 40 && collisionDetection('down')){
			$('#pacman img').animate({"top": "+=550%" }, "slow");
		}
	}

