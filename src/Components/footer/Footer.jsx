import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="second-sec">
      <div className="container ">
        <div className='m-5 p-md-5'>
          <Link className="text-white-50 ">
            <h6 className="my-4 pt-5 ">Questions? Contact us.</h6>
          </Link>
          <div className="d-flex  justify-content-between">
            <div>
              <Link className=" text-white-50">
                <h6 className="mb-4">FAQ</h6>
              </Link>
              <Link className=" text-white-50">
                <h6 className="mb-4">Investor Relations</h6>
              </Link>
              <Link className=" text-white-50">
                <h6 className="mb-4">Privacy</h6>
              </Link>
              <Link className=" text-white-50">
                <h6 className="mb-4">Speed Test</h6>
              </Link>
            </div>
            <div>
              <Link className=" text-white-50">
                <h6 className="mb-4">Help Center</h6>
              </Link>
              <Link className=" text-white-50">
                <h6 className="mb-4">Jobs</h6>
              </Link>
              <Link className=" text-white-50">
                <h6 className="mb-4">Cookie Preferences</h6>
              </Link>
              <Link className=" text-white-50">
                <h6 className="mb-4">Legal Notices</h6>
              </Link>
            </div>
            <div>
              <Link className=" text-white-50">
                <h6 className="mb-4">Account</h6>
              </Link>
              <Link className=" text-white-50">
                <h6 className="mb-4">Ways to Watch</h6>
              </Link>
              <Link className=" text-white-50">
                <h6 className="mb-4">Corporate Information</h6>
              </Link>
              <Link className=" text-white-50">
                <h6 className="mb-4">Only on Netflix</h6>
              </Link>
            </div>
            <div>
              <Link className=" text-white-50">
                <h6 className="mb-4">Media Center</h6>
              </Link>
              <Link className=" text-white-50">
                <h6 className="mb-4">Terms of Use</h6>
              </Link>
              <Link className=" text-white-50">
                <h6 className="mb-4">Contact Us</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer