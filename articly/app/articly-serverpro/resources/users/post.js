if(!me) cancel('You are not logged in!', 401);
this.author = me.id;

emit('author:changed', this.author);