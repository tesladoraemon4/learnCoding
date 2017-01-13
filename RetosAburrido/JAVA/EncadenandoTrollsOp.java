
import java.util.*;
public class EncadenandoTrollsOp{

	public 
	int cont=0;



	EncadenandoTrollsOp(){

	}

	public int getNumVeces(){
		return cont;
	}



	public void partirCadena(double eslabones, double fuerzaH,double fuerzaE){
		double cadenaLigera = 0, cadenaPesada = 0;
		if(eslabones <= fuerzaH || eslabones <= fuerzaE){
		}else{

			cont++;

			cadenaLigera = Math.floor( eslabones / 3 );

			cadenaPesada = eslabones - cadenaLigera;

			System.out.println("cadena ligera "+cadenaLigera);

			System.out.println("cadena pesada "+cadenaPesada);


			

			partirCadena(cadenaLigera,fuerzaH,fuerzaE);

			partirCadena(cadenaPesada,fuerzaH,fuerzaE);

			

		}
	}


}