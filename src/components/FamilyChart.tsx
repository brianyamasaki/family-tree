import React, { useEffect, useRef } from 'react';
import * as f3 from 'family-chart';
import f3Data from '@data/people2.json';
import 'family-chart/styles/family-chart.css';
import './FamilyChart.scss';

const FamilyTree = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {

      const f3Chart = f3.createChart('#FamilyChart', f3Data as f3.Data)
        .setTransitionTime(1000)
        .setCardXSpacing(250)
        .setCardYSpacing(150);

      f3Chart.setCardHtml()
          .setCardInnerHtmlCreator(d => {
          return `
            <div class="card-inner" >
              <div>
                <p>${d.data.data["first name"]} ${d.data.data["last name"]}</p>
                <p>${d.data.data["family_kanji"]} ${d.data.data["kanji"]}</p>
              </div>
            </div>`
        })

      f3Chart.updateTree({initial: true});
      setTimeout(() => {
        const tree = f3Chart.store.getTree();
        if (!tree) return;
        const datum = tree.data[0]  // Currently choose Kumazo

        // console.log(datum.data.data)
        f3.handlers.cardToMiddle({datum, svg: f3Chart.svg, svg_dim: f3Chart.svg.getBoundingClientRect(),  transition_time: 1000})
      }, 4000)

    }
  }, []);

  return <div className="f3" id="FamilyChart" ref={chartRef} />;
};

export default FamilyTree;