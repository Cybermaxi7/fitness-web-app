export async function fetchExercises() {
    const url = "https://exercisedb.p.rapidapi.com/exercises?limit=1000";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "97cc3a8cb7msh46b82cd76a6714dp15431ejsn83232fa17d53",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
    };

    const response = await fetch(url, options);
    console.log(response);
    const result = await response.json();
    return result;
}
export async function fetchBodyParts() {
    const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "97cc3a8cb7msh46b82cd76a6714dp15431ejsn83232fa17d53",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
    };

    const response = await fetch(url, options);
    console.log(response);
    const result = await response.json();
    return result;
}
export async function fetchTargets() {
    const url = "https://exercisedb.p.rapidapi.com/exercises/targetList";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "97cc3a8cb7msh46b82cd76a6714dp15431ejsn83232fa17d53",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
    };

    const response = await fetch(url, options);
    console.log(response);
    const result = await response.json();
    return result;
}
