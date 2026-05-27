/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("products");

  const record0 = new Record(collection);
    record0.set("name", "Rich Dark Chocolate Brownie Slices");
    record0.set("price", 299);
    record0.set("category", "Brownie");
    record0.set("image_url", "https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/0f2d53c4ab814be7392cb96250cca508.jpg");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("name", "Pistachio Drizzle Chocolate Brownie");
    record1.set("price", 349);
    record1.set("category", "Brownie");
    record1.set("image_url", "https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/707770150bf9a2592a4fe571f20b0ae6.jpg");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("name", "Assorted Chocolate Brownies Platter");
    record2.set("price", 449);
    record2.set("category", "Brownie");
    record2.set("image_url", "https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/8fa97c3727e15b2615ed4b2811be40dd.jpg");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("name", "White Chocolate Drizzle Brownie");
    record3.set("price", 329);
    record3.set("category", "Brownie");
    record3.set("image_url", "https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/d9ccfd33f186cab6de7ee249cfd39eae.jpg");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("name", "Heart-Shaped Chocolate Truffles");
    record4.set("price", 399);
    record4.set("category", "Brownie");
    record4.set("image_url", "https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/7cbfbfd916fe3c1b782783045588e339.jpg");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("name", "Pistachio Drizzle Chocolate Bar");
    record5.set("price", 379);
    record5.set("category", "Brownie");
    record5.set("image_url", "https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/da84fdf3c47d03e4b10f19a6d50ab8cc.jpg");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("name", "Colorful Candy Donuts Jar");
    record6.set("price", 459);
    record6.set("category", "Chocolate");
    record6.set("image_url", "https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/59a1ba9db70f271c4bf617c7f696c162.jpg");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("name", "Dark Chocolate Pieces Choco Charm");
    record7.set("price", 389);
    record7.set("category", "Chocolate");
    record7.set("image_url", "https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/27c46d1734eb93090eeebf11ace5133f.jpg");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("name", "Green Pistachio Chocolate Bar");
    record8.set("price", 369);
    record8.set("category", "Chocolate");
    record8.set("image_url", "https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/d15b2c908c80e14ef7f6b27458bda12a.jpg");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("name", "Premium Dark Chocolate Choco Charm");
    record9.set("price", 419);
    record9.set("category", "Chocolate");
    record9.set("image_url", "https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/6af6af3ff873f6d06ba5f69423ecec1d.jpg");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})