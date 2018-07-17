import { ajax } from "discourse/lib/ajax";

export default {
  show() {
    return ajax("/admin/plugins/wellfed/feed_settings.json");
  },

  update(feedSettings) {
    return ajax("/admin/plugins/wellfed/feed_settings", {
      type: "PUT",
      contentType: "application/json",
      processData: false,
      data: JSON.stringify({ feed_settings: feedSettings })
    });
  }
};
