
import java.util.*;

public class SumarRecursivas{
	public static void main(String[] args) {

			Scanner s = new Scanner(System.in);

		System.out.println("introduce el entero 1");
		int x = s.nextInt();

		
		System.out.println("introduce el entero 2");
		int y = s.nextInt();

		System.out.println(sumar(x,y));
		

		
	}


	public static int sumar(int x, int y){


		if(x==0){
			return y;
		}else if(y==0){
			return x;
		}else{
			//Se reduce a 0 para retornar el 
			//valor de x
			int suma = sumar(x,y-1);
			System.out.println("valor de sumar "+suma);

			int retorno = suma+1;
			System.out.println("Retorno "+retorno);

			
			return retorno;
		}

	}


}