//Reto del dia
//https://www.aceptaelreto.com/problem/statement.php?id=136
import java.util.*;
public class EncadenandoTrolls{

	int cont=0;

	public static void main(String[] args) {
		

		Scanner s = new Scanner(System.in);

		int fuerzaH=0,fuerzaE=0;

		System.out.println("Introduce la fuerza del hobbit ");

		fuerzaH = s.nextInt();

		System.out.println("Introduce el numero de eslabones");

		int eslabones = s.nextInt();

		fuerzaE = fuerzaH * 2;

		EncadenandoTrolls.EncadenandoTrollsOp op = new EncadenandoTrolls.EncadenandoTrollsOp();
		partirCadena(eslabones,fuerzaH,fuerzaE);
		System.out.println(this.cont);




	}

	public void partirCadena(double eslabones, double fuerzaH,double fuerzaE){
		double cadenaLigera = 0, cadenaPesada = 0;
		if(eslabones <= fuerzaH || eslabones <= fuerzaE){
		}else{

			this.cont++;

			cadenaLigera = Math.floor( eslabones / 3 );

			cadenaPesada = eslabones - cadenaLigera;

			System.out.println("cadena ligera "+cadenaLigera);

			System.out.println("cadena pesada "+cadenaPesada);


			

			partirCadena(cadenaLigera,fuerzaH,fuerzaE);

			partirCadena(cadenaPesada,fuerzaH,fuerzaE);

			

		}
	}



}

