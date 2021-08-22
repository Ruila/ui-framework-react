import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

MoAccordions.prototype = {
    data: PropTypes.array,
    headerBgColor: PropTypes.string,
    expandedHeaderBgColor: PropTypes.string
}
const useStyles = makeStyles((aa)=>{
    console.log("check", aa)
    return {
        root: {
            backgroundColor: props => props.headerBgColor,
            color: "#fff"
        },
        expanded: {
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

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function MoAccordions({data, headerBgColor, expandedHeaderBgColor}) {
    const [expanded, setExpanded] = React.useState('panel1');
    const classes = useStyles({ headerBgColor, expandedHeaderBgColor });
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const willReturn = data.map((item, index)=>{
        return (
            <Accordion square key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                <MuiAccordionSummary
                    classes={{
                        root: classes.root,
                        expanded: classes.expanded
                    }}
                >
                    <Typography>Header #{index}</Typography>
                </MuiAccordionSummary>
                <AccordionDetails>
                    <Typography>
                        ss
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