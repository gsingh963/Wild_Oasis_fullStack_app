import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabin's Data could not be found");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  // https://udoxzxydwtwbtddlqouh.supabase.co/storage/v1/object/public/cabins-img/cabin-001.jpg

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins-img/${imageName}`;
  // 1) Create/Edit Cabin
  let query = supabase.from("cabins");

  // A) Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) Edit
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabin's Data could not be created");
  }
  // 2) Upload Image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabins-img")
    .upload(imageName, newCabin.image);

  //3) Delete the cabin  Tf there is an error uploading the image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);

    console.log(storageError);
    throw new Error(
      "Cabin's Image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabins(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin's Data could not be found");
  }
}
