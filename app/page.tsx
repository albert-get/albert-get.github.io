
export default function Home() {
  return (
    <main>
      <h1>简介</h1>
      <div>一名程序员，现在从事前端工作</div>
      <div><a href="https://github.com/albert-get">我的github</a></div>
      <div><a href="https://www.zhihu.com/people/qian-duan-xue-xi-zhong-47">我的知乎</a></div>
      <div style={{height:50}}/>
      
      <h1><a href="/canvas-editor">canvas编辑器</a></h1>
      <div>一个基于polotno的canvas编辑器</div>
      <div style={{height:20}}/>
      <iframe
        width="100%"
        height={500}
        src="/canvas-editor"
      />
      <div style={{height:50}}/>
      
      <h1><a href="/babylon">太阳系</a></h1>
      <div>用babylon画的太阳系</div>
      <div style={{height:20}}/>
      <iframe
        width="100%"
        height={500}
        src="/babylon"
      />
    </main>
  )
}
