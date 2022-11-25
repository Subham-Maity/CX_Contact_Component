import React from 'react'
const Contacts = () => {
    return (
        <div align="center">
            <h3>Contact Us</h3>
            <div>
                You can contact us via{' '}
                <table>
                    <th>
                        {' '}
                        <a
                            href="https://www.youtube.com/channel/UCztgfCRJci6nx0VPVZcFstw/featured"
                            target="_blank"
                        >
                            <img
                                alt="Youtube"
                                src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"
                            />
                        </a>{' '}
                    </th>
                    <th>
                        {' '}
                        <a href="https://www.instagram.com/code.xam/" target="_blank">
                            <img
                                alt="Gmail"
                                src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white"
                            />
                        </a>{' '}
                    </th>
                    <th>
                        {' '}
                        <a href="https://twitter.com/code_xam" target="_blank">
                            <img
                                alt="Twitter"
                                src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white"
                            />
                        </a>{' '}
                    </th>
                    <th>
                        {' '}
                        <a href="https://github.com/Subham-Maity" target="_blank">
                            <img
                                alt="Gmail"
                                src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                            />
                        </a>{' '}
                    </th>
                    <th>
                        {' '}
                        <a href="https://www.linkedin.com/in/subham-xam/" target="_blank">
                            <img
                                alt="LinkedIn"
                                src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
                            />
                        </a>{' '}
                    </th>
                    <th>
                        {' '}
                        <a href="mailto:codexam.personal@gmail.com" target="_blank">
                            <img
                                alt="Gmail"
                                src="https://img.shields.io/badge/-Gmail-D14836?style=for-the-badge&logo=Gmail&logoColor=white"
                            />
                        </a>{' '}
                    </th>
                </table>
            </div>
        </div>
    )
}
export default Contacts
