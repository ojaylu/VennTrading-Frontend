import LoggedInLayout from "layouts/logged-in/MainLayout";
import { PageHeader, Select } from 'antd';
import UserAssets from 'components/logged-in/UserAssets';
import { useState, useEffect } from "react";
import _ from 'lodash';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { interpolateRainbow } from "d3-scale-chromatic";
import { Doughnut } from 'react-chartjs-2';
import { generateColors } from "utils/colorGenerator";
import { camelToTitle } from "utils/camelToTitle";
import { useQuery } from '@apollo/client';
import { GET_USER_ASSET } from 'gql/queries';
import styles from "public/styles/main_layout.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const { colors, borderColors } = generateColors(6, interpolateRainbow)

const dataa = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
}

function SelectAsset({ assetList, handler }) {
    return (
        <Select
            style={{
                width: 120,
            }}
            options={
                assetList.map(asset => ({value: asset, label: asset}))
            }
            onChange={handler}
        />
    )
}

export default function AssetsOverview({ symbols }) {
    const { loading, error, data } = useQuery(GET_USER_ASSET, {
        fetchPolicy: "network-only"
    });
    const [selectedAsset, setSelectedAsset] = useState("");
    const [assetDetails, setAssetDetails] = useState([]);
    const assetHandler = selectedAsset => setSelectedAsset(selectedAsset);

    const {assetList = [], assets = []} = data? data.userAssets: {};

    useEffect(() => {
        setAssetDetails(assets.reduce((accum, current) => {
            const {asset: name, __typename, btcValuation, ...rest} = current;
            accum[name] = rest;
            return accum;
        }, {}))
    }, [data]);

    return (
        <LoggedInLayout>
            {/* <PageHeader 
                title="Overview on Asset" 
                extra={<SelectAsset assetList={assetList} handler={assetHandler} />} 
                className={styles.panel}
            /> */}
            {/* <div 
                style={{display: "flex", height: "500px"}} 
                className={styles.panel}
            >
                <div
                    style={{width: "50%", position: "relative"}}
                    className={styles.container}
                >
                    <Doughnut 
                        data={{
                            labels: assetList,
                            datasets: [
                              {
                                data: Object.values(assetDetails).map(values => values.total),
                                backgroundColor: colors,
                                borderColor: borderColors,
                                borderWidth: 1
                              }
                            ]
                        }} 
                        options={{
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Custom Chart Title',
                                }
                            },
                            responsive: true,
                            maintainAspectRatio: false
                        }}
                    />
                </div>
                <div
                    style={{width: "50%", position: "relative"}}
                    className={styles.container}
                >
                    <Doughnut 
                        data={{
                            labels: assetDetails[selectedAsset] && Object.keys(assetDetails[selectedAsset]).map(assetName => camelToTitle(assetName)),
                            datasets: [
                              {
                                data: assetDetails[selectedAsset] && Object.values(assetDetails[selectedAsset]).map(value => Number(value)),
                                backgroundColor: colors,
                                borderColor: borderColors,
                                borderWidth: 1
                              }
                            ]
                        }}
                        options={{
                            plugins: {
                            title: {
                                display: true,
                                text: 'Custom Chart Title'
                            }
                            },
                            responsive: true,
                            maintainAspectRatio: false
                        }}
                        // redraw
                    />
                </div>
            </div> */}
            <PageHeader title="Overall Assets" className={styles.panel} />
            <UserAssets className={styles.panel} data={assets} loading={loading} />
        </LoggedInLayout>
    )
}