import { BiPaperPlane } from 'react-icons/bi'
import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react'

const Contact = () => {

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="contact" className="wrap-container">
			<h1 className="h1-text-custom"
				data-aos="fade-up"
				data-aos-easing="linear"
				data-aos-duration="500"
			>Contact</h1>
			<form
				action="https://getform.io/f/0be65de4-8aa9-48f4-8d7a-31c3f197d99f"
				method="POST"
				encType="multipart/form-data">
				<div className="grid md:grid-cols-2 gap-4 w-full py-2">
					<div className="flex flex-col py-2"
						data-aos="zoom-in-up"
						data-aos-easing="linear"
						data-aos-duration="500"

					>
						<label className="uppercase text-sm py-2" htmlFor="">Name</label>
						<input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />
					</div>
					<div className="flex flex-col py-2"
						data-aos="zoom-in-up"
						data-aos-easing="linear"
						data-aos-duration="500"
					>
						<label className="uppercase text-sm py-2" htmlFor="">
							Phone Number
						</label>
						<input className="border-2 rounded-lg p-3 flex border-gray-300" type="tel" name="phone" />
					</div>
				</div>
				<div className="flex flex-col py-2"
					data-aos="zoom-in-up"
					data-aos-easing="linear"
					data-aos-duration="700"
				>
					<label className="uppercase text-sm py-2" htmlFor="">Email</label>
					<input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" />
				</div>
				<div className="flex flex-col py-2"
					data-aos="zoom-in-up"
					data-aos-easing="linear"
					data-aos-duration="900"
				>
					<label className="uppercase text-sm py-2" htmlFor="">Subject</label>
					<input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" />
				</div>
				<div className="flex flex-col py-2"
					data-aos="zoom-in-up"
					data-aos-easing="linear"
					data-aos-duration="1100"

				>
					<label className="uppercase text-sm py-2" htmlFor="">Message</label>
					<textarea className="border-2 rounded-lg p-3 flex border-gray-300" rows={10} name="message"></textarea>
				</div>
				<button
					data-aos="zoom-in-up"
					data-aos-easing="linear"
					data-aos-duration="500"
					className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 mb-10 rounded-lg flex justify-center items-center gap-3 font-bold hover:bg-[#001b5e]/80 hover:-translate-y-1 transition-all">
					<BiPaperPlane size={20} />
					Send Message
				</button>
			</form>
		</div>
	)
}

export default Contact