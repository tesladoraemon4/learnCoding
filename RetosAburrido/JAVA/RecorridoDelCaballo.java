


public class RecorridoDelCaballo{
	public static void main(String[] args) {
		int horizontal [] = {2,1,-1,-2,-2,-1,1,2};
		int vertical [] = {1,2,2,1,-1,-2,-2,-1};


		int tablero[][] = new int[8][8];
		for (int x=0; x<tablero.length ; x++) {
			for (int y=0; y<tablero.length ; y++) {
				tablero[x][y] = 0;
			}
		}
		//posiciones actuales
		int posX = 0;
		int posY = 0;

		
		tablero[0][0] = 1;




		if(comprobarMovimiento(tablero,movX,movY))
		{



		}




	}

	//antes de usarlo pasar solo la posicion en la que estara el caballo
	public static boolean comprobarMovimiento(int [][] tablero, int movX, int movY){
		boolean puedo=false;


		if(movX < 8 && movY < 8){
			//sacamos el valor de la posicion que se va a mover el caballo
			//0 no ha pasado y 1 ya paso
			int valor = tablero[movX][movY];

			if(valor == 0){//si ya paso
				puedo = true;
			}
		}

		return puedo;

	}





}