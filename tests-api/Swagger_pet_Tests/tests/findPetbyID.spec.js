import { findPetById,petID } from '../utils/petstoreURL';
import { test, expect, } from '@playwright/test';

test('TC4: find pet by ID with required fields',async ({request}) => {
  
  const baseurl = findPetById;
  const ID = petID;
  const url = `${baseurl}/${ID}`;
  const response = await request.get(url);

  if (response.ok()) {
    const pets = await response.json();
    console.log(`Pets with status '${ID}':`);
    console.log(pets);
  } else {
    console.log(`Failed to fetch pets. Status code: ${response.status()}`);
  }
});
