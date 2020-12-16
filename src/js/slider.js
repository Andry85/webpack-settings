function Slider({name: id, w: width, h: height, border: {width: wi, style, color}} = options) {
    this.id = id;
    this.width = width;
    this.height = height;
    this.borderWidth = wi;
    this.borderStyle = style;
    this.borderColor = color;
    this.id.style.width = this.width + "px";
    this.id.style.height = this.height + "px";
    this.id.style.borderWidth = this.borderWidth + "px";
    this.id.style.borderStyle = this.borderStyle;
    this.id.style.borderColor = this.borderColor;
    this.id.style.overflow = 'hidden';

    const children = [];
    let wrapperWidth = 0;

    const wrapper = document.createElement("div");
    wrapper.classList.add(`${this.id.getAttribute("id")}__wrapper`);
    this.id.appendChild(wrapper); 
    wrapper.style.overflow = 'hidden';


    for(let i = 0; i < this.id.children.length; i++) {
        if (this.id.children[i] !== wrapper) {
            children.push(this.id.children[i]); 
            this.id.children[i].style.width = this.width + "px";
        }
    }


    for(let i = 0; i < children.length; i++) {
        children[i].style.height = "100%"; 
        children[i].style.float = 'left'; 
        wrapper.appendChild(children[i]); 
        wrapperWidth = wrapperWidth +  parseInt(children[i].style.width);
    }

    wrapper.style.width = wrapperWidth + 'px';
    wrapper.style.position = 'relative';

    let positionEl = 0;

    this.run = function() {

        if (-parseInt(wrapper.style.left) === (parseInt(wrapper.style.width) - this.width)) {
            wrapper.style.left = 0 + 'px';
            positionEl = 0;
        } else {
            wrapper.style.left = positionEl - this.width + 'px';
            positionEl = parseInt(wrapper.style.left);
        }
        
    }

}




let carusel = document.getElementById("carusel");
const options = {
    name: carusel,
    w: 600,
    h: 600,
    border: {
        width: 10,
        style: 'solid',
        color: '#ddd'
    }
}
let smallSlider = new Slider(options);

carusel.addEventListener('click', function() {
    smallSlider.run();
});
