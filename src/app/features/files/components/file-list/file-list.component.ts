import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../../services/file.service';
import { OpenFileModalComponent } from '../open-file-modal/open-file-modal.component';

@Component({
    selector: 'app-file-list',
    templateUrl: './file-list.component.html',
    styleUrls: ['./file-list.component.scss'],
})
export class FileListComponent implements OnInit {
    @Input()crmBaseEntityId!:number;
    files: any[];
    @ViewChild('openFileModal', { read: ViewContainerRef })
    openFileComponent!: ViewContainerRef;
    // src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
    // src= './assets/files/photo.png';
    // src:string = './assets/files/talan.pdf';
    constructor(
        private FileService: FileService,
        private router: Router,
        private http: HttpClient
    ) {}

    ngOnInit(): void {
        this.FileService.getFileList(this.crmBaseEntityId).subscribe((res) => {
            this.files = res;
        });
    }

    onViewFile(fileName: string) {
        this.openFileComponent.clear();
        const openFileComponentRef = this.openFileComponent.createComponent(
            OpenFileModalComponent
        );
        this.openFile(fileName, openFileComponentRef);
        this.onOpenImage(openFileComponentRef);
        openFileComponentRef.instance.path = './assets/files/' + fileName;
    }

    openFile(fileName: string, openFileComponentRef: any) {
        if (this.isPdf(fileName)) {
            this.onOpenPdf(openFileComponentRef);
            openFileComponentRef.instance.isPdf = true;
        }
        else {
            this.onOpenImage(openFileComponentRef);
            openFileComponentRef.instance.isPdf = false;
        }
    }

    isPdf(file: string) {
        if (file.includes('pdf')) return true;
        return false;
    }

    onOpenPdf(openFileComponentRef: any) {
        openFileComponentRef.instance.pdf = true;
    }

    onOpenImage(openFileComponentRef: any) {
        openFileComponentRef.instance.pdf = false;
    }

    uploadFile(event:any) {
        console.log("here")
        const file = event.target.files[0];
        const url = `/api/file/upload/crm-base-entity/30`;
        const formData = new FormData();
        formData.append('file', file);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        this.http.post(url, formData, { headers }).subscribe(
          response => {
            console.log('File uploaded successfully');
          },
          error => {
            console.error('Error uploading file:', error);
          }
        );
      }
}
