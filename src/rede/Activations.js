const coming_soon = 'coming soon!'
const Pipe = (value, ...fns) => console.log(coming_soon)
const ArcTan = value => console.log(coming_soon)
const BentIdentity = value => console.log(coming_soon)
const BinaryStep = value => console.log(coming_soon)
const Gaussian = value => console.log(coming_soon)
const Identity = value => console.log(coming_soon)
const LeakyReLU = value => console.log(coming_soon)
const Swish = value => console.log(coming_soon)
const ReLU = value => console.log(coming_soon)
const SELU = value => console.log(coming_soon)
const Sigmoid = value => console.log(coming_soon)
const SigmoidRcional = value => console.log(coming_soon)
const HardSigmoid = value => console.log(coming_soon)
const SiLU = value => console.log(coming_soon)
const Sinc = value => console.log(coming_soon)
const Sinusoid = value => console.log(coming_soon)
const SoftSign = value => console.log(coming_soon)
const SoftPlus = value => console.log(coming_soon)
const TanH = value => console.log(coming_soon)
const PReLU = a => value => console.log(coming_soon)
const ELU = a => value => console.log(coming_soon)

module.exports = {
	Pipe,
	ArcTan,
	BentIdentity,
	BinaryStep,
	Gaussian,
	Identity,
	LeakyReLU,
	Swish,
	ReLU,
	SELU,
	Sigmoid,
	SigmoidRcional,
	HardSigmoid,
	SiLU,
	Sinc,
	Sinusoid,
	SoftSign,
	SoftPlus,
	TanH,
	PReLU,
	ELU
}