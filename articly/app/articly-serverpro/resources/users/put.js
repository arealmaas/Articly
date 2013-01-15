if(!me || this.author != me.id){
    protect('link');
    protect('text');
    protect('author');
}

emit('author:changed', this.author);