const useTitle = (title) =>{
  if(title.length === 0){
    return document.title = "Flytographer";
  }
  document.title = `${title } - Flytographer`;
}

export default useTitle;