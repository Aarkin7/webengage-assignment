# WebEngage Assignment - Express CSV Generator

## Description
This project is an Express.js application that fetches data from three different API endpoints, processes the extracted values, writes them into a CSV file, and returns the file path.

### APIs Used:
1. **Users API**: https://jsonplaceholder.typicode.com/users  
   - Extracted field: `name`
2. **Posts API**: https://jsonplaceholder.typicode.com/posts  
   - Extracted field: `title`
3. **Comments API**: https://jsonplaceholder.typicode.com/comments  
   - Extracted field: `body`

Each row in the CSV file corresponds to an `id`, combining values from the different APIs.

## Installation & Setup
### Prerequisites
Ensure you have Node.js installed. You can check by running:
```sh
node -v
```

### Steps to Run
1. Clone the repository:
```sh
git clone https://github.com/Aarkin7/webengage-assignment.git
```
2. Navigate to the project folder:
```sh
cd webengage-assignment
```
3. Install dependencies:
```sh
npm install
```
4. Start the server:
```sh
node index.js
```

## Usage
Once the server is running, open your browser or use a tool like Postman to make a GET request:
```
http://localhost:3000/generate-csv
```
If successful, the response will contain the path to the generated CSV file.
![Screenshot from 2025-03-18 20-38-36](https://github.com/user-attachments/assets/f27d667e-bf8f-40d5-aa9e-8525e280d0b1)


