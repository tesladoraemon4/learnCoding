import java.util.*;

/*
	DI INCREMENTOS A LAS VARIABLES Y SUBDIVIDI LOS STRINGS
	http://www.nachocabanes.com/retos/azar.php 

*/
public class RetoClaveMorse{
	public static void main(String args[]){

		Scanner ent=new Scanner (System.in);

		System.out.println("Introduce una palabra.");
		String palabra=ent.nextLine();

		System.out.println(convert(palabra));
		buscarComb(convert(palabra),palabra.length());

	}

	
	public static int buscarComb(String palaMorse, int tamPala){
		String alfabeto="abcdefghijklmnopqrstuvwxyz";
		String cves[]={".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.",
		"---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",};

		int contLet=0;
		boolean band=false;

			while(contLet < tamPala){

				for(int algo = 1 ; algo < 5; algo++){//da un cremento a la variable

					for ( int x = 0 ; x < palaMorse.length(); x=x+algo) {//recorre el string de las palabras
						//Separara digitos de las palabras primero de 1 en 1
						String raSep="";
						band=false;
						if((x+algo) <= palaMorse.length()){//comprueba si es mayyor al tamaño del string
							raSep = palaMorse.substring(x,x+algo);
						}else{//si es mayor 
							System.out.println("Salto 0");
							band=true;
							contLet=0;
							break;
						}



						System.out.println("buscando "+raSep);
						//buscando 
						for ( int y = 0 ; y < cves.length ; y++ ){
							if(cves[y].equals(raSep)){
								contLet++;//incrementa el contador de letras
								break;
							}
						}

					}
					
				}
				
				System.out.println("contlet "+contLet);

			}

		return 0;
	}





















	public static String convert(String pala){
		 String alfabeto="abcdefghijklmnopqrstuvwxyz";
		 String cves[]={".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.",
		"---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",};

		String cadNew="";
		for ( int x=0 ; x<pala.length() ; x++ ) {
			int posicion=alfabeto.indexOf(pala.charAt(x));
			cadNew=cadNew+""+cves[posicion];
		}

		return cadNew;
	}


}