function EditPrivateCollectionDialog() {
    Dialog.call(this);
    this.title="Edit Private Collection Infomation";

}
__extend(Dialog, EditPrivateCollectionDialog);

EditPrivateCollectionDialog.prototype.setup = function (options) {
    if (options && options.collection) {
        this.collection = options.collection;
    }
    if (options && options.onDone) {
        this.onDone = options.onDone;
    }
    console.log(this.collection);
    this.collectionName.value = this.collection.displayName;
    this.collectionDescription.value = this.collection.description;
    this.collectionAuthor.value = this.collection.author;
    this.collectionWeb.value = this.collection.infoUrl;
}


EditPrivateCollectionDialog.prototype.invalidate = function () {
    if (this.collectionName.value == "")
    {
        Dialog.alert("Empty text box","Please enter collection Name ",null);
        return false;
    }
    return true;
}


EditPrivateCollectionDialog.prototype.getDialogActions = function () {
    var thiz = this;
    return [
        {
            type: "accept", title: "Save",
            isCloseHandler: true,
            run: function () {
                if(!thiz.invalidate()) return false;
                thiz.collection.displayName = thiz.collectionName.value;
                thiz.collection.description = this.collectionDescription.value;
                thiz.collection.author = thiz.collectionAuthor.value;
                thiz.collection.infoUrl = thiz.collectionWeb.value;
                if(thiz.onDone) thiz.onDone(thiz.collection);
                return true;
            }
        },
        {
            type: "cancel", title: "Close",
            isCloseHandler: true,
            run: function () { return true; }
        }
    ]
};
