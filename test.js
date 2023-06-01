function __exec__(data) {
  data.output(data.input());
  
  write_text(data, "=========================================");
  write_text(data, pad_head("This is a test!"));
  write_text(data, "  -------------------------------------");
  write_text(data, "");  
}

function pad_head(text) {
  var head = lang().newString("=========================================");
  var left = intPart('' + ((head.length() - lang().newString(text).length())/2));
  if (left < 0) {
    left = 0;
  }
  var target = '';
  for (var i = 0; i < left; i++) {
    target = target + ' ';
  }
  target = target + text;
  return target;
}

function write_text(data, text) {
  var item = new com.github.progrocus.seventy.core.Gopher.Item("i", text);
  data.input().get("goDoc").response.add(item);
}

