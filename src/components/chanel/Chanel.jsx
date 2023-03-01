
import { Link } from 'react-router-dom'

const ChannelCard = ({ video, marginTop }) => {
	return (
		<div
			sx={{
				boxShadow: 'none',
				borderRadius: '20px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: { xs: '356px', md: '320px' },
				height: '326px',
				margin: 'auto',
				marginTop: marginTop,
			}}
		>
			<Link to={`/channel/${video?.id.channelId ? video?.id.channelId : video?.id}`}>
				<div
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						textAlign: 'center',
					}}
				>
					<div
						image={video?.snippet?.thumbnails?.high?.url}
						alt={video?.snippet?.title}
						sx={{
							borderRadius: '50%',
							height: '180px',
							width: '180px',
							mb: 2,
							border: '1px solid #e3e3e3',
						}}
					/>
					<div variant={'h6'}>
						{video?.snippet?.title}{' '}
						<div sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
					</div>
					{video?.statistics?.subscriberCount && (
						<div sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
							{parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
						</div>
					)}
				</div>
			</Link>
		</div>
	)
}

export default ChannelCard