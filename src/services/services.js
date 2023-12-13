const url = "https://exercises-api-xbpi.onrender.com";
export async function fetchExercises() {
    

    const response = await fetch(`${url}/exercises`);
    if(!response.ok) {
        throw new Error("Couldn't fetch exercies, please try reloading the page")
    }
    const result = await response.json();
    return result;
}
export async function fetchBodyParts() {
    const response = await fetch(`${url}/bodyParts`);
    if(!response.ok) {
        throw new Error("Couldn't fetch bodyParts, please try reloading the page")
    }
    const result = await response.json();
    return result;
}
export async function fetchTargets() {
    const response = await fetch(`${url}/targets`);
    if(!response.ok) {
        throw new Error("Couldn't fetch targets, please try reloading the page")
    }
    const result = await response.json();
    return result;
}

export async function fetchExercise(id) {
    const response = await fetch(`${url}/exercises/${id}`);
    if(!response.ok) {
        throw new Error("Couldn't fetch exercise, please try reloading the page")
    }
    const result = await response.json();
    return result;
}
