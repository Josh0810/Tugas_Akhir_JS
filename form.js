function buat_login() {
  // Menghapus Button
  var remove = document.getElementById("X");
  remove.parentElement.removeChild(remove);

  // Added paragraf ke DIV
  var paragf = document.createElement("p");
  paragf.className = "tulisan_login";
  paragf.innerHTML = "silahkan mendaftar";
  var added = document.getElementsByTagName("div")[0];
  added.appendChild(paragf);

  // Added form ke DIV
  var form = document.createElement("form");
  added.appendChild(form);

  // Added label, input dan submit pada form
  // Nama User
  var label0 = document.createElement("label");
  label0.innerHTML = "Nama User";
  form.appendChild(label0);
  var inp_NamaUser = document.createElement("input");
  inp_NamaUser.type = "text";
  inp_NamaUser.name = "NamaUser";
  inp_NamaUser.className = "form_login";
  inp_NamaUser.placeholder = "Nama User..";
  form.appendChild(inp_NamaUser);

  // Nomor Handphone
  var label1 = document.createElement("label");
  label1.innerHTML = "Nomor Handphone";
  form.appendChild(label1);
  var inp_NoHP = document.createElement("input");
  inp_NoHP.type = "tel";
  inp_NoHP.name = "NomorHandphone";
  inp_NoHP.className = "form_login";
  inp_NoHP.placeholder = "Nomor Handphone.";
  form.appendChild(inp_NoHP);

  // Username
  var label2 = document.createElement("label");
  label2.innerHTML = "Username";
  form.appendChild(label2);
  var inp_UserName = document.createElement("input");
  inp_UserName.type = "text";
  inp_UserName.name = "username";
  inp_UserName.className = "form_login";
  inp_UserName.placeholder = "Username atau Email ..";
  form.appendChild(inp_UserName);

  // Password
  var label3 = document.createElement("label");
  label3.innerHTML = "Password";
  form.appendChild(label3);
  var inp_Password = document.createElement("input");
  inp_Password.type = "password";
  inp_Password.name = "password";
  inp_Password.className = "form_login";
  inp_Password.placeholder = "Password ..";
  form.appendChild(inp_Password);

  // Submit
  var inp_Submit = document.createElement("input");
  inp_Submit.type = "Submit";
  inp_Submit.name = "daftar";
  inp_Submit.className = "tombol_login";
  inp_Submit.value = "daftar sekarang"
  form.appendChild(inp_Submit);
}
