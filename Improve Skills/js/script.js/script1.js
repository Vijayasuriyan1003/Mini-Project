<script>
    function login() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      
      // Add your own authentication logic here
      if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to another page or perform other actions
      } else {
        alert("Invalid username or password. Please try again.");
      }
    }
  </script>
