import { findPetByStatusApi,petStatus } from '../utils/petstoreURL';
//import { Validfindpetbystatus } from '../utils/Testdata_findbyStatus';
import { test, expect, } from '@playwright/test';

test('TC3: find pet by status with required fields',async ({request}) => {
  
  const baseurl = findPetByStatusApi;
  const status = petStatus;
 const url = `${baseurl}?status=${status}`;
  const response = await request.get(url);

  if (response.ok()) {
    const pets = await response.json();
    console.log(`Pets with status '${status}':`);
    console.log(pets);
  } else {
    console.log(`Failed to fetch pets. Status code: ${response.status()}`);
  }
});
