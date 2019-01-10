import assert from "assert";

// noinspection JSUnresolvedFunction
describe("hello", function () {
  // noinspection JSUnresolvedFunction
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    // noinspection JSUnresolvedFunction
    assert.strictEqual(name, "hello");
  });

  if (Meteor.isClient) {
    // noinspection JSUnresolvedFunction
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    // noinspection JSUnresolvedFunction
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
