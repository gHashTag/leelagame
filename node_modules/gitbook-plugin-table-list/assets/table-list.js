require(["gitbook", "jQuery"], function (gitbook) {
  gitbook.events.bind("page.change", function () {
    jQuery('table').addClass('table-list');
    jQuery('tbody td').each(function () {
      var $this = jQuery(this);
      var title = $this
      .closest('table')
      .find('th')
      .eq($this.index());

      $this.attr('data-title', title.text());
    });
  });
});