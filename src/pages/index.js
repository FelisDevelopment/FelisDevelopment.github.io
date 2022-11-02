import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <div className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className={`container ${styles.container}`}>
                <img src="img/felsilogofull.png" alt="felislogo" width={256} height={256} />
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </div>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Felis Development`}
            description="Documentation for Felis Development resources / scripts <head />">
            <HomepageHeader />
        </Layout>
    );
}
