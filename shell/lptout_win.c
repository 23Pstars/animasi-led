#include "conio.h"
#include "stdio.h"
#include "string.h"
#include "stdlib.h"

#define base 0x378

int main(int argc, char* argv[]){
	int value = atoi(argv[1]);
	_outp(base, value);
   printf("%i bit value sent successful to Micro Controller!\n", value);
	return 0;
}
