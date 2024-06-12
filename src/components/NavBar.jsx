import React from 'react'

const NavBar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#"> COURSE APP </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Search">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/VIewAll">View All</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar