docker run -it --rm --name tour-of-heroes -v ${PWD}:/source -w /source -p 4200:4200 tour-of-heroes ng serve