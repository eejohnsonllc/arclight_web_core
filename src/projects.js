export let projects = [
    {
        projectid: 1,
        projectname: 'Carolina Across 100 Initiative Survey Data Analysis',
        projectkeywords: ['State Policy', 'Tableau', 'Map', 'Yearly Evolution'],
        projctdescription: "We were hired by the Carolina Across 100 Initiative out of the UNC School of Government to analyze survey data that asked respondents from all across the state about the effect of COVID-19 on their organizations and communities. Using a suite of data analytics tools, we were able to identify common areas of concern and trends in expectations about recovery from the pandemic. We then created visualizations to present these trends to the initiative's stakeholders, to inform their decisions about how the university can help communities across the state. The results of our analysis can be viewed on the Carolina Across 100 website.",
        projectspan: [],
        projectimg: './pictures/gif for CX100 page.gif',
        tab: ['data-viz-tab', 'data-analysis-tab'],
        link: '/projects/carolina-across-100'
    },
    {
        projectid: 2,
        projectname: 'RAPID: Examining the Innovative Ecosystem During the COVID-19 Pandemic',
        projectkeywords: ['Policy Concentration', 'Policy Topic', 'Policy Context', 'Bar Chart', 'Yearly Evolution', 'Tableau'],
        projctdescription: 'For this ongoing project, Dr. Johnson assembled a Relational Database Management System (RDMS) that brings together data from the USASpending, Systems for Award Management, and Dynamic Small Business Search databases. Data cleaning and analysis was also performed using Python. Dr. Johnson and his collaborators recently authored a paper about the RDMS which was published in a special issue of Research Policy.',
        projectspan: [],
        tab: ['data-viz-tab', 'policy-evaluation-tab'],
        projectimg: 'https://ars.els-cdn.com/content/image/1-s2.0-S0048733321001943-gr2.jpg',
        link: '/projects/rapid-covid'
    },
    {
        projectid: 3,
        projectname: 'Review of the SBIR and STTR programs at the Department of Energy',
        projectkeywords: ['COVID-19', 'Survey Analysis', 'Data Visualization'],
        projctdescription: "Dr. Johnson served as the Principal Consultant for the Review of the Small Business Innovation Research and Small Business Technology Transfer Programs at the Department of Energy.",
        projectspan: [],
        tab: ['policy-evaluation-tab'],
        projectimg: 'https://www.nap.edu/cover/25674/450',
        link: '/projects/sbir-sttr'
    },
    {
        projectid: 4,
        projectname: 'Small Business Innovation Applied to National Needs',
        projectkeywords: ['SBIR Research', 'Innovation Policy', 'Economic Analysis', 'National Security'],
        projctdescription: "Dr. Evan Johnson co-authored groundbreaking research on the Small Business Innovation Research (SBIR) program and its critical role in advancing national technological needs. This NBER working paper reveals that SBIR-backed businesses produce three times more patents per firm and nearly eight times the federal contract engagement than their venture capital-backed counterparts.",
        projectspan: [],
        tab: ['policy-evaluation-tab', 'data-analysis-tab'],
        projectimg: './pictures/arclight_logo_horizontal.png',
        link: '/projects/small-biz-needs'
    },
    {
        projectid: 5,
        projectname: 'Grant Abstract Text Explorer',
        projectkeywords: ['COVID-19', 'Survey Analysis', 'Data Visualization'],
        projctdescription: "We built this tool to allow users to search the abstracts of 154,135 grant awards from 11 federal award agencies using key words. The tool shows users a table with descriptive information on all grants that include the search term in their abstracts, as well as visualizations that show which agencies these results come from, trends of awards over time, and whether the grants were awarded to socially and economically disadvantaged or women awardees. This tool can be used for a variety of purposes, from conducting research on a specific topic to informing future grant applications.",
        projectspan: [],
        tab: ['data-viz-tab','data-analysis-tab'],
        projectimg: './pictures/grant.png',
        link: '/projects/grant-explorer',
        tool_link:'http://grantabstract-dev.us-east-1.elasticbeanstalk.com/'
    }
]