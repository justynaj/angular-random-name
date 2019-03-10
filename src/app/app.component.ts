import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public randomName: string;

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    this.setName();
  }

  private setName(): void {
    this.getNamesJSON().subscribe((data: string[]) => {
      if (data) {
        const idx = Math.floor(Math.random() * Math.floor(data.length));
        this.randomName = data[idx];
      }
    });
  }

  private getNamesJSON(): Observable<any> {
    return this.http.get("assets/names.json");
  }
}
