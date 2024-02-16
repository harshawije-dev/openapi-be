import GPTSpecAsync from "../specifications/GPTSpecAsync";

let blob = [];

export function getResponseReaders(params?: any) {
  return GPTSpecAsync().then((values) => {
    return values.message;
  });
}
