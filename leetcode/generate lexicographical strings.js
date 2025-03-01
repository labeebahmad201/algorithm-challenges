function dfs(n, level, path, res) {
    if (level === n) { 
        // We've formed a complete word of length 'n', so we store it.
        // Without this, DFS would keep running indefinitely.
        res.push(path.join(""));
        return;
    }

    for (const letter of "ab") { // Try adding 'a' and 'b' lexicographically
        path.push(letter); // Add letter to the current path
        dfs(n, level + 1, path, res); // Recur to build the next level
        path.pop(); // Backtrack: Remove last letter to explore the next branch
    }
}