import { Select, Button, Input, message } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { indicatorOptions } from "utils/indicators";

const selectOptions = Object.keys(indicatorOptions).map((value) => ({
    label: value,
    value: value,
  }));

export default function StrategyChooser({ indicators, addAddit=()=>{}, removeAddit=()=>{}, changeAddit=()=>{}, style={}, chosenIndicators, setChosenIndicators, saveHandler }) {
    const handleAddIndicator = (selectedIndicator) => {
        if(selectedIndicator in chosenIndicators) {
            message.warning("indicator already added");
            return;
        }

        setChosenIndicators(currentIndicators => {
            return ({
                ...currentIndicators,
                [selectedIndicator]: indicatorOptions[selectedIndicator]
            })
        })

        addAddit(selectedIndicator);
    };
    
    const handleRemovePlayers = (index, indicator) => {
        return () => { 
            setChosenIndicators(currentIndicators => {
                const {[indicator]: _, ...rest} = currentIndicators;
                return rest;
            })

            removeAddit(index);
        }
    };
    
    const handleInputChange = (index, indicator, e) => {
        const updatedField = e.target.name;
        const updatedValue = e.target.value;

        setChosenIndicators(currentIndicators => {
            const values = {...currentIndicators};
            values[indicator][updatedField] = updatedValue;
            return values;
        })

        changeAddit(index, updatedField, updatedValue);
    };

    console.log("chosen indicators" + JSON.stringify(chosenIndicators))

    return (
        <div style={{ height: "100%", ...style }}>
            <Select
                onSelect={handleAddIndicator}
                value={null}
                options={selectOptions}
                style={{ width: "100%" }}
                placeholder="Choose Indicator"
            />
            <div style={{ marginBottom: "auto", overflowY: "scroll" }}>
                {
                    indicators? indicators.map((indicator, outerIndex) => (
                        <div style={{ display: "flex" }} key={outerIndex}>
                            {Object.keys(indicator).map((field, innerIndex) =>
                                field == "indicator" ? (
                                    <p key={`${outerIndex}-${innerIndex}`}>
                                    {indicator[field]}
                                    </p>
                                ) : (
                                    <Input
                                    // type="number"
                                    name={field}
                                    onChange={(e) => handleInputChange(outerIndex, indicator.indicator, e)}
                                    placeholder={field}
                                    key={`${outerIndex}-${innerIndex}`}
                                    />
                                )
                            )}
                            <Button
                                onClick={handleRemovePlayers(outerIndex, indicator.indicator)}
                                key={outerIndex}
                                icon={<CloseOutlined />}
                                shape="circle"
                                type="text"
                            />
                        </div>
                    )):
                    Object.keys(chosenIndicators).map((indicator, outerIndex) => {
                        return (
                            <div style={{ display: "flex" }} key={outerIndex}>
                                <p style={{ flexBasis: "10%" }} key={outerIndex}>{ indicator }</p>
                                {Object.keys(chosenIndicators[indicator]).map((field, innerIndex) => (
                                    <Input
                                        // type="number"
                                        name={field}
                                        onChange={(e) => handleInputChange(outerIndex, indicator, e)}
                                        placeholder={field}
                                        key={`${outerIndex}-${innerIndex}`}
                                    />
                                ))}
                                <Button
                                    onClick={handleRemovePlayers(outerIndex, indicator)}
                                    key={`${outerIndex}-button`}
                                    icon={<CloseOutlined />}
                                    shape="circle"
                                    type="text"
                                />
                            </div>
                        )
                    })
                }
            </div>
            <Button 
                onClick={saveHandler}
                style={{ width: "100%" }}
                type={indicators? "default": "primary"}
            >Save Strategy
            </Button>
        </div>
    )
}