if(!me || this.author != me.id) cancel('this is not your article', 401);

emit('author:changed', this.author);