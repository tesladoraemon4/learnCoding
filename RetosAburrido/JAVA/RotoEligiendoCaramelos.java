
import java.util.*;
import java.math;


public class RotoEligiendoCaramelos{
	public static void main(String[] args) {

			Scanner s = new Scanner(System.in);

		System.out.println("introduce los diferentes caramelos disponibles");
		int disp = s.nextInt();

		
		System.out.println("introduce el numero de caramelos que se van a regalar");
		int regalar = s.nextInt();
		


		System.out.println(" Respuesta: "+combinacion(disp,regalar));
		

		
	}



	public static double combinacion(int n,int r){

		long nFac = factorial(n);
		long nMenosRFac = factorial(n-r);
		long rFact = factorial(r);

		return nFac / (rFact*nMenosRFac);

	}

	public static long factorial(long x){
		if(x==0 || x==1){
			return 1;
		}else{
			return x * factorial(x-1);
		}
	}

	


}