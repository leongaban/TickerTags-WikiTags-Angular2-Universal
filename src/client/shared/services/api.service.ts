import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FeaturedCategory } from '../models/home/featuredcategory';
import { EntityPage } from '../models/entity/entity-page';
import EntityCard from '../models/entity/entity-card';
import EntityMeta from '../models/entity/entity-meta';
import EntityRank from '../models/entity/entity-rank';
import EntityRelatedTag from '../models/entity/entity-related-tag';
import EntityTag from '../models/entity/entity-tag';
import NewsSnippet from '../models/news/news-snippet';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { CacheService  } from './cache.service';


@Injectable()
export class ApiService {
    private apiUrl: string = '/api';

    constructor(public http: Http) {}

    /**
     * Get featured categories data for homepage
     * /api
     */
    getFeatured(): Observable<[FeaturedCategory]> {
        return this.http.get(`${this.apiUrl}/home`)
        // .do(res => console.log('getFeatured res', res.json()))
        .map(res => res.json()).catch(this.handleError);
    }

    /**
     * Get category view data
     * /api/category/123
     */
    getCategory(id: number): Observable<[EntityCard]> {
        return this.http.get(`${this.apiUrl}/category/${id}`)
            .map(res => res.json()).catch(this.handleError);
    }

    /**
     * Get entity page
     */
    // getEntityPage(id: number): Observable<EntityPage> {
    //     return this.http.get(`${this.apiUrl}/entity/${id}/page`)
    //         .map(res => res.json().data)
    //         .catch(this.handleError);
    // }

    /**
     * Get entity page descritption
     */
    getEntityMeta(id: number): Observable<EntityMeta> {
        return this.http.get(`${this.apiUrl}/entity/${id}/meta`)
            .map(res => res.json()).catch(this.handleError);
    }

    /**
     * Get social mentions for entity
     */
    // getSocialMentions(id: number): Observable<{}> {
    //     return this.http.get(`${this.apiUrl}/entity/${id}/mentions`)
    //         .map(res => res.json().data)
    //         .catch(this.handleError);
    // }

    /**
     * Get entity category rankings
     */
    getEntityRankings(id: number): Observable<[EntityRank]> {
        return this.http.get(`${this.apiUrl}/entity/${id}/rankings`)
            .map(res => res.json()).catch(this.handleError);
    }

    /**
     * Get entity related entity tags
     */
    getEntityRelatedTags(id: number): Observable<[EntityRelatedTag]> {
        return this.http.get(`${this.apiUrl}/entity/${id}/tags`)
            .map(res => res.json()).catch(this.handleError);
    }

    /**
     * Get tag cloud
     */
    getTagCloud(id: number): Observable<[EntityTag]> {
        return this.http.get(`${this.apiUrl}/entity/${id}/cloud`)
            .map(res => res.json()).catch(this.handleError);
    }

    /**
     * Get entity news
     */
    getEntityNews(id: number): Observable<[NewsSnippet]> {
        return this.http.get(`${this.apiUrl}/entity/${id}/news`)
            .map(res => res.json()).catch(this.handleError);
    }

    // get(url: string, options?: any) {
    // return this.http.get(url, options)
    //     .map(res => res.json())
    //     .catch(err => {
    //         console.log('Error: ', err);
    //         return Observable.throw(err);
    //     });
    // }

    /**
     * Handle any errors from API
     */
    private handleError(err) {
        let errMessage: string;

        if (err instanceof Response) {
            let body  = err.json() || '';
            let error = body.error || JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }

        return Observable.throw(errMessage);
    }
}