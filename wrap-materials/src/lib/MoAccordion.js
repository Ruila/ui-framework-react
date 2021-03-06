import React from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

MoAccordions.prototype = {
    data: PropTypes.array,
    headerBgColor: PropTypes.string,
    expandedHeaderBgColor: PropTypes.string,
    titleColor: PropTypes.string
}

const useStyles = makeStyles({
    root: {
        "&.MuiAccordionSummary-root": {
            backgroundColor: props => props.headerBgColor
        },
        "&.MuiAccordionSummary-root .MuiAccordionSummary-content": {
            color: props => props.titleColor
        },
        "&.MuiAccordionSummary-root.Mui-expanded": {
            backgroundColor: props => props.expandedHeaderBgColor
        }
    }
});
const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionDetails = withStyles(() => ({
    root: {
      
    },
}))(MuiAccordionDetails);

export default function MoAccordions({data, headerBgColor, expandedHeaderBgColor, titleColor}) {
    const [expanded, setExpanded] = React.useState('panel1');
    const classes = useStyles({ headerBgColor, expandedHeaderBgColor, titleColor });
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const willReturn = data.map((item, index)=>{
        return (
            <Accordion square key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                <MuiAccordionSummary
                    classes={{
                        root: classes.root
                    }}
                >
                    <Typography>Header {titleColor} #{index}</Typography>
                </MuiAccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {item.content}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        )})

    return (
        <div>
            {willReturn}
        </div>
    );
}