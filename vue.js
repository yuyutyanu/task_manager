document.addEventListener("DOMContentLoaded", function() {

    var content = new Vue({
        el: '.task',
        data: {
            list: [{
                id: 1,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                after_title: 'これからすること',
                aftertext: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                problem_title: '問題',
                problemtext: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                answer_title: '解決方法',
                answertext: 'aaaaaaaaaaaaaaaaaaaaaaaaaa',
                date:'○月△日第何週',//[]
                username:[]
            },{
                id: 2,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: [],
                after_title: 'これからすること',
                aftertext: [],
                problem_title: '問題',
                problemtext: [],
                answer_title: '解決方法',
                answertext: [],
                date:'○月△日第何週',
                username:[]
            },{
                id: 3,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: [],
                after_title: 'これからすること',
                aftertext: [],
                problem_title: '問題',
                problemtext: [],
                answer_title: '解決方法',
                answertext: [],
                date:'○月△日第何週',
                username:[]
            },{
                id: 4,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: [],
                after_title: 'これからすること',
                aftertext: [],
                problem_title: '問題',
                problemtext: [],
                answer_title: '解決方法',
                answertext: [],
                date:'○月△日第何週',
                username:[]
            }]
        },
        methods:{
          problem_submit:function(index){
            console.log(this.list[index].problem_input);
            this.list[index].problem ='';
            socket.emit('before_req',{before:this.list[index].before_input,id:index,name:'before'});
          },
          answer_submit:function(index){
            console.log(this.list[index].answer_input);
            this.list[index].problem ='';
            socket.emit('after_req',{before:this.list[index].before_input,id:index,name:'after'});
          },
          before_submit:function(index){
            console.log(this.list[index].before_input);
            this.list[index].problem ='';
            socket.emit('problem_req',{before:this.list[index].before_input,id:index,name:'problem'});
          },
          after_submit:function(index){
            console.log(this.list[index].after_input);
            this.list[index].problem ='';
            socket.emit('answer_req',{before:this.list[index].before_input,id:index,name:'answer'});
          }
        }
    });
});

socket.on('new_text',function(data){
  content.list[data.index].data.name .push(data);
});

//どうやって受け取ろう。。。
(function() {
  
    socket.on('old_before', function(data) {
      for (var recode in data){
        content.list[recode.index].beforetext.push(recode.before);
        }
    });
    socket.on('old_after', function(data) {
      for (var recode in data){
        content.list[recode.index].aftertext.push(recode.after);
        }
    });
    socket.on('old_problem', function(data) {
      for (var recode in data){
        content.list[recode.index].beforetext.push(recode.problem);
        }
    });
    socket.on('old_answer', function(data) {
      for (var recode in data){
        content.list[recode.index].beforetext.push(recode.answer);
        }
    });
}());
