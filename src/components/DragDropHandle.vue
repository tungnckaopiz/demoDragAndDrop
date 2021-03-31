<template>
    <el-container class="p30 content display-grid">
        <div class="title">お知らせタグ設定</div>
        <div>
            <el-row class="form-list">
                <el-col :span="24" class="list-content">
                    <div class="list">
                        <div class="header-cell">
                            <p class="text">#</p>
                            <p>名前</p>
                            <p>削除</p>
                        </div>
                        <draggable :list="list" class="list-group" handle=".handle" v-bind="dragOptions">
                            <div
                                    class="handle"
                                    v-for="(element, idx) in list"
                                    :key="element.id"
                            >
                                <p class="text">{{ idx + 1 }} </p>

                                <el-input type="text" class="form-control" v-model="element.text" maxlength="50"
                                          show-word-limit/>
                                <i class="el-icon-delete" @click="confirmDelete(element.id)"></i>
                            </div>
                        </draggable>
                    </div>
                    <el-row>
                        <el-col :span="12">
                            <span @click="add" class="add-tag">
                                +タグを追加
                            </span>
                        </el-col>
                        <el-col :span="12">
                            <button>
                                保存
                            </button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </el-container>
</template>

<style scoped>
    .handle {
        float: left;
        border: 1px solid #DFE0EB;
        box-sizing: border-box;
        display: inline-flex;
    }

    input {
        display: inline-block;
        width: 50%;
    }

    p.text {
        float: left;
        padding-right: 82px;
        padding-left: 32px;
    }

    input.text {
        position: absolute;
        background: #FFFFFF;
        border: 1px solid #FFC000;
        box-sizing: border-box;
        border-radius: 8px;
    }

    .list-group {
        display: inline-grid;
        background: #ffffff;
        width: 100%;
    }

    .list-group .handle {
        cursor: pointer;
        max-height: 70px;
        padding: 14px;
    }

    .header-cell {
        font-size: 16px;
        font-weight: 700;
        line-height: 18.75px;
        color: #4F4F4F;
        width: 100%;
        min-height: 56px;
        display: inline-flex;
        margin-right: 15px;
        background: rgba(223, 224, 235, 0.3);
        border: 1px solid #DFE0EB;
        box-sizing: border-box;
        border-radius: 12px 12px 0px 0px;
    }

    .text {
        place-self: center;
        padding-left: 15px;
    }

    .el-icon-delete {
        place-self: center;
        padding-left: 115px;
        padding-right: 46px;
    }

    .form-list {
        background: #FFFFFF;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
    }

    .display-grid {
        display: grid;
    }

    .title {
        padding-bottom: 24px;
        justify-self: left;
    }

    .list-content .list {
        padding: 40px;
    }

    .add-tag {
        color: #2D9CDB;
        font-size: 14px;
        font-weight: 700;
        float: left;
        padding-left: 40px;
        cursor: pointer;
    }

    button {
        background: #FFC000;
        border-radius: 8px;
        border: 2px solid #FFC000;
        width: 108px;
        height: 48px;
        float: right;
        margin-right: 40px;
        margin-bottom: 30px;
        font-weight: 700;
    }
</style>
<script>
  let id = 2
  import draggable from 'vuedraggable'

  export default {
    name: 'handle',
    display: 'Handle',
    order: 5,
    components: {
      draggable,
    },
    data () {
      return {
        list: [
          { text: '生徒向け1', id: 1, canDelete: true },
          { text: '生徒向け2', id: 2, canDelete: true },
          { text: '生徒向け3', id: 3, canDelete: true },
          { text: '生徒向け4', id: 4, canDelete: false }
        ],
        dragging: false,
      }
    },
    computed: {
      dragOptions () {
        return {
          animation: 200,
          group: 'description',
          disabled: false,
          ghostClass: 'ghost'
        }
      },
    },
    methods: {
      removeTag (idx) {
        this.list.splice(idx, 1)
      },
      add () {
        id++
        this.list.push({ name: 'Juan ' + id, id, text: '' })
      },
      confirmDelete (idx) {
        if (this.list.length < 2) {
          this.$message({
            type: 'error',
            message: 'List tag is not null'
          })
        } else if (this.list.find(object => object.id === idx && object.canDelete)) {
          this.$confirm('This will permanently delete the tag. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }).then(() => {
            this.removeTag(idx)
            this.$message({
              type: 'success',
              message: 'Delete completed'
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: 'Delete canceled'
            })
          })
        } else {
          this.$message({
            type: 'error',
            message: 'This tag used !'
          })
        }
      }
    }
  }
</script>
