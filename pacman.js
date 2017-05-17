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
		[5, 99, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6, 6, 6, 8, 6, 6, 6, 6, 3],
		[5, 6, 7, 6, 6, 8, 6, 6, 6, 6, 6, 6, 7, 6, 8, 6, 6, 6, 6, 3],
		[5, 6, 6, 6, 6, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3],
		[5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3],		
		[5, 6, 6, 6, 7, 8, 6, 6, 7, 6, 6, 6, 7, 6, 8, 6, 6, 6, 6, 3],
		[5, 6, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6, 6, 6, 8, 6, 6, 6, 6, 3],
		[1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1]
	];

	//use x and y to track where pacman is on the board
	var y=1
	var x=1

	//use points to track the players points based on eating dots or coins
	var points=0

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
				else if(board[i][c] == 7){
					boardHTMLstr += "<div class='board coin'><img src='./images/coin.gif'></div>"
				}
				else if(board[i][c] == -1){
					boardHTMLstr += "<div class='board blank'></div>"
				}
				else if(board[i][c] == 8){
					boardHTMLstr += "<div class='board verticalWall'><p></p></div>"
				}
				else if(board[i][c] == 9){
					boardHTMLstr += "<div class='board horizontalWall'></div>"
				}
				else if(board[i][c] == 99){
					boardHTMLstr += "<div class='board pacman'><img src='./images/pacman.gif'></div>"
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

		document.onkeydown = function(e){
		move(e);

	}

	});

	
	//function to increment the count based on coin or not coin (an item can be coin, dot, blank)
	function updateScore(x,y){
		var item=board[y][x]

		if(item==7){//coin
			points+=50;
		}else if(item==6){//dot
			points+=1;
		}else if(item==-1){//blank
			points+=0;
		}
		//update score
		$('label#Score').html(`<label id="Score" style="font-size: x-large; font-style: Sans">${points}</label>`)
		//<label id="Score" style="font-size: x-large; font-style: Sans">0</label>
	}

    function chomp(){
    	var temp = $('#pacman img').attr("src")
		$('#pacman img').attr("src",$('#pacman img').attr("alt2"))
		$('#pacman img').attr("alt2",temp)
    }

    function updateLocation(position){
    	//This function will update the location of pacman each time he moves. This also does
    		//not allow pacman outside the bounds

    	//if x=0, user can not move left
    	//if y=0, user can not move up
    	//if x==board[0].length-1, user can not move right
    	//ify==board.length-1, user can not move down
    	//also can't let pacman move if he will be walking into a vertical or horizontal wall
    	//var pacPosition=board[y+1][x+1];
    	for(var i=0; i<board.length; i++){
    		for(var t=0; t<board[0].length; t++){
    			if(board[i][t] == 99){
    				x=t
    				y=i
    			}
    		}
    	}

    	//move pacman by setting where he is to -1 and where he is going to to 99
    	

    	if(position=="right" && board[y][x+1]!=8 && board[y][x+1]!=1 && board[y][x+1]!=2 && board[y][x+1]!=3 && board[y][x+1]!=4 && board[y][x+1]!=5){
    		updateScore(x+1,y)
    		board[y][x+1] = 99
    		board[y][x] = -1
    		
    	}

    	if(position=="left" && board[y][x-1]!=8 && board[y][x-1]!=1 && board[y][x-1]!=2 && board[y][x-1]!=3 && board[y][x-1]!=4 && board[y][x-1]!=5){
    		updateScore(x-1,y)
    		board[y][x-1] = 99
    		board[y][x] = -1
    	}

    	if(position=="up" && board[y-1][x]!=8 && board[y-1][x]!=1 && board[y-1][x]!=2 && board[y-1][x]!=3 && board[y-1][x]!=4 && board[y-1][x]!=5){
    		updateScore(x,y-1)
    		board[y-1][x] = 99
    		board[y][x] = -1
    		
    	}

    	if(position=="down" && board[y+1][x]!=8 && board[y+1][x]!=1 && board[y+1][x]!=2 && board[y+1][x]!=3 && board[y+1][x]!=4 && board[y+1][x]!=5){
    		updateScore(x,y+1)
    		board[y+1][x] = 99
    		board[y][x] = -1
    	}
    }

    function updateBoard(){
    	$('#board').html(buildBoardStr(board));
    }

 

    function move(e){
    			//left
		if(e.keyCode == 37 && updateLocation("left") != false){
			updateBoard();
			
		}
		//right
		else if(e.keyCode == 39 && updateLocation("right") != false){
			updateBoard();
		}
		//up
		else if(e.keyCode == 38 && updateLocation("up") != false){
			updateBoard();
		}
		//down
		else if(e.keyCode == 40 && updateLocation("down") != false ){
			updateBoard();
		}
    }

	
