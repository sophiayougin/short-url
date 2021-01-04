import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
class CopyButton extends React.Component{
    render(){
        return(
                <Popup trigger={<div className='copy-button'><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAADBwcFzc3PX19fS0tKlpaXy8vLj4+P6+vofHx8zMzNqamqFhYU7OzswMDDIyMjf39+fn58SEhLLy8uVlZWrq6uMjIxMTExYWFi0tLQVFRXq6ur09PRycnIqKipERERhYWE5OTlCQkJniDWoAAAEYUlEQVR4nO3de1+iQBTGcdK8YGIqKtJiXnr/73H1U+1OnkPO7cww+vz+rsXvUsDAxGQZQgghhNAjtHterfvh2gwWQXn5oP/xFLiyrppgwM0hNO+r9zA7sreP5Lt0lN+Po/eIvktLYeBz8N8/0nQkCVxNYvvOzQSJi9i4z065FHAcm/bdVoiYb2PL/tWXEVaxXUpvEsBBbJXaZCcg7M7P6KXKP7AX23SV/4NNt3bh09PaN7CJLbruxfdOHMYWkZ49C4/sVk6zEL2w2/Z8rMmZTczednmYdktm81O/whGzBbGrQ6YxHXSf/F6Az8kG9iGB52Eb/S8ee90APdBsvP77t6Mjb7+3NKjQ96HsVpvQwonfn5Hb0WsqCM2CUD4IXYNQPghdg1A+CF2DUD46fhMePRkIF/OqPry6Rp967dmvO9RVz2bvWgtHw7okn026sl4a3wCwFOZVeN5XhaHRTkhHrSEzu2dsIxzHvk2+N5nWYCHswhPxuaSwG09y9InGwlUMD9NKStidx6m6521D4Y5/1BAj3TvXhsJ+DEtLmk9wzITMLfiI6d27NhPWMSCt1f6FdBgQN63jqZFwGoPxS0ffws5MDvuu1Ll6MxHGvd7m0plBZSJkjzP1NEzs1b7OscZAmM/oJt6DTULPG+5crPGNBsLFH7KBwiPhdswMQ43rGgMhveb+CPvIP6P3FTRO+gZCejaUnnx+HX0k37P4pnYhHRgOfH58jegnkBaGntRAh24QZhD+CEL5IGSDUAlC+SBkg1AJQvkgZINQCUL5IGSDUAlC+SBkg1AJQvkgZINQCUL5IGSDUAlC+SBkg1AJQvkgZINQCUL5IGSDUAlC+SBkg1AJQvkgZINQCUL5IGSDUAlC+SBkg1AJQvkgZINQCUL5IGSDUAlC+SBke0Bh+8e+G2HrNyUqpB97q/+lSQiZVfOGLV+aqJBbZ6blpTP0zR9pCLl395RbbmFb+oqhJITZmhHqlobQ5VWPaQgz+m6kexM6vKMsEWFuv9BxIsLs7e6F9m+0TEbY2L59PBmh9eud0xFm3CJ99yW0vLJJSWh3QE1KmDUWL8tPS3ge7hu/Lz81YdYUhteoyQkvC48YnRoTFJ5rNlU903SmKbyU5ztaTg+36Qr5Er0TZRCE8kHoGoTyQegahPJB6BqE8kHoGoTyQegahPJB6BqE8kHoGoTyQejaIwqTWLPLIDr7sm0mqlRW664ZRNfO2wZeO48+wvX7e8Ksf2i2Ur1rdusfGsStYXlceN3Eby24lWw9b+PIbKKsizDV3FNbvTWP9bOcVyTYxrOwc+sB+z8hH2OLrmr90xDrurYu99y7MDvENv1I4nTcrZ0osAu79ZvYlwBmI/tp776bCF0y0ovTWIkNbOxn9vtNZ+H4pImiA7cuHFBFDqP/W1hMJ/bah/iIJl86/DmYc2UVYuDdFNGA01BD0mb4GoE3Wbe+LkAGWRxfgnWqi2VQ3mf5KFi7wLe9EEIIIYSQYH8BvR1/ztFfoXIAAAAASUVORK5CYII="
                    onClick={this.props.onClick}
                    alt='Click to copy'
                /></div>}>
                <div>Copied !!</div>
                </Popup>
        );
    }
}
export default CopyButton;



