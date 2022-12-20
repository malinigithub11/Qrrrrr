import {QRCodeSVG} from 'qrcode.react';

function QrCardsvg({ qrRef, url, bgColor, qrColor, customImg, noImg }) {
	let imgCustom =  undefined;

	noImg ?
		imgCustom = null :
		customImg ?
			imgCustom = customImg :
			imgCustom = './logo-deloitte-icon.png';

	return (
		<article className="card">
			<div className="qr-box"
				ref={qrRef}
				style={{ backgroundColor: bgColor }}>
			
				< QRCodeSVG
					size={250}
					value={url ? url : 'https://deloitte.com'}
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
			<h2 className="word-wrap">{url ? url : 'deloitte.com'}</h2>
			<p>Enter the URL of your site and create your custom Qr Code in a few seconds with a few clicks.</p>
		</article>
	);
}

export default QrCardsvg;