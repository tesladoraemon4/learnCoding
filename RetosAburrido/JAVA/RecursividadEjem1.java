public class RecursividadEjem1{

	public static void main(String[] args) {
	

		cuentaAtras(Long.parseLong(args[0]));




	}



	public static void cuentaAtras(long numero){


		if(numero == 0){
			System.out.println("Terminanos");
		}else{
			System.out.println(numero);
			cuentaAtras(numero - 1);
		}


	}
}