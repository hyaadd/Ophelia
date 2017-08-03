var sel, range, html, startOffset;
$(function() {
    var $write = $('#commands'),
        shift = false,
        editmode = false,
        capslock = false;

    function setCaret(offset) {
        var el = document.getElementById("commands");
        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(el.childNodes[0], offset);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        el.focus();
    }


    function insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }

    $('#commands').click(function() {
        if (document.activeElement.id == 'commands') {
            console.log("keyboard in editmode");
            editmode = true;
            sel = window.getSelection();
            startOffset = sel.getRangeAt(0).startOffset
        }
    });

    $('.key').click(function() {
        var $this = $(this),
            character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
        $('#metadata').hide();
        // Delete
        if ($this.hasClass('clear')) {
            var html = $write.html();
            if (editmode) {
                var deletedContent = html.substr(0, startOffset - 1);
                var remainingContent = html.substr(startOffset, html.length);
                $write.html(deletedContent + remainingContent);
                if (startOffset > 0) {
                    startOffset = startOffset - 1;
                    setCaret(startOffset);
                }
            } else {
                $write.html(html.substr(0, html.length - 1));
            }
            return false;
        }

        // Uppercase letter
        if ($this.hasClass('uppercase')) character = character.toUpperCase();
        if ($this.hasClass('spacebutton')) {
            console.log("spacebutton clicked");
            character = ' ';
        }


        // Add the character
        if (editmode) {
            console.log("inside edit charater code");
            console.log(startOffset);
            console.log(character);
            console.log($write.html());
            var newData = insert($write.html(), startOffset, character);
            $write.html(newData);
            startOffset = startOffset + 1;
						setCaret(startOffset);
        } else {
            $write.html($write.html() + character);
        }
    });
});
