import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChatComponent } from './chat.component';

describe('ChatComponent', () => {
  let fixture: ComponentFixture<ChatComponent>;
  let chatComponent: ChatComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ChatComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    chatComponent = fixture.componentInstance;
  });

  it('should create the chat component', () => {
    expect(chatComponent).toBeTruthy();
  });

  // Add more tests specific to your ChatComponent
});