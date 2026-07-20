export async function fetchJson(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
}
