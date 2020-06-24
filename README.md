# song-data-analysis
🦋🦋 moosify data analysis

## Goal
The main goal is to visualize songs and their audio features in a 3d plot.

## Data
The data was transferred from Moosify Web App - Firebase into a local JSON file (`./data/data_full.json`). Since this file contained sensible data, it is not included in this repo. The data contains Spotify Track Audio Features.

## Pre-processing
Data pre-processing was performed in JS (`dataBuilder.js`). The partly (without selected cols) pre-processed data is included in a second JSON file (`./data/songs.json`). In the Python notebook, I performed a PCA (= principal component analysis) for dimensionality reduction. 

## Result
The output plot is displayed below (has to be improved):
<img src="https://github.com/moritzmitterdorfer/song-data-analysis/blob/master/pca_3d.png" width="70%">
