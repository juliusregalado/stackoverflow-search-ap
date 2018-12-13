import keyword_extractor from 'keyword-extractor';

let config =  {
  language:"english",
  remove_digits: true,
  return_changed_case:true,
  remove_duplicates: true 
}

export default {

  keywordExtractor(input) {
    return keyword_extractor.extract(input, config);
  }

}