import VueResource from 'vue-resource'
Import VuePaginator from 'vuejs-paginator'

<template>
  <div class="row">
    <div class="col-md-12">
      <h2>{{label}}</h2>
      <table class="table table-bordered table-striped no-more-tables'">
        <thead>
        <tr>
          <th>Select</th>
          <th>commentId</th>
          <th>commentAction</th>
          <th>commentResult</th>
          <th>commentDateTime</th>
          <th>commentLastName</th>
          <th>commentTextHeader</th>
          <th>commentTextDetail</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="comment in listOfComments">
          <!--td><a v-bind:href="'#/comment/' + comment.commentId">E</a></td-->
          <td data-title=""><a @click="editRecord(comment.commentId)">Edit</a></td>
          <td>{{comment.commentId}}</td>
          <td>{{comment.commentAction}}</td>
          <td>{{comment.commentResult}}</td>
          <td>{{comment.commentDateTime}}</td>
          <td>{{comment.commentLastName}}</td>
          <td>{{comment.commentTextHeader}}</td>
          <td>{{comment.commentTextDetail}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-12">
      <ul class="pager">
        <li><a @click="previousPage()" v-if="currentPage > 1">Previous</a></li>
        <li><a @click="nextPage()" v-if="currentPage < lastPage">Next</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        listOfComments: [],
        someData: {title: 'This is a test'},
        currentPage: 1,
        lastPage: 1
      }
    },
    created() {
      var resource = this.$resource('/CommentVue/comments')
      resource.query({page: 1, per_page: 4}).then((response) => {
        this.listOfComments = response.data.rows
        this.lastPage = response.data.lastPage
      }, (response) => {
        // error callback
        console.log('Error:' + response.statusText)
      })
    },
    props: ['label'],
    methods: {
      dummyFunction() {
        console.log('dummy')
      },
      editRecord(id) {
        this.$router.push('/comment/' + id)
      },
      previousPage() {
        this.currentPage = this.currentPage - 1
        var resource = this.$resource('/CommentVue/comments')
        resource.query({page: this.currentPage, per_page: 4}).then((response) => {
          this.listOfComments = response.data.rows
        }, (response) => {
          // error callback
          console.log('Error:' + response.statusText)
        })
      },
      nextPage() {
        console.log('next page')
        this.currentPage = this.currentPage + 1
        var resource = this.$resource('/CommentVue/comments')
        resource.query({page: this.currentPage, per_page: 4}).then((response) => {
          this.listOfComments = response.data.rows
        }, (response) => {
          // error callback
          console.log('Error:' + response.statusText)
        })
      }
    }
  }
</script>
<style scoped>
  @media only screen and (max-width: 800px) {

    /* Force table to not be like tables anymore */
    .no-more-tables table,
    .no-more-tables thead,
    .no-more-tables tbody,
    .no-more-tables th,
    .no-more-tables td,
    .no-more-tables tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    .no-more-tables thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    .no-more-tables tr {
      border: 1px solid #ccc;
    }

    .no-more-tables td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
      white-space: normal;
      text-align: left;
    }

    .no-more-tables td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      text-align: left;
      font-weight: bold;
    }

    /*
      Label the data
      */
    .no-more-tables td:before {
      content: attr(data-title);
    }
  }
</style>
