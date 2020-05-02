
<template>
    <div class="view-work">
        <div class="container">
            <div class="row  work-container">
                <div class="col-7 hidden-sm"></div>
                <div class="col-4">
                <div data-aos="fade" data-aos-duration="1000" class="line line2"></div>
                <a data-aos="fade" data-aos-duration="1000" class="work" href="/work"><p class="change">View my work here</p></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  export default {

  }

</script>

<style scoped>

  .work-container {
    padding: 120px 0 150px;
  }

  .line {
    height: 3px;
    width: 90%;
    background: #000;
    transition: all 1s ease;
    margin-top: 50px;
  }


  .work {
    font-family: 'Roboto-regular', sans-serif;
    font-size: 30px;
  }

  .work p{
    text-decoration: underline;
    max-width: 160px;
  }

  .work p,
  div.line2 {
    width: 45%;
    display: inline-block;
    float: left;
  }

  div.line2 {
    margin-top: 8px;
    margin-right: 25px;
  }

@media only screen and (min-width: 768px) and (max-width: 1023px) {
    div.line2 {
      width: 25%;
      margin-left: 45%;
    }
  }

 @media only screen and (min-width: 768px) {

    .work-container {
        padding: 180px 0 220px;
    }

      .work-container {
    padding: 180px 0 220px;
  }
 }
</style>