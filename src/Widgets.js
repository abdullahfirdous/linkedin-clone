import React from 'react'
import './Widgets.css'

// Importing Icons

import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>

            <div className='widgets__articleRight'>
                <h4> {heading} </h4>
                <p> {subtitle} </p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>Linked News</h2>
                <InfoIcon />
            </div>
            {newsArticle(
                'This is my first redux react Linkedin Clone Project',
                'Top news - 7896 readers'
            )}
            {newsArticle(
                'Stocks Soar as Market Breaks New Records',
                'Business Buzz - 4,567 readers'
            )}
            {newsArticle(
                'Marvel Announces New Phase of Movies: What to Expect',
                'Entertainment Spotlight - 5,678 views'
            )}
            {newsArticle(
                'Top 5 Health Trends You Need to Know in 2025',
                'Health & Wellness - 3,432 readers'
            )}
            {newsArticle(
                'Best Budget Travel Destinations for 2025',
                'Travel Trends - 2,345 readers'
            )}
            {newsArticle(
                'How to Build a Sustainable Lifestyle in 2025',
                'Lifestyle Update - 9,001 readers'
            )}
        </div>
    )
}

export default Widgets
