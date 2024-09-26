# Pokedex

## Instrucciones para comenzar
1. Una vez clonado el repositorio el primer paso es instalar las dependencias necesarias para el proyecto usando el comando `npm install`
2. Ya instaladas las dependencias, el proyecto puede correr de forma local con el comando `ng serve` o `npm run start`

## Descripción del proyecto e instrucciones de uso
- La Pokedex muestra pokemones ordenados por región habiendo 10 en cada una
- Al seleccionar un pokemon se muestran sus detalles
- En la barra de búsqueda, al introducir el nombre de un pokemon y hacer click en el botón de buscar se muestra la información sobre ese pokemon
- La búsqueda puede ser de cualquier pokemon proporcionado por la PokeAPI y no está limitada a los pokemones mostrados en el inicio

## Ajustes opcionales
- Por simplicidad, sólo se muestran 10 pokemones por región, pero este número puede ser ajustado modificando la variable `pokemonsNumber` en src/app/components/pokedex/pokedex.component.ts
