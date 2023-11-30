interface IPhoneState {
  openMusicApp(): void;
  openSettings(): void;
  openPhone(): void;
}


class ShutdownedState implements IPhoneState {
  openMusicApp(): void {
    console.log('Cannot open music app, phone is shutdowned');
  }
  
  openSettings(): void {
    console.log('Cannot open settings, phone is shutdowned');
  }
  
  openPhone(): void {
    console.log('Cannot open phone, phone is shutdowned');
  }
}

class LockedState implements IPhoneState {
  openMusicApp(): void {
    console.log('Cannot open music app, phone is locked');
  }
  
  openSettings(): void {
    console.log('Cannot open settings, phone is locked');
  }
  
  openPhone(): void {
    console.log('Phone is unlocked');
  }
}

class HomeState implements IPhoneState {
  openMusicApp(): void {
    console.log('Open music app');
  }
  
  openSettings(): void {
    console.log('Open settings');
  }
  
  openPhone(): void {
    console.log('Open phone');
  }
}

class Phone {
  constructor(private state: IPhoneState) {}

  public setState(state: IPhoneState): void {
    this.state = state;
  }
  
  public openMusicApp(): void {
    this.state.openMusicApp();
  }

  public openSettings(): void {
    this.state.openSettings();
  }

  public openPhone(): void {
    this.state.openPhone();
  }
}

const myPhone = new Phone(new LockedState());

myPhone.openPhone();
myPhone.openMusicApp();
myPhone.openSettings();

myPhone.setState(new HomeState());

myPhone.openPhone();
myPhone.openMusicApp();
myPhone.openSettings();

myPhone.setState(new ShutdownedState());
myPhone.openPhone();
myPhone.openMusicApp();
myPhone.openSettings();