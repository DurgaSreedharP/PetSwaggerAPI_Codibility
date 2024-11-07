import { updateExistingPetdata } from '../utils/petstoreURL';
import { updateExistingPet } from '../utils/Testdata_UpdateExistingPet';
import { test, expect, } from '@playwright/test';

test('TC2: Update an existing Pet with required fields  ',async({request})=>{
    const response=await request.put(updateExistingPetdata,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
       
          },
          data: JSON.stringify(updateExistingPet)
         
        })
        console.log(response.status(),await response.text());
        expect(response.ok()).toBeTruthy()
        const data = await response.json();

       //validations
       expect(typeof data.category.id).toBe('number');
       const petID = data.id;
       expect(petID).toBe(1112);
       console.log("Updated Pet ID is : " +petID);

       const Category_PetName=data.category.name;
        expect(Category_PetName).toBe('Pet_CategtoryNameUpdated');
        console.log("Updated Category.Name is : " +Category_PetName);


        const strPetName=data.name;
        expect(strPetName).toBe('Alaska');
        console.log("Pet Name is : " +strPetName);
    })