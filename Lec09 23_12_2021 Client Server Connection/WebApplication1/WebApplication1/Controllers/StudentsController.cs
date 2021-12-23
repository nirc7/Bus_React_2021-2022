using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class StudentsController : ApiController
    {
        //[DisableCors]
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(StudentsDBMOCK.students);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                //return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Get(int id)
        {
            try
            {
                Student stu2Return = StudentsDBMOCK.students.FirstOrDefault(stu => stu.Id == id);
                if (stu2Return != null)
                {
                    return Ok(stu2Return);
                }
                return Content(HttpStatusCode.NotFound,
                    $"student with id={id} was not found in Get!!!");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Post([FromBody] Student value)
        {
            try
            {
                StudentsDBMOCK.students.Add(value);
                return Created(new Uri(Request.RequestUri.AbsoluteUri + value.Id), value);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Put(int id, [FromBody] Student value)
        {
            try
            {
                Student stu2Update = StudentsDBMOCK.students.SingleOrDefault(stu => stu.Id == id);
                if (stu2Update!=null)
                {
                    stu2Update.Name = value.Name;
                    stu2Update.Grade = value.Grade;
                    return Ok(stu2Update);
                }
                return Content(HttpStatusCode.NotFound,
                    $"student with id={id} was not found for Update!!!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                Student stu2Del = StudentsDBMOCK.students.SingleOrDefault(stu => stu.Id == id);
                if (stu2Del != null)
                {
                    StudentsDBMOCK.students.Remove(stu2Del);
                    return Ok();
                }
                return Content(HttpStatusCode.NotFound,
                    $"student with id={id} was not found for delete!!!");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
