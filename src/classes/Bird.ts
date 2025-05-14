class Bird {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  wingPosition: number;
  wingDirection: number;
  color: string;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = 5 + Math.random() * 10;
    this.speed = 1 + Math.random() * 2;
    this.angle = Math.random() * Math.PI * 2;
    this.wingPosition = 0;
    this.wingDirection = Math.random() > 0.5 ? 0.1 : -0.1;

    const colors = ["#222", "#333", "#444", "#555"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update(cursorX: number, cursorY: number, width: number, height: number) {
    this.x = this.x + Math.cos(this.angle) * this.speed;
    this.y = this.y + Math.sin(this.angle) * this.speed;

    // Changing the wing direction of flapping
    this.wingPosition = this.wingPosition + this.wingDirection;
    if (Math.abs(this.wingPosition) > 0.5) {
      this.wingDirection = -this.wingDirection;
    }

    // When cursor is closer, run away
    const distance = Math.sqrt(
      Math.pow(cursorX - this.x, 2) + Math.pow(cursorY - this.y, 2)
    );

    if (distance < 200) {
      const avoidAngle = Math.atan2(this.y - cursorY, this.x - cursorX);
      const randomChange = (Math.random() - 0.5) * 0.5;
      this.angle = avoidAngle + randomChange;
      this.speed = 2 + Math.random() * 2;
    } else {
      this.speed = 1 + Math.random() * 2;
    }

    if (this.x < 0) {
      this.x = width;
    }
    if (this.x > width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
    if (this.y > height) {
      this.y = 0;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.ellipse(
      this.x,
      this.y,
      this.size,
      this.size / 2,
      this.angle,
      0,
      Math.PI * 2
    );
    ctx.fill();

    ctx.beginPath();
    const wingSize = this.size * 1.2;
    const wingX = this.x + (Math.cos(this.angle + Math.PI / 2) * this.size) / 3;
    const wingY = this.y + (Math.sin(this.angle + Math.PI / 2) * this.size) / 3;
    const wingAngle = this.angle + Math.PI / 2 + this.wingPosition;
    ctx.ellipse(
      wingX,
      wingY,
      wingSize,
      wingSize / 3,
      wingAngle,
      0,
      Math.PI * 2
    );
    ctx.fill();

    ctx.beginPath();
    const wing2X =
      this.x + (Math.cos(this.angle - Math.PI / 2) * this.size) / 3;
    const wing2Y =
      this.y + (Math.sin(this.angle - Math.PI / 2) * this.size) / 3;
    const wing2Angle = this.angle - Math.PI / 2 - this.wingPosition;
    ctx.ellipse(
      wing2X,
      wing2Y,
      wingSize,
      wingSize / 3,
      wing2Angle,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}

export default Bird;
