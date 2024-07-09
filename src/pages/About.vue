<template>
  <main-layout>
    <Nav />
    <div class="about">
      <div class="container" >
        <div class="page-content">
          <div class="row" >
            <div class="col-1 hidden-sm"></div>
            <div class="col-10">
                <h1>Innovative & results-driven Product Design Leader.</h1>
            </div>
          </div>

          <div class="row experience" >
            <div class="col-2 hidden-sm"></div>
            <div class="col-2">
              <h2>Experience</h2>
            </div>
            <div class="col-6">
              <div class="flex">
                <p>13+ years of experience designing and building, leading and growing design teams. My expertise spans UX, UI, and interaction design, with a strong emphasis on strategy and creative direction.</p>
                <p>Throughout my career, I have successfully led cross-functional teams, seamlessly integrating user research and insights into the design process to inform business decisions and create impactful solutions. My passion for fostering team growth and creativity has enabled me to develop strong product design teams that deliver solutions aligned with brand values while meeting diverse user needs. I am dedicated to driving innovative thinking, pushing boundaries, and continually inspiring my team to achieve excellence.</p>
              </div>
            </div>
          </div>

          <div class="row skills" >
            <div class="col-2 hidden-sm"></div>
            <div class="col-2">
              <h2>Skills</h2>
            </div>
            <div class="col-6">
              <ul class="skills-list">
                <li>Product Design</li>
                <li>UI Design</li>
                <li>UX Design</li>
                <li>Interaction Design</li>
                <li>Design Systems</li>
                <li>Team Leadership & Management</li>
                <li>Strategic Planning</li>
                <li>Accessibility</li>
                <li>Prototyping</li>
                <li>Animation</li>
                <li>Journey Mapping</li>
                <li>User Testing</li>
                <li>Research</li>
                <li>Creative Direction</li>
                <li>Typography</li>
                <li>Iconography</li>
                <li>Art Direction</li>
              </ul>
            </div>
          </div>

          <div class="row clients" >
            <div class="col-2 hidden-sm"></div>
            <div class="col-2">
              <h2>Clients include</h2>
            </div>
          </div>

          <div class="row clients2" >
            <div class="col-2 hidden-sm"></div>
            <div class="col-9">
              <ul class="clients-list">
                <li><span>01</span>Burberry</li>
                <li><span>02</span>Soho House</li>
                <li><span>03</span>Harrods</li>
                <li><span>04</span>ASOS</li>
                <li><span>05</span>Made.com</li>
                <li><span>06</span>Topshop</li>
                <li><span>07</span>Stylus</li>
                <li><span>08</span>Warehouse</li>
                <li><span>09</span>Belmond</li>
                <li><span>10</span>Avant Arte</li>
                <li><span>11</span>Flowerbx</li>
                <li><span>12</span>D Maris Bay</li>
                <li><span>13</span>Sani Resort</li>
                <li><span>14</span>Sheep Inc.</li>
                <li><span>15</span>Selfridges</li>
                <li><span>16</span>Apes Hill</li>
                <li><span>17</span>Sivvi</li>
                <li><span>18</span>Topman</li>
              </ul>
            </div>
          </div>

          <div class="row CV">
            <div class="col-2 hidden-sm"></div>
            <div class="col-9">
              <a class="underline" href="../../NicRobertsCV2024.pdf" target="_blank">View my CV</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Nav from '../components/Nav.vue'
   
 export default {
    data: function () {
      return {
      }
    },
    components: {
      MainLayout, Nav, 
    },
    methods: {

    }, 
    mounted: function() {

    },
  }
</script>

<style scoped>

  .about {
    background: #F7F6F3;
    height: 100vh;
  }

  .page-content {
    margin: 78px 0 0 0;
  }

  h1 {
    font-weight: 400;
    text-transform: uppercase;
    font-family: "David-ExtraLight", sans-serif;
    font-size: 35px;
  }

  h2 {
    font-weight: 400;
    font-family: "David-Regular", sans-serif;
    font-size: 14px;
    margin: 0 0 26px 0;
  }

  .experience,
  .skills,
  .clients,
  .CV {
    margin: 55px 0 0 0;
  }

  .experience p {
    font-family: "David-ExtraLight", sans-serif;
    font-size: 14px;
    margin: 10px 0 0 0;
  }

  .experience p:first-of-type {
    font-family: "David-Light", sans-serif;
    font-size: 20px;
    margin: 0;
  }

  .skills-list,
  .clients-list  {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  .skills-list li {
    margin: 0 10px 0 0;
    font-family: "David-Light", sans-serif;
    font-size: 20px;
    line-height: 30px;
  }

  .skills-list li:after {
    content: "/";
    margin: 0 0 0 10px;
  }

  .skills-list li:last-of-type:after {
    display: none;
  }

  .clients2 {
    margin: 75px 0 0 0;
  }

  .clients-list:after {
    content: "& more";
    font-family: "David-Light", sans-serif;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin: 0 0 30px 0;
  }

  .clients-list li {
    margin: 0 40px 30px 0;
    display: flex;
    font-family: "David-Light", sans-serif;
    font-size: 30px;
    line-height: 35px;
  }

  .clients-list li span {
    font-family: "David-ExtraLight", sans-serif;
    font-size: 14px;
    margin: 0 10px 0 0;
  }

  .CV a {
    display: block;
    text-transform: uppercase;
    margin: 0 auto;
    padding: 0 0 41px 0;
    font-family: "David-Regular", sans-serif;
    font-size: 14px;
    color: #000;
    letter-spacing: .8px;
    width: fit-content;
  }

  .underline {
    display: inline;
    position: relative;
    overflow: hidden;
  }

  .underline:after {
    content: "";
    position: absolute;
    right: 0;
    width: 0;
    bottom: 36px;
    background: #000;
    height: 2px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  .underline:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }

  @media only screen and (min-width: 1024px) {

    .experience,
    .skills,
    .clients,
    .CV {
      margin: 120px 0 0 0;
    }

    .page-content {
      margin: 160px 0 0 0;
    }

    h1 {
      font-size: 64px;
    }

    h2 {
      font-size: 20px;
      margin: 0;
    }
      
  }

</style>

<style>
html, body {
  overflow: auto;
}
</style>
