// Minimal JS: no-blocking, small footprint
document.addEventListener('DOMContentLoaded', function () {
  // contact form simple handler (placeholder)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks — we received your message. We will contact you shortly.');
      form.reset();
    });
  }

  // Mobile nav toggle: small, accessible
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('open');
    });
  }

  // Job filtering: show/hide jobs by type
  window.filterJobs = function(type) {
    var jobs = document.querySelectorAll('.job-card');
    var buttons = document.querySelectorAll('.filter-btn');
    var hasVisible = false;

    // Update active button
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter jobs
    jobs.forEach(function(job) {
      if (type === 'all' || job.getAttribute('data-type') === type) {
        job.style.display = 'block';
        hasVisible = true;
      } else {
        job.style.display = 'none';
      }
    });

    // Show/hide "no jobs" message
    var noMore = document.querySelector('.no-more-jobs');
    if (noMore) {
      noMore.style.display = hasVisible ? 'none' : 'block';
    }
  };
});

