import { SelectBox } from "../common/SelectBox/SelectBox";
import { SelectCheck } from "../SelectCheck/SelectCheck";
import "./NewsFilter.css";

const NewsFilter = (props) => {

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
    <div className="NewsFilter">
      <div className="NewsFilterIcon" onClick={handleFilter}></div>
      <div className="NewsFilterContainer" id="filterring">
        <div className="NewsFilterItems">
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
            <SelectCheck
              listOfItem={props.listOfTeacher}
              handleSelection={props.handleSelection}
              state={props.teacherState}
              title={props.selectionTitle01}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export { NewsFilter };
