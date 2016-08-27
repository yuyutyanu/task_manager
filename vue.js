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
            socket.emit('before_req',{before:this.list[index].before_input,id:index+1});
          },
          answer_submit:function(index){
            console.log(this.list[index].answer_input);
            this.list[index].problem ='';
            socket.emit('before_req',{before:this.list[index].before_input,id:index+1});
          },
          before_submit:function(index){
            console.log(this.list[index].before_input);
            this.list[index].problem ='';
            socket.emit('before_req',{before:this.list[index].before_input,id:index+1});
          },
          after_submit:function(index){
            console.log(this.list[index].after_input);
            this.list[index].problem ='';
            socket.emit('before_req',{before:this.list[index].before_input,id:index+1});
          }
        }
    });
});

socket.on('new_text',function(data){
  content.list[data.index]. hensu .push(data);
});

//どうやって受け取ろう。。。
(function() {
    var socket = io.connect();
    socket.on('old_text', function(data) {
      for (var i = 0; i < db.length; i++) {
        content.list[data.index].beforetext.push(data.before);
        content.list[data.index].aftertext.push(data.after);
        content.list[data.index].problem.push(data.problem);
        content.list[data.index].answertext.push(data.answer);
        }
    });
}());
