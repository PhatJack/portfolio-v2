
const Contact = () => {
	return (
		<div id="contact" className="container">
			<h1 className="h1-text-custom">Contact</h1>
			<form 
				action="https://getform.io/f/0be65de4-8aa9-48f4-8d7a-31c3f197d99f" 
				method="POST" 
				encType="multipart/form-data">
				<div className="grid md:grid-cols-2 gap-4 w-full py-2">
					<div className="flex flex-col py-2">
						<label className="uppercase text-sm py-2" htmlFor="">Name</label>
						<input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />
					</div>
					<div className="flex flex-col py-2">
						<label className="uppercase text-sm py-2" htmlFor="">
							Phone Number
						</label>
						<input className="border-2 rounded-lg p-3 flex border-gray-300" type="tel" name="phone" />
					</div>
				</div>
				<div className="flex flex-col py-2">
					<label className="uppercase text-sm py-2" htmlFor="">Email</label>
					<input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" />
				</div>
				<div className="flex flex-col py-2">
					<label className="uppercase text-sm py-2" htmlFor="">Subject</label>
					<input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" />
				</div>
				<div className="flex flex-col py-2">
					<label className="uppercase text-sm py-2" htmlFor="">Message</label>
					<textarea className="border-2 rounded-lg p-3 flex border-gray-300" rows={10} name="message"></textarea>
				</div>
				<button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
					Send Message
				</button>
			</form>
		</div>
	)
}

export default Contact