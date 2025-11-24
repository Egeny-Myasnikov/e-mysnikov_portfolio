'use client'

import { JSX, ReactNode, useEffect } from 'react'
import { useProjectsStore } from '../stores/projectStore'

interface FetchingProjectsProps {
	children: ReactNode
}

export const FetchingProjects = ({
	children,
}: FetchingProjectsProps): JSX.Element => {
	const projectsFetching = useProjectsStore(state => state.fetchProjects)

	useEffect(() => {
		projectsFetching()
	}, [projectsFetching])

	return <>{children}</>
}
