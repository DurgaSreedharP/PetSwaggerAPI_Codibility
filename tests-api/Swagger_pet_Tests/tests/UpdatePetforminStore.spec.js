import { UpdatePetwithFormData } from '../utils/petstoreURL';
import { updateExistingPetforminStore } from '../utils/Testdata_UpdatePetforminStore';
import { test, expect, } from '@playwright/test';

test('TC5: Update existing Pet form in store with required fields  ',async({request})=>{
    const response=await request.post(UpdatePetwithFormData,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
       
          },
          data: JSON.stringify(updateExistingPetforminStore)
         
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
        expect(Category_PetName).toBe('AlaskaBreed');
        console.log("Updated Category.Name is : " +Category_PetName);

        const strPetstatus=data.status;
        expect(strPetstatus).toBe('pending');
        console.log("Updated Pet status is : " +strPetstatus);
    })