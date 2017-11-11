<template>
  <div class="row">
    <div class="col-md-12">
      <div class="form-group">
        <label for="commentId">Id</label>
        <input type="text" class="form-control" id="commentId" name="commentId" v-validate="'required'"
               data-vv-as="COMMENTID" v-model="comment.commentId">
        <span v-show="errors.has('commentId')">{{ errors.first('commentId') }}</span>
      </div>
    </div>
    <div class="col-md-12">
      <div class="form-group">
        <label for="commentAction">Action</label>
        <input type="text" class="form-control" id="commentAction" name="commentAction" v-validate="'required'"
               data-vv-as="COMMENTACTION" v-model="comment.commentAction">
        <span v-show="errors.has('commentAction')">{{ errors.first('commentAction') }}</span>
      </div>
    </div>
    <div class="col-md-12">
      <div class="form-group">
        <label for="commentResult">Result</label>
        <input type="text" class="form-control" id="commentResult" name="commentResult" v-validate="'required'"
               data-vv-as="COMMENTRESULT" v-model="comment.commentResult">
        <span v-show="errors.has('commentResult')">{{ errors.first('commentResult') }}</span>
      </div>
    </div>
    <div class="col-md-12">
      <div class="form-group">
        <label for="commentDateTime">Date Time</label>
        <input type="text" class="form-control" id="commentDateTime" name="commentDateTime" v-validate="'required'"
               data-vv-as="COMMENTDATETIME" v-model="comment.commentDateTime">
        <span v-show="errors.has('commentDateTime')">{{ errors.first('commentDateTime') }}</span>
      </div>
    </div>
    <div class="col-md-12">
      <div class="form-group">
        <label for="commentLastName">Lastname</label>
        <input type="text" class="form-control" id="commentLastName" name="commentLastName" v-validate="'required'"
               data-vv-as="COMMENTLASTNAME" v-model="comment.commentLastName">
        <span v-show="errors.has('commentLastName')">{{ errors.first('commentLastName') }}</span>
      </div>
    </div>
    <div class="col-md-12">
      <div class="form-group">
        <label for="commentTextHeader">Header</label>
        <input type="text" class="form-control" id="commentTextHeader" name="commentTextHeader" v-validate="'required'"
               data-vv-as="COMMENTTEXTHEADER" v-model="comment.commentTextHeader">
        <span v-show="errors.has('commentTextHeader')">{{ errors.first('commentTextHeader') }}</span>
      </div>
    </div>
    <div class="col-md-12">
      <div class="form-group">
        <label for="commentTextDetail">Detail</label>
        <input type="text" class="form-control" id="commentTextDetail" name="commentTextDetail" v-validate="'required'"
               data-vv-as="COMMENTTEXTDETAIL" v-model="comment.commentTextDetail">
        <span v-show="errors.has('commentTextDetail')">{{ errors.first('commentTextDetail') }}</span>
      </div>
    </div>
    <div class="col-md-12">
      <div>
        <button type="button" class="btn btn-primary" v-bind:disabled="saveDisabled" @click="saveComment">Save</button>
        <button type="button" class="btn btn-primary" v-bind:disabled="saveDisabled" @click="updateComment">Update
        </button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      let comment = {
        firstName: '',
        lastName: ''
      }
      return {
        comment
      }
    },
    created() {
      console.log(this.$route.params.id)
      if (this.$route.params.id) {
        console.log('found a value')
        var resource = this.$resource('/CommentVue/comment/' + this.$route.params.id)
        resource.query().then((response) => {
          this.comment = response.data
        }, (response) => {
          // error callback
          console.log('Error:' + response.statusText)
        })
      }
    },
    computed: {
      saveDisabled() {
        return this.errors.any()
      }
    },
    methods: {
      saveComment() {
        console.log(this.comment)
        var resource = this.$resource('/CommentVue/comment')
        resource.save(this.comment).then((response) => {
          // success callback
        }, (response) => {
          // error callback
          console.log('Error:' + response.statusText)
        })
      },
      updateComment() {
        console.log(this.comment)
        var resource = this.$resource('/CommentVue/comment/' + this.comment.commentId)
        resource.update(this.comment).then((response) => {
          // success callback
        }, (response) => {
          // error callback
        })
      }
    }
  }
</script>
