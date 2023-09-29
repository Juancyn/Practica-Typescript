import { empleado } from "./empleado";
import { estudiantes } from "./estudiantes";
import { personal_Servicio } from "./personalServicio";
import { profesores } from "./profesores";
import {persona } from "./Persona";

 const personal_Servicio1 = new personal_Servicio("José", "Ponce" , 1312678789 , "Soltero" , 2019 , 4 , "Bar");
 const estudiantes1 = new estudiantes("Mathias", "Cevallos", 1345989807, "Soltero","Sexto Básica A");
 const profesores1 = new profesores ("Sophia", "Fernadez", 1300195460, "Casada", 2009, 2,"Educación Fisica",);

 personal_Servicio1.cambiar_seccion_Asignado("Biblioteca C");
 personal_Servicio1.imprimirpersonServicio()
 estudiantes1.matriculacion_Estudiante("Quinto Básica D");
 estudiantes1.imprimirEstudiante()
 profesores1.cambiar_Departamento("Biología");
 profesores1.imprimirProfesor()
