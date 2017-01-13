#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

#define MAXLENG 10

int probandoExtern(void);
int probando=0;

int main() {
	
	extern int probando;
	probando = 20;
	printf("el valor de extern antes de entrar es = %d \n",probando);
	
	
	probandoExtern();
	
	
	printf("el valor de extern despues de salir de la funcion es = %d \n",probando);
	/*
	char entrada [MAXLENG];
	int x=0,contador=0;
	
	scanf("%s",entrada);
	
	
	
	
	printf("%s",entrada);
		
		
	for(x = 0; x < MAXLENG; x++){
		
		if(entrada[x]=='\0'){
			
		   printf("hay %d final de linea",contador);
		   contador++;
		}
		
		printf("%c",entrada[x]);
		
		
	}
	*/
	
	return 0;
}
int probandoExtern(void){
	
	extern int probando;
	printf("el valor de extern en la funcion primera es = %d \n",probando);
	probando =10;
	printf("el valor de extern en la funcion segunda es = %d \n",probando);
	
	
	
}



