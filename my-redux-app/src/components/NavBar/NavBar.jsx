import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice"
import "./NavBar.scss"

const NavBar = () => {
  const { user } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.key == "Enter") {
      navigate("/search/"+ search)
    }
  };
  
  return (
    <div className="nav-bar">
      
      {user ? (
        <>
        <span>
        <Link to="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATdJREFUSEvtlv1twjAQxe9tApuUSQqT0E5SmAQ2aTd56CHbColtzg5RJNT7J4l0zu98H8+GrWRYiWvdYJIbM9sAuPYE3wUm+WVmxwD8BqDvJmsGk/wws8uI0gxvAhegiuHPzA4taXeDK9C4+Sa4Cxwa6ddRRMF3APSs2lNwgP6YmWrrMRfcA1YjeaEp7QC2tSirYJI9UBe8CJ4JjfATgENu51kwSdV07ymowyc74xPwSJUc/3W5TOAPYMesuigFpwd4Ai8MnajbEKyaqrZLmmT1JMA41YLruJN9Dt57g5GYnOPi4Sm29DhdAezc4yTHF83xe4DVHKlug37ICc5LdzwRg4ro/INTg/eM02qpTuoTwydZUr22YzHMsRRMN4+oZHdO7g4drkcu36RivVo4d93TO9dcQGn9DftKpR+bQBHjAAAAAElFTkSuQmCC"/> </Link>
        
      </span>
      <div class="search-container">
        <input type="text" name="search" class="search-input" onKeyUp={handleSearch} />
        <img class="search-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZZJREFUSEvlltFRAzEMRKVKIJWEVAKpBKiEUAlHJYRKlixj3yg6nyxPyOQDz+Qjk9hP0q4lq9xo6Y24kgYDuBeR+jmq6nRJ0CG4wJ5E5HkFchSRd1V9GQ1iFQzgQUQ+kgcOB9AEA2AGNsuDiHyLCMtLCBcD256+syJ1vWazX4BdpoTsIz0BVCmoP9cuo38L/FVMJHoKP1Pq4gXKQjiNt+ntOzsYwJspXSryCiiZcz/XQVX3EdyDa7aTqu56UfvfATBrat/N2oNRDqOuNNTQcqbcqGo14uKcGexKFW5ai8YZM5TKgucrlDVVo9Q0F+XiCq+WBduGMWQsYzB7RiiXBaejDUrNO12dndOYhwH4K1d3e0B0j4ec7Yw1fI9Z7rkDlfa3eiWMtlambrbcl+nV4dhrTLFutk1w0bo1nT5LR5rMnL5z04nbUyOyN4/p0Dp1oi5GGEdmHZFdePYF8hgEMDcK1/1CeGrslfLbN9dvSVtzNwtPg0emRQZ+FXCpkO1ii759NbCBb1uPgquC0y+QER0v/e//y/gHHeHVH101Pt8AAAAASUVORK5CYII="/>
      </div>
        <span>
          <Link to="/profile"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAaZJREFUSEvFVoFNAzEMtDehk0A3oZMAk1AmoUxCNzFclbzyfju2KVUjVZXaJOc72xcz3WnxnXCpDCwiD0T0RET4PrfAz8x8qpBIATewZyJ6mVyOIAD+xsw9IHd7CCwirwGgvhygH8yMc3XgxvK9yVpRse9FAHuPvcm4gX7/BU2dccE94M8rmG6kZ+ad/nEDLCKQF4UULbDBBxUerSMzH8ZNK+CkxCdm3vdLChV/GFtOA0ds0a8b2ZKFuGKtgVFQMAZvIeqj9Wei7VZBL8AiglyhqGYL7WE6lIigLqBY6vwInDkIVzKN4dbAZo5BUUQyLbgEPjLOWiOkRq4vfpwsrC7/UiPVHI/5q/TxvwJHpmH9v+tK6XaS4LbLy9Oev3ErOuIxcjH+rcx+qGIgbispF/Mel6mBwDz0QbBc2d1MlVZsqHBtRIvMOJ95JFIP+8Da8oP5IxG0x6qNNOtJW60eFTPHKleWXH2WQhBfbT8k9QqrNggMzC3wbBvVRx/FPJourUBcT59K7eQvCqD3OArp+vHWCaKPO32ov81An01qZV840Fcuq+z9AW4t0h+ftlNiAAAAAElFTkSuQmCC"/></Link>
        </span>
          <span
            onClick={() => {
              dispatch(logout());
            }}
          >
            <Link to="/login"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAURJREFUSEvtl90VgjAMhXM30U10E51EnUSdRDbRTaKXU7AtLaTaIzzICw/EfM3NX4XM9GAmriwPrKqbGmoAaFJ+BhGr6k5EzjWgzsdDRK4Ajr7PFPguIquKYLp6AFhnwU7emzM4iUhSpoJDMYBOva0vexBxBA4MC2C96Zi/P5gt1OU4K7WqMne7uFLjdJRITYdtRef6j988h6cxuBlsLaDIIfuU6vAdPEVg48RiSg4eJQk3gyNDqwCd3WBC/QrMA+wBXLqTlID74poI159I7Uh00GDSmcFWbSOHDYBt6rdFYK+4ONgHlRq10wXAPndgM9g6q53dys/nVxFbwR+m5L+d3sJFUrNoksVllfp1kfAn3KjU7E9up9pXHy6dYPfnLnucw7XgVI1brJ9o7fbLtIF1gk2qbr7eTnqqZLC8fxKVAsu6eQK1IOAfoFvoiAAAAABJRU5ErkJggg=="/></Link>
          </span>
        </>
      ) : (
        <>
          <span>
            <Link to="/login"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAU9JREFUSEvllt1RwzAQhHc7IZVAOiGVAJUQKkmoJKGSI8vIjGPrZ8UokwduxuMHa+67W520Ju4UvBMXfwJHxAOA58tz1kPy2NtAFzgB3wE8LUAqYEtSbytscEQIdqhkFXTndt8DFnTZ6bIOyb5xWrbAEaH9lMROSPLmnrvgVwAvDhXAG0mtr8YtwHuSu1Hg1mDNORqw/Siwzu2plSx93zjHypJaCc0BswZL+WxwgteGzBqqSbUucIJLdu35Y0ryBUADZd9a3R2be2wt6+7YymosssDJHCSvZJ4kXl2XF6P4dN2qCq64UasnnWMNW3Hfi2DDjVpwQT9K12cWPAA6FVW0yhLYscBWx7/wnFWuwBHR40QufHV/58DyXfnvyDiS3M4T5sAyAx2bkbH6M8mBYyRxluvKQK7AA6c5V3sVLIlHy/xTxPI/zLoybyH9/wN/A6l7ex9R2t5sAAAAAElFTkSuQmCC"/></Link>
          </span>
          <span>
            <Link to="/register"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAUVJREFUSEvtlt2RwjAMhFeVcFQCVHJQCUclQCVwlRxUstzOOBkTLCex+XtAbzC2Pmktr2N4UdiLuPiAn6b8+0pNcglgBuAM4AjgZGanWmncjkl+Adj+w+YdiOCrWngOfEhAmxqOZrao6ToJDt3+9SSe1nTtgXWukjkXknuXWkCyUctVxgPrXLU5Fwsz03nfRDFYmUhKag1YKjTZU6+qWvAPgG8HftVtmIm4SB2TfkuRTVRgexWzBkJSkq9DEiXSme67EpNUkVrXFxsz09r7PBJ3BQfHUpeTjty/kjDuOiG1updacrjVIKkzjtWV0XWw0cM10DjiAtSRBu3Ku0vAQ4ckhrcD0/w5ClzQbQwfbZ/tdQpXp8+tvOviupi3IQaXyNzkdX17CFgPg5yqJGQqyQejF1xCq9nzvt9cNV3l9n46fpSyN3kvQOWSH6vfpJcAAAAASUVORK5CYII="/></Link>
          </span>
        </>
      )}
    </div>
  );
};

export default NavBar;