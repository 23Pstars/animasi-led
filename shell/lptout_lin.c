//      lptout.c
//      
//      Copyright 2011 Ahmad Zafrullah Mardiansyah <zaf@zaf-laptop>
//      
//      This program is free software; you can redistribute it and/or modify
//      it under the terms of the GNU General Public License as published by
//      the Free Software Foundation; either version 2 of the License, or
//      (at your option) any later version.
//      
//      This program is distributed in the hope that it will be useful,
//      but WITHOUT ANY WARRANTY; without even the implied warranty of
//      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//      GNU General Public License for more details.
//      
//      You should have received a copy of the GNU General Public License
//      along with this program; if not, write to the Free Software
//      Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
//      MA 02110-1301, USA.


#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/io.h>

#define base 0x378           /* printer port base address */

int main(int argc, char **argv){
	int value = atoi(argv[1]);
	if (ioperm(base, 1, 1)){
		printf("Can not access port %x with bit %s\n", base, argv[1]);
	} else {
		/* outb(value, base); */
		printf("%i bit value sent successful to Micro Controller!\n", value);
	}
	return 0;
}
