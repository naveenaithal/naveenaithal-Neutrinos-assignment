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
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
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
      this.sd_6K80qnSEJUVVbWYp(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_6K80qnSEJUVVbWYp(bh) {
    try {
      bh = this.sd_1qxVg6hbqTdDNt8k(bh);
      //appendnew_next_sd_6K80qnSEJUVVbWYp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6K80qnSEJUVVbWYp');
    }
  }

  openAlert(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.alertBoxText(bh);
      //appendnew_next_openAlert
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qnupOWhs7xXUESrY');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_1qxVg6hbqTdDNt8k(bh) {
    try {
      //appendnew_next_sd_1qxVg6hbqTdDNt8k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1qxVg6hbqTdDNt8k');
    }
  }

  alertBoxText(bh) {
    try {
      const page = this.page;
      alert('hello hahahah');
      //appendnew_next_alertBoxText
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cJcF6MKrTYOgxLeI');
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
  //appendnew_flow_homeComponent_Catch
}
