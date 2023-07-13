import ProjectItem from "./ProjectItem"
import demo from '../../assets/demo.png'
import demo2 from '../../assets/demo2.png'
import demo3 from '../../assets/demo3.png'
import demo4 from '../../assets/demo4.jpg'

const Project = () => {
	return (
		<div id="project" className="container">
			<h1 className="h1-text-custom">Projects</h1>
			<p className="text-center py-8">
				Deserunt in deserunt qui ad. Excepteur do aliquip ipsum consequat ex deserunt laborum ad ad tempor velit qui do. Duis cupidatat laboris ex veniam laborum amet tempor anim mollit dolor ex consequat enim sunt. Voluptate est incididunt eu cupidatat cillum ut ea qui dolor.
				Amet ipsum consequat enim officia Lorem eu adipisicing dolor consequat ad voluptate ea proident consectetur. Ipsum magna laboris sit pariatur eiusmod ea ea. Est cillum ad incididunt ullamco eu adipisicing officia ea. Tempor magna culpa mollit quis duis. Anim aliquip nisi magna occaecat pariatur quis ex proident elit. Est commodo officia mollit deserunt minim ad.
				Enim laboris quis occaecat nisi veniam.Et sint laborum in voluptate. Reprehenderit proident voluptate deserunt dolore dolore enim ullamco veniam. Eu sunt adipisicing consequat est exercitation occaecat deserunt est laboris labore amet. In commodo irure labore commodo ullamco consequat ea voluptate sit laboris ad reprehenderit duis. Aute deserunt fugia.
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