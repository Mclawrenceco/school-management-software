document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    const name = document.getElementById('student-name').value;
    const age = document.getElementById('student-age').value;
    const studentClass = document.getElementById('student-class').value;
    
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `Name: ${name}, Age: ${age}, Class: ${studentClass}`;
    
    // Append the new list item to the students list
    document.getElementById('students-list').appendChild(li);
    
    // Clear the form
    document.getElementById('student-form').reset();
});