function homeController (allProjects, $location, $anchorScroll) {

  let vm = this;
  vm.all = allProjects;

  vm.scrollTo = scrollTo;

  function scrollTo (id){
       $location.hash(id);
       $anchorScroll();
    }

}

homeController.inject = ['allProjects', '$location', '$anchorScroll']
export { homeController };
