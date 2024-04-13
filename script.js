// $(document).ready(function() {
//     $('#taxForm').submit(function(e) {
//       e.preventDefault();
//       $('.error-icon').hide();
  
//       var income = parseFloat($('#income').val());
//       var extraIncome = parseFloat($('#extraIncome').val());
//       var deductions = parseFloat($('#deductions').val());
//       var age = $('#age').val();
  
//       if (isNaN(income) || income <= 0) {
//         $('#incomeError').show();
//         return;
//       }
//       if (isNaN(extraIncome) || extraIncome < 0) {
//         $('#extraIncomeError').show();
//         return;
//       }
//       if (isNaN(deductions) || deductions < 0) {
//         $('#deductionsError').show();
//         return;
//       }
//       if (!age) {
//         $('#ageError').show();
//         return;
//       }
  
//       var taxableIncome = income + extraIncome - deductions;
//       var tax = 0;
  
//       if (taxableIncome > 800000) {
//         if (age === '<40') {
//           tax = 0.3 * (taxableIncome - 800000);
//         } else if (age === '≥40 &lt;60') {
//           tax = 0.4 * (taxableIncome - 800000);
//         } else {
//           tax = 0.1 * (taxableIncome - 800000);
//         }
//       }
  
//       $('#taxResult').text('Tax to be paid: ' + tax.toFixed(2) + ' Lakhs');
//       $('#resultModal').modal('show');
//     });
//   });
  