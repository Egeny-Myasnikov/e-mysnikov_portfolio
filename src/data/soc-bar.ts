import { IconName } from '../components/icon/Icon'

interface ISocBarData {
	href: string
	title: string
	nameIcon: IconName
}

export const socBarData: ISocBarData[] = [
	{
		href: 'https://github.com/Egeny-Myasnikov',
		title: 'github',
		nameIcon: 'GithubIcon',
	},
	{
		href: 'https://t.me/fljenya',
		title: 'telegram',
		nameIcon: 'TelegramIcon',
	},
	{
		href: 'mailto:fl-jenya@yandex.ru',
		title: 'Email',
		nameIcon: 'EmailIcon',
	},
]
