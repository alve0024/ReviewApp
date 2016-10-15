//      <!--        TODO: Check how to block after 255 characters-->
//      <textarea class="form-control" rows="5" cols="50" name="body" max-length="255" ng-maxlength="10" ng-model="message"></textarea>
//      <p ng-show="message.length > 0">( {{ message.length }} )</p>
//      <button ng-click="addReview()" translate="BUTTON_SUBMIT"></button>
//
//      <!-- ng-class="myReview.myNickname.$valid && myReview.myDetails.$valid ? 'activeBtn' : 'inactiveBtn'"-->
//    </form>
//
//    <h4>{{ 'REVIEWS_LIST_TITLE' | translate }}</h4>
//
//    <ul>
//      <li ng-repeat="review in reviews | startFrom: pagination.page * pagination.perPage | limitTo: pagination.perPage">
//        <h4>{{review.nickname}}</h4>
//        <p>{{review.body}}</p>
//      </li>
//    </ul>
//
//    <ul class="pagination">
//      <li><a href="" ng-click="pagination.prevPage()">&laquo;</a></li>
//      <li ng-repeat="n in [] | range: pagination.numPages" ng-class="{active: n == pagination.page}">
//        <a href="" ng-click="pagination.toPageId(n)">{{n + 1}}</a>
//      </li>
//      <li><a href="" ng-click="pagination.nextPage()">&raquo;</a></li>
//    </ul>
//      
//      
//      
//      
//      <form ng-controller="ReviewController as review">
//  <h4>{{ 'REVIEW_FORM_TITLE' | translate }}</h4>
//  <p>{{ 'NICK_NAME_LABEL' | translate }}</p>
//  <input type="text" ng-model="name" ng-model-instant>
//  <p>{{ 'REVIEW_LABEL' | translate }}</p>
//
//
//  <!--        TODO: Check how to block after 255 characters-->
//  <textarea class="form-control" rows="5" cols="50" name="body" max-length="255" ng-maxlength="10" ng-model="message"></textarea>
//  <p ng-show="message.length > 0">( {{ message.length }} )</p>
//  <button ng-click="addReview()" translate="BUTTON_SUBMIT"></button>
//</form>
//  
//  
//  <div ng-controller="ReviewController as review">
//  <h4>{{ 'REVIEWS_LIST_TITLE' | translate }}</h4>
//
//  <ul>
//    <li dir-paginate="review in reviews | itemsPerPage:2">
//      <h4>{{review.nickname}}</h4>
//      <p>{{review.body}}</p>
//    </li>
//  </ul>
//
//<!--
//<ul class="pagination">
//  <li><a href="" ng-click="pagination.prevPage()">&laquo;</a></li>
//  <li ng-repeat="n in [] | range: pagination.numPages" ng-class="{active: n == pagination.page}">
//    <a href="" ng-click="pagination.toPageId(n)">{{n + 1}}</a>
//  </li>
//  <li><a href="" ng-click="pagination.nextPage()">&raquo;</a></li>
//</ul>
//-->
//</div>