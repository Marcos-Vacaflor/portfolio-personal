import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
export const ProjectCard = ({ title, description, imgUrl, pageLink, doc }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img  alt="" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-icons" ><a  href={doc} download={""}><FontAwesomeIcon  icon={faFilePdf} style={{color: "#ffffff",}} /></a>
          <a href={pageLink} target="blanch"><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#ffffff",}} /></a>
          </div>
        </div>
        
      </div>
    </Col>
  )
}
