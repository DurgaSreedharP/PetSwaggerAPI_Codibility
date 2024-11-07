import { addPetApi } from '../utils/petstoreURL';
import { ValidAddNewPet } from '../utils/Testdata_AddNewPet';
import { test, expect, } from '@playwright/test';

test('TC1: Add pet with required fields  ',async({request})=>{
    const response=await request.post(addPetApi,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'       
          },
          data: JSON.stringify(ValidAddNewPet)
         
        })
        console.log(response.status(),await response.text());
      expect(response.ok()).toBeTruthy()
      const data = await response.json();

      //validations
      expect(typeof data.category.id).toBe('number');
      const petID = data.id;
      expect(petID).toBe(35798908);
      console.log("Pet ID is : " +petID);

      const Category_PetName=data.category.name;
      expect(Category_PetName).toBe('pet_CategoryName');
      console.log("Category.Name is : " +Category_PetName);

      const strPetName=data.name;
      expect(strPetName).toBe('doggie');
      console.log("Pet Name is : " +strPetName);
    })