import React, { FC } from 'react'
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material'


const Tooltip: FC<MuiTooltipProps> = props => {
	return (
		<MuiTooltip {...props} title="haha">
			{props.children}
		</MuiTooltip>
	)
}


export default Tooltip
export type TooltipProps = MuiTooltipProps
