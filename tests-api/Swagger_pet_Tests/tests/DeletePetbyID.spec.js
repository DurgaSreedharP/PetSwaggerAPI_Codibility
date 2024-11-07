import { deletePet,petID } from '../utils/petstoreURL';
import { test, expect, } from '@playwright/test';

test('TC6: Delete the Pet by ID',async({request})=>{
  const baseurl = deletePet;
  const ID = petID;
  const url = `${baseurl}/${ID}`;
  const response = await request.delete(url);

  if (response.ok()) {
    const pets = await response.json();
    expect(pets.type).toBe('unknown');
    console.log("Pet Type is :"+pets.type)
  } else {
    console.log(`Failed to fetch pets. Status code: ${response.status()}`);
  }
})