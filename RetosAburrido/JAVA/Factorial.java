import java.util.*;


public class Factorial{
	/*
	public static void main(String[] args) {
		Scanner s = new Scanner (System.in);
		System.out.println("doubleroduce el numero");

		double numero_fac = s.nextDouble();
		double multiplicacion=1;

		for (double x = numero_fac; x > 0 ; x--) {

			System.out.println("sdghsdf el numero");

			multiplicacion = multiplicacion * x;
			
		}



		System.out.println("Resultado del Factorial es "+multiplicacion);
	}	
	*/
	public static void main(String[] args) {
		Scanner s = new Scanner (System.in);
		System.out.println("doubleroduce el numero");

		long numero_fac = s.nextLong();


		System.out.println(factorial(numero_fac));



	}



	public static long factorial(long x){
		if(x==0 || x==1){
			return 1;
		}else{
			return x * factorial(x-1);
		}
	}



}