// "static void main" must be defined in a public class.
public class MyStack {
    // is buffer the right name?t
    private int[] buffer;
    private int top;
    private int size;
   
    public static void main(String[] args) {
        System.out.println("Hello World!");
        MyStack stack = new MyStack(8);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        stack.push(6);
        stack.push(7);
        System.out.println("isFull : " + stack.isFull());
        stack.push(8);        
        System.out.println("isFull : " + stack.isFull());        
        
        stack.print();
        System.out.println("Popped :" + stack.pop());
        System.out.println("Popped :" + stack.pop());
        System.out.println("Popped :" + stack.pop());
        System.out.println("Popped :" + stack.pop());
        System.out.println("Popped :" + stack.pop());
        System.out.println("Popped :" + stack.pop());
        stack.print();        
    }
    
    MyStack(int size) {
        this.buffer = new int[size];
        this.top = -1;
        this.size = size;
    }
    
    boolean push(int value){
        if(this.isFull()) {
            return false;
        }            
        this.buffer[++this.top] = value;
        return true;
    }
    
    int pop(){
        if(this.isEmpty()){
            return -1;
        }
        
        int value = this.buffer[this.top];
        this.top--;
        return value;
    }
    
    int getTop(){
        if(this.isEmpty()) {
            return -1;
        }            
        
        return this.buffer[this.top];
    }
    
    boolean isFull() {
        return this.top + 1 == this.buffer.length;
    }
    
    boolean isEmpty() {
        return this.top == -1;
    }
    
    void print(){
        System.out.println("printed stack:");
        for(int i = this.top; i >= 0; i--){
            System.out.println(this.buffer[i]);
        }
    }
}