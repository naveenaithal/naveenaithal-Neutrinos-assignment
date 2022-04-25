/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-list',
  templateUrl: './list.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class listComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_6TvzKhnM1e7qdtGl(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_6TvzKhnM1e7qdtGl(bh) {
    try {
      bh = this.sd_cLtuKJiGMC3gijZC(bh);
      //appendnew_next_sd_6TvzKhnM1e7qdtGl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6TvzKhnM1e7qdtGl');
    }
  }

  navigator(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.storage(bh);
      //appendnew_next_navigator
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0xVY81mAVn3IuL19');
    }
  }

  //appendnew_flow_listComponent_start

  sd_cLtuKJiGMC3gijZC(bh) {
    try {
      this.page.blogs = undefined;
      bh = this.sd_QerN9TjR3Ro7fmLo(bh);
      //appendnew_next_sd_cLtuKJiGMC3gijZC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cLtuKJiGMC3gijZC');
    }
  }

  sd_QerN9TjR3Ro7fmLo(bh) {
    try {
      const page = this.page;
      page.blogs = [
        {
          id: 1,
          title: 'the blog post 1',
          description: 'description of first blog',
          image:
            'https://media.istockphoto.com/photos/abstract-icon-representing-the-ecological-call-to-recycle-and-reuse-picture-id1340716614?s=612x612',
        },
        {
          id: 2,
          title: 'the blog post 2',
          description: 'description of second blog',
          image:
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        },
        {
          id: 3,
          title: 'the blog post 3',
          description: 'description of third blog',
          image:
            'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
        },
        {
          id: 4,
          title: 'the blog post 4',
          description: 'description of fourth blog',
          image:
            'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg',
        },
        {
          id: 5,
          title: 'the blog post 5',
          description: 'description of fifth blog',
          image:
            'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=',
        },
        {
          id: 6,
          title: 'the blog post ',
          description: 'description of sixth blog',
          image:
            'https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528__340.jpg',
        },
      ];
      this.logs(bh);
      //appendnew_next_sd_QerN9TjR3Ro7fmLo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QerN9TjR3Ro7fmLo');
    }
  }

  logs(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.blogs);
      //appendnew_next_logs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ra5cqIgxxGLYKq5S');
    }
  }

  storage(bh) {
    try {
      sessionStorage.setItem('data', JSON.stringify(bh.input.event));
      bh = this.sd_MKRqmKVcOMsI184H(bh);
      //appendnew_next_storage
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rAO8sbyIiUbI9XhD');
    }
  }

  async sd_MKRqmKVcOMsI184H(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/detail/:id');
      await this.__page_injector__
        .get(Router)
        .navigate([
          this.sdService.formatPathWithParams(path, { id: bh.input.event.id }),
        ]);
      //appendnew_next_sd_MKRqmKVcOMsI184H
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MKRqmKVcOMsI184H');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_listComponent_Catch
}
