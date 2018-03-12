function foo1()
{
  return { // hello
      bar: "hello"
  }
}

function foo2()
{
  return // undefined
  {
      bar: "hello"
  }
}

console.log("foo1 returns:", foo1());

console.log("foo2 returns:", foo2());
