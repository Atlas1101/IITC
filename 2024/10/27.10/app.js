const fs = require('fs');

// Read a file

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    fs.writeFile('output.txt', data,"utf8", ((err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File written successfully');

        fs.appendFile("output.txt", "\n operation completed", "utf8", (err) => {
            if (err){
                console.error("somthing went wrong");
            
                
            }
            console.log("op completed successfully");
            
    })
}))
})

console.log("Hello, World!");

