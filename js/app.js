angular.module('myApp', ['pascalprecht.translate', 'angularUtils.directives.dirPagination'])
  .config(['$translateProvider', function ($translateProvider) {

    var translationsEN = {
      TITLE: 'Select a language',
      REVIEW_TITLE: 'Give your Review',
      REVIEW_FORM_TITLE: 'Give your review',
      REVIEWS_LIST_TITLE: 'List of Reviews',
      BUTTON_LANG_FR: 'French',
      BUTTON_LANG_EN: 'English',
      BUTTON_SUBMIT: 'Submit',
      NICK_NAME_LABEL: 'Nickname',
      REVIEW_LABEL: 'Review',
      LETTER_COUNT_LABEL: 'Letter count '
    };

    var translationsFR = {
      TITLE: 'Sélectionner une langue',
      REVIEW_TITLE: 'Donnez votre avis',
      REVIEW_FORM_TITLE: 'Donnez votre avis',
      REVIEWS_LIST_TITLE: 'Liste des avis',
      BUTTON_LANG_FR: 'Français',
      BUTTON_LANG_EN: 'Anglais',
      BUTTON_SUBMIT: 'Soumettre',
      NICK_NAME_LABEL: 'Surnom',
      REVIEW_LABEL: 'La revue',
      LETTER_COUNT_LABEL: 'Count lettre '
    };

    // add translation tables
    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('fr', translationsFR);
    $translateProvider.preferredLanguage('en');
    // remember language
    //$translateProvider.useLocalStorage();
}])
  .config(function () {
    if (localStorage.getItem("reviews") === null) {
      window.reviews = [];
    } else {
      window.reviews = JSON.parse(localStorage.getItem("reviews"));
    }
  });
