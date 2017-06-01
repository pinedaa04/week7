$(document).ready(function () {
  
  var book = $('#book').val(), bookForm = $('#bookForm'), bookTable = $('#bookTable'), arr = [];
  
  var xhr = new XMLHttpRequest();
  
  xhr.onload = function () {
    if (xhr.status === 200) {
      book.innerHTML = xhr.responseText;
    }
  };
  
  bookForm = $('#bookForm').hide();
  
  $('#addItemButton').on('click', function (e) {
    bookForm.show();
    bookTable.hide();
  });

  function updateTable() {
    $('#bookTable tbody').html('<tr></tr>');
    for (var i = 0; i < arr.length; i++) {
      $('#bookTable tBody').append('<tr><td>' + book + '</td>' + '</tr>'); 
    count++;
    }
  }

  
  $('#submit').on('click', function (e) {
    e.preventDefault();
    bookForm.hide();
    bookTable.show();
    var bookInfo = book.serialize();
    $.post('https://pacific-meadow-64112.herokuapp.com/data-api/apineda', bookInfo, function(data) {
      book.html(data);
    });
    updateTable();
  });
  
});