const getPosts = async () => {
  try {
    const res = await fetch("/posts.json");
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
    return error.message;
  }
};

export { getPosts };
