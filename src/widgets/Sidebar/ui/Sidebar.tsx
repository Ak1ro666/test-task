import { useCallback, useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { Navigation } from './Navigation/Navigation.tsx';

import cn from '@/shared/lib/classNames/classNames.ts';

import styles from './Sidebar.module.scss'

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onChangeCollapsed = useCallback(() => {
        setCollapsed(prev => !prev)
    }, [collapsed])

    return (
        <div className={cn(styles.Sidebar, {
            [styles.collapsed]: collapsed
        })}>
            <Navigation />
            <Button onClick={onChangeCollapsed} className={styles.sidebarButton} square>
                {collapsed ? '>' : '<'}
            </Button>
        </div>
    )
}