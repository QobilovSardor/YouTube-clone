/* eslint-disable react/jsx-pascal-case */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {LeftSidebar, Videos} from '../';
import { Apiservice } from '../../services/api-services';
import './chanel.css';
import Numeric_label from "react-pretty-numbers";


const ChannelCard = () => {
	const [chanelDetail, setChanelDetail] = useState([]);
	const [videos, setVideos] = useState();
	const {id} = useParams();

	useEffect(() => {
		const getData = async () => {
			try {
				const dataChanel = await Apiservice.fetching(`channels?part=snippet&id=${id}`);
				setChanelDetail(dataChanel.data.items[0])
				const videoDetail = await Apiservice.fetching(`search?channelId=${id}&part=snippet`);
				setVideos(videoDetail.data.items)
			} catch (error) {
				console.log(error);
			}
		}
		getData();
	}, [id])
	return (
		<div>
			<LeftSidebar />
			<div className='chanel'>
				<img src={chanelDetail?.brandingSettings?.image.bannerExternalUrl} alt="chanelImg" className='chanel-img' />

				<div className="chanel-acount">
					<img src={chanelDetail?.snippet?.thumbnails?.default.url} alt="chanel-acount" />
					<div className="chanel-acount__content">
						<h3>{chanelDetail?.snippet?.localized.title}</h3>
						<span className='text-muted'>{chanelDetail?.snippet?.customUrl}</span>
						<span className='text-muted'>
						<Numeric_label params={{ commafy:true, shortFormat: true, justification: 'L'}}>{chanelDetail?.statistics?.subscriberCount}</Numeric_label> &nbsp;
						subscribers
						</span>
					</div>
				</div>
					<Videos videos={videos} />
			</div>
		</div>
	)
}

export default ChannelCard