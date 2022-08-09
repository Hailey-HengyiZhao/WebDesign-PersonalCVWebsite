window.onload = function () {
  let form = document.querySelector('#message-form');
  let clickHiringFlag = false;
  let hiringClick = document.getElementById('about-hiring');
  let questionClick = document.getElementById('about-question');
  let commentClick = document.getElementById('about-comment');
  hiringClick.addEventListener('click', function () {
    if (!clickHiringFlag) {
      console.log('Detected click hiring radio button');
      clickHiringFlag = true;
      let hiddenHourlyRate = document.getElementById('hidden-hourly-rate');

      let hourlyRateLabel = document.createElement('label');
      hourlyRateLabel.id = 'hourly-rate-label';
      hourlyRateLabel.innerHTML = 'Preferred Hourly Rate';

      let hourlyRateInput = document.createElement('input');
      hourlyRateInput.name = 'hourly-rate';
      hourlyRateInput.id = 'hourly-rate';
      hourlyRateInput.class = 'form-control';
      hourlyRateInput.type = 'text';
      hourlyRateInput.placeholder =
        'Please enter the expected hourly rate that you would like to offer';
      hourlyRateInput.required = true;
      hiddenHourlyRate.appendChild(hourlyRateLabel);
      hiddenHourlyRate.appendChild(hourlyRateInput);
      console.log(clickHiringFlag);
    }
  });

  questionClick.addEventListener('click', function () {
    if (clickHiringFlag) {
      console.log('now removing hiring');
      let hiddenHourlyRate = document.getElementById('hidden-hourly-rate');
      let hourlyRateLabel = document.getElementById('hourly-rate-label');
      let hourlyRateInput = document.getElementById('hourly-rate');
      if (hourlyRateLabel) hiddenHourlyRate.removeChild(hourlyRateLabel);
      if (hourlyRateInput) hiddenHourlyRate.removeChild(hourlyRateInput);
      clickHiringFlag = false;
    }
  });
  commentClick.addEventListener('click', function () {
    if (clickHiringFlag) {
      console.log('now removing hiring');
      let hiddenHourlyRate = document.getElementById('hidden-hourly-rate');
      let hourlyRateLabel = document.getElementById('hourly-rate-label');
      let hourlyRateInput = document.getElementById('hourly-rate');
      if (hourlyRateLabel) hiddenHourlyRate.removeChild(hourlyRateLabel);
      if (hourlyRateInput) hiddenHourlyRate.removeChild(hourlyRateInput);
      clickHiringFlag = false;
    }
  });

  form.onsubmit = function (event) {
    if (!form.checkValidity) {
      form.classList.add('was-validated');
      event.preventDefault();
      return false;
    }
  };
};
