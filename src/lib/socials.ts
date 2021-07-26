import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

interface Social {
    name: string;
    url: string;
    icon: IconDefinition;
    bgColor: string;
    color: string;
}

const socials: Social[] = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/josh.gretz.3/',
        icon: faFacebook,
        bgColor: '#3b5998',
        color: '#ffffff'
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/joshgretz',
        icon: faInstagram,
        bgColor: '#4c5fd7',
        color: '#ffffff'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/joshgretz',
        icon: faTwitter,
        bgColor: '#1da1f2',
        color: '#ffffff'
    },
    {
        name: 'Github',
        url: 'https://github.com/jgretz',
        icon: faGithub,
        bgColor: '#000000',
        color: '#ffffff'
    },
];

export default socials;
