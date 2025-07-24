import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private activeDialogs: MatDialogRef<any>[] = [];
  private escListener: ((event: KeyboardEvent) => void) | null = null;

  constructor(private dialog: MatDialog) {
  }

  open<T, D>(component: ComponentType<T>,
             data: D | null = null,
             disableClickOutsideClose: boolean = true): MatDialogRef<T> {
    const config: MatDialogConfig = new MatDialogConfig<D>();
    config.data = data;
    config.disableClose = disableClickOutsideClose;
    config.backdropClass = 'dark-dialog-backdrop';

    const dialogRef: MatDialogRef<T> = this.dialog.open(component, config);

    dialogRef.afterClosed().subscribe((): void => {
      this.activeDialogs.pop();

      if (this.activeDialogs.length === 0)
        this.removeEscListener();
    });

    this.activeDialogs.push(dialogRef);

    if (this.activeDialogs.length === 1)
      this.addEscListener();

    return dialogRef;
  }

  private removeEscListener(): void {
    if (!this.escListener)
      return;
    document.removeEventListener('keyup', this.escListener);
    this.escListener = null;
  }

  private addEscListener(): void {
    if (this.escListener)
      return;
    this.escListener = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        this.closeTopDialog();
      }
    };
    document.addEventListener('keyup', this.escListener);
  }

  private closeTopDialog(): void {
    this.activeDialogs.at(-1)?.close();
  }
}
