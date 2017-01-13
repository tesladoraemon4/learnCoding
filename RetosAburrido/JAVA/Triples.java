import java.util.*;

public class Triples{

	public static void main(String[] args) {
		

		for (double a=1 ; a<=500; a++) {
			for (double b=1 ; b<=500; b++) {
				for (double c=1 ; c<=500; c++) {
					
					if(esTriangulo(a,b,c)){
						System.out.println("Lado 1 = "+a+" Lado 2 = "+b+" Lado 3 = "+c);
					}
				}	
			}	
		}	

	}




	public static boolean esTriangulo(double a,double b,double c){
		boolean bandera=false;
		a = Math.pow(a,2);

		b = Math.pow(b,2);

		c = Math.pow(c,2);

		b=b+c;

		if(a == b){
			bandera = true;
		}

		return bandera;
	}
}

