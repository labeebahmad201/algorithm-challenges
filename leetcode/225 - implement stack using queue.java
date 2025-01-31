import java.util.LinkedList;
import java.util.Queue;

class MyStack {
    private Queue<Integer> queue;
    public MyStack() {
        this.queue = new LinkedList<>();
    }
    
    public void push(int x) {
        this.queue.add(x);
    }
    
    public int pop() {
        int size = this.queue.size();
        for(int i = size - 1; i >= 1; i--) {
            this.queue.add(this.queue.remove());
        }

        return this.queue.remove();
    }
    
    public int top() {
        int size = this.queue.size();
        for(int i = size - 1; i >=1 ; i--) {
            this.queue.add(this.queue.remove());
        }

        int value = this.queue.remove();
        this.queue.add(value);
        return value;
    }
    
    public boolean empty() {
        return this.queue.size() == 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */