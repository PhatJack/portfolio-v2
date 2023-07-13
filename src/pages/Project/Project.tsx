import ProjectItem from "./ProjectItem"
import demo from '../../assets/demo.png'
import demo2 from '../../assets/demo2.png'
import demo3 from '../../assets/demo3.png'
import demo4 from '../../assets/demo4.jpg'

const Project = () => {
	return (
		<div id="project" className="wrap-container">
			<h1 className="h1-text-custom">Projects</h1>
			<p className="text-center py-8">
				Deserunt in deserunt qui ad. Excepteur do aliquip ipsum consequat ex deserunt laborum ad ad tempor velit qui do. Duis cupidatat laboris ex veniam laborum amet tempor anim mollit dolor ex consequat enim sunt. Voluptate est incididunt eu cupidatat cillum ut ea qui dolor.
				Ipsum magna laboris sit pariatur eiusmod ea eant laborum in voluptate. Reprehenderit ullamco veniam. Eu sunt adipisicing consequat est exercitation occaecat deserunt est laboris labore amet. In commodo irure labore commodo ullamco consequat ea voluptate sit laboris ad reprehenderit duis. Aute deserunt fugia.
			</p>
			<div className="grid sm:grid-cols-2 gap-12">
				<ProjectItem img={demo} title={"E-commerce website Design"} />
				<ProjectItem img={demo2} title={"Different Version of Instagram"} />
				<ProjectItem img={demo3} title={"Women Collections"} />
				<ProjectItem img={demo4} title={"Skateboard Shopping"} />
			</div>
		</div>
	)
}

export default Project