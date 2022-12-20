import Qrcode from 'qrcode.react';



function QrCard({ qrRef, url, bgColor, qrColor, customImg, noImg }) {
	let imgCustom =  undefined;

	noImg ?
		imgCustom = null :
		customImg ?
			imgCustom = customImg :
			imgCustom = './logo-kanini-icon.png';

	return (
		<article className="card">
			<div className="qr-box"
				ref={qrRef}
				style={{ backgroundColor: bgColor }}>
			
				<Qrcode
					size={250}
					value={url ? url : 'https://kanini.com'}
					bgColor={bgColor}
					fgColor={qrColor}
					level='H'
												
				includeMargin
					imageSettings={{
						src: imgCustom,
						height: 45,
						width: 45,
						excavate: true,
					}}
					/>
				

			</div>
			<h2 className="word-wrap">{url ? url : 'kanini.com'}</h2>
			
		</article>
	);
}

export default QrCard;