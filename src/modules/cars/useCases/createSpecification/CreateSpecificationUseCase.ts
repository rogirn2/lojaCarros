/**
 * name - string
 * duration - number
 * educator - string
 */
 import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

 interface IRequest {
     name: string; 
     description: string;
 }
 
 class CreateSpecificationUseCase {
 
     private specificationRepository: ISpecificationsRepository;
 
     constructor(specificationRepository: ISpecificationsRepository) {
         this.specificationRepository = specificationRepository;
     }
 
     execute({ name, description }: IRequest): void {
 
         const specificationAlreadyExists = this.specificationRepository.findByName(name);
 
         if (specificationAlreadyExists) {
             throw new Error("Specification already exists!");
         }
 
         this.specificationRepository.create({ name, description });
     };
 }
 
 export { CreateSpecificationUseCase }