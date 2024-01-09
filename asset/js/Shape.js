const Shape = function(_element, _width, _height) {
    this.w = _width;
    this.h = _height;
    this.color = '#000';
    this.baseW = 50;
    this.draw = SVG().addTo(_element).size(this.w, this.h);
    this.styleLine = {
        width: 1,
        color: '#4F4F4F'
    };
    this.font = {
        size: 13,
        family: 'segoe UI',
        weight: 'bold',
        fill: '#fff'
    };
    this.wPoint = 38;
    this.hPoint = 38;
};

Shape.prototype.CreatePoint = function(num, x, y, color = '#8E97FB') {
    const w = this.wPoint, h = this.hPoint;
    const draw = this.draw;
    const groupPoint = draw.group();

    const circle = draw.circle(w, h).fill(color).stroke({width: 1, color: 'transparent'}).move(x, y);
    const txt = draw.text(`${num}`).font(this.font);
    const wTxt = txt.node.getBBox().width;
    const hTxt = txt.node.getBBox().height;
    txt.move(x + w/2 - wTxt/2, y + h/2 - hTxt/2);
    groupPoint.add(circle).add(txt);
    return groupPoint;
}

Shape.prototype.CreateLine = function(xa, ya, xb, yb) {
    return this.draw.line(xa, ya, xb, yb).stroke(this.styleLine).attr('stroke-dasharray', '8 4');
}

Shape.prototype.drawShape = function(data){
    const {p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11} = data;
    const padding = 2;
    const draw = this.draw;
    const wBox = this.w,
        hBox = this.h,
        wPoint = this.wPoint,
        hPoint = this.hPoint;

    // draw dash line
    const line12 = this.CreateLine(padding + wPoint/2, hBox/2, wBox/2 , padding)
    const line23 = this.CreateLine(wBox/2 , padding, wBox - padding - wPoint/2, hBox/2)
    const line34 = this.CreateLine(wBox - padding - wPoint/2, hBox/2, wBox/2, hBox - hPoint/2)
    const line45 = this.CreateLine(wBox/2, hBox - hPoint/2, padding + wPoint/2, hBox/2)
    const line18 = this.CreateLine(padding + wPoint/2, hBox/2, wBox/4 + wPoint/2, 2*hBox/6 + hPoint/2)
    const line86 = this.CreateLine(wBox/4 + wPoint/2, 2*hBox/6 + hPoint/2, wBox/2, hBox/6 + hPoint/2)
    const line69 = this.CreateLine( wBox/2, hBox/6 + hPoint/2, 3*wBox/4 - wPoint/2, 2*hBox/6 + hPoint/2)
    const line93 = this.CreateLine( 3*wBox/4 - wPoint/2, 2*hBox/6 + hPoint/2, wBox - wPoint/2, hBox/2)
    const line311 = this.CreateLine( wBox - wPoint/2, hBox/2, 3*wBox/4 - wPoint/2, 4*hBox/6 - hPoint/2)
    const line117 = this.CreateLine( 3*wBox/4 - wPoint/2, 4*hBox/6 - hPoint/2, wBox/2, 5*hBox/6 - hPoint/2)
    const line710 = this.CreateLine( wBox/2, 5*hBox/6 - hPoint/2, wBox/4 + wPoint/2, 4*hBox/6 - hPoint/2)
    const line101 = this.CreateLine( wBox/4 + wPoint/2, 4*hBox/6 - hPoint/2, padding + wPoint/2, hBox/2)
    const line85 = this.CreateLine( wBox/4 + wPoint/2, 2*hBox/6 + hPoint/2, wBox/2, hBox/2)
    const line511 = this.CreateLine( wBox/2, hBox/2, 3*wBox/4 - wPoint/2, 4*hBox/6 - hPoint/2)
    const line95 = this.CreateLine( 3*wBox/4 - wPoint/2, 2*hBox/6 + hPoint/2, wBox/2, hBox/2)
    const line510 = this.CreateLine( wBox/2, hBox/2, wBox/4 + wPoint/2, 4*hBox/6 - hPoint/2)

    // draw point
    const point1 = this.CreatePoint(p1.text, padding, hBox/2 - hPoint/2, p1.color)
    const point2 = this.CreatePoint(p2.text, wBox/2 - wPoint/2, padding, p2.color)
    const point3 = this.CreatePoint(p3.text, wBox - wPoint - padding, hBox/2 - hPoint/2, p3.color)
    const point4 = this.CreatePoint(p4.text, wBox/2 - wPoint/2, hBox - hPoint , p4.color)
    const point5 = this.CreatePoint(p5.text, wBox/2 - wPoint/2, hBox/2 - hPoint/2, p5.color)
    const point6 = this.CreatePoint(p6.text, wBox/2 - wPoint/2, hBox/6, p6.color)
    const point7 = this.CreatePoint(p7.text, wBox/2 - wPoint/2, 5*hBox/6 - hPoint, p7.color)
    const point8 = this.CreatePoint(p8.text, wBox/4, 2*hBox/6, p8.color)
    const point9 = this.CreatePoint(p9.text, 3*wBox/4 - wPoint, 2*hBox/6, p9.color)
    const point10 = this.CreatePoint(p10.text, wBox/4, 4*hBox/6 - hPoint, p10.color)
    const point11 = this.CreatePoint(p11.text, 3*wBox/4 - wPoint, 4*hBox/6 - hPoint, p11.color)

};