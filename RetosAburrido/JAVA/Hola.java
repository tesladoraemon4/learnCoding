import java.util.*;
http://www.xvideos.com/video8712182/pechos
public class Hola{
	public static void main(String args[]){
		
		String h [] ;
		Scanner ent=new Scanner(System.in);
		System.out.println("Cuantos Elementos se analizaran");

		int elem = ent.nextInt();

		h = new String[elem];

		
		for (int y = 0; y < h.length ; y++) {

			System.out.println("Pasada "+y);
			if(y==0)
				h[y]=ent.nextLine();
			h[y]=ent.nextLine();
		}


		String [] pala=invertir(h);


		for (int x=0; x < pala.length; x++ ) {
			System.out.println(pala[x]);
		}


	}

	public static String [] invertir(String[]palabras){
		
		for (int x = 0; x < palabras.length ; x++) {
			String [] subPalabras=palabras[x].split(" ");


			if (subPalabras[0]!=null) {
				String [] aux=new String[subPalabras.length];//respaldar las subpalabras

				for (int y = 0; y < subPalabras.length ; y++) {

					System.out.println("aux["+y+"]= subPalabras["+(subPalabras.length-y-1)+"]");

					System.out.println(aux[y]+" = "+subPalabras[subPalabras.length-y-1]);
					aux[y] = subPalabras[subPalabras.length-y-1];
				
				}
				subPalabras=aux;
				palabras[x]="";

				for (int c = 0; c < subPalabras.length ; c++) {
					palabras[x]=palabras[x]+" "+subPalabras[c];
				}
			}



		}
		return palabras;
	}

}