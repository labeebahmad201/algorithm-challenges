class MyCircularQueue {
    private int buffer[];
    private int size;
    private int front;
    private int rear;

    public MyCircularQueue(int k) {
        this.buffer = new int[k];
        this.front = -1;
        this.rear = -1;
        this.size = 0; // not absolutely necessary as ints are implicitly initialized to 0. 
    }
    
    public boolean enQueue(int value) {
        if(this.isFull()) {
            return false;
        }

        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.rear = (this.rear + 1) % this.buffer.length;
        }
        this.buffer[this.rear] = value;
        this.size++;
        return true;
    }
    
    public boolean deQueue() {
        if(this.isEmpty()){
            return false;
        }
        
        if (this.front == this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.buffer.length;
        }
        this.size--;
        return true;
    }
    
    public int Front() {
        if(this.isEmpty()) {
            return -1;
        }
        return this.buffer[this.front];
    }
    
    public int Rear() {
        if(this.isEmpty()) {
            return -1;
        }

        return this.buffer[this.rear];
    }
    
    public boolean isEmpty() {
        return this.size == 0;
    }
    
    public boolean isFull() {
        return (this.front == 0 && this.rear == this.buffer.length - 1) || (this.rear + 1 == this.front);
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */