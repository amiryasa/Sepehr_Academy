import { SelectBox } from "../common/SelectBox/SelectBox";
import { Progress2step } from "../Progress2step/Progress2step";
import { SelectCheck } from "../SelectCheck/SelectCheck";

import "./CoursesFilter.css";

const CoursesFilter = (props) => {



  let isHidden = true;
  const handleFilter = () => {
    const myElement = document.getElementById("filterring");

    if (isHidden) {
      myElement.style.opacity = 1;
      myElement.style.visibility = "visible";
      isHidden = false;
    } else {
      myElement.style.opacity = 0;
      myElement.style.visibility = "hidden";
      isHidden = true;
    }

  };

  return (
    <div className="CoursesFilter">
      <div className="CoursesFilterIcon" onClick={handleFilter}></div>
      <div className="CoursesFilterContainer" id="filterring">
        <div className="CoursesFilterItems">
          <div>
            <SelectBox
              title={props.sortbyTitle}
              handleSelectbox={props.handleSelectboxSortby}
              selectState={props.selectStateSortby}
              items={props.sortbyItem}
            />
          </div>

          <div>
            <SelectBox
              title={props.upOrDownTitle}
              handleSelectbox={props.handleSelectboxUpOrDown}
              selectState={props.selectStateUpOrDown}
              items={props.upOrDownItem}
            />
          </div>

          <hr></hr>

          <div>
            <Progress2step
              min={props.minCount01}
              max={props.maxCount01}
              handleProgress2step={props.handleProgress2step01}
              valueOf2step={props.valueOf2step01}
              title={props.titleOf2step01}
              step={props.step01}
            />
          </div>

          <div>
            <Progress2step
              min={props.minCount02}
              max={props.maxCount02}
              handleProgress2step={props.handleProgress2step02}
              valueOf2step={props.valueOf2step02}
              title={props.titleOf2step02}
              step={props.step02}
            />
          </div>

          <div>
            <Progress2step
              min={props.minCount03}
              max={props.maxCount03}
              handleProgress2step={props.handleProgress2step03}
              valueOf2step={props.valueOf2step03}
              title={props.titleOf2step03}
              step={props.step03}
            />
          </div>

          <hr></hr>

          <div>
            <SelectCheck
              listOfTeacher={props.listOfTeacher}
              handleSelection={props.handleSelection}
              teacherState={props.teacherState}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CoursesFilter };
