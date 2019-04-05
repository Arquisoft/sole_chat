/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Renderer2, ElementRef, Input, EventEmitter, Output, ViewChild, NgZone, TemplateRef, ViewEncapsulation, ChangeDetectionStrategy, HostListener, Optional, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WindowService } from './window.service';
import { VirtualScrollService } from './virtual-scroll.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, fromEvent, merge } from 'rxjs';
/** @type {?} */
var TOP_CSS_CLASS = 'ng-select-top';
/** @type {?} */
var BOTTOM_CSS_CLASS = 'ng-select-bottom';
var NgDropdownPanelComponent = /** @class */ (function () {
    function NgDropdownPanelComponent(_renderer, _zone, _virtualScrollService, _window, _elementRef, _document) {
        this._renderer = _renderer;
        this._zone = _zone;
        this._virtualScrollService = _virtualScrollService;
        this._window = _window;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.bufferAmount = 4;
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new EventEmitter();
        this.scroll = new EventEmitter();
        this.scrollToEnd = new EventEmitter();
        this.outsideClick = new EventEmitter();
        this._destroy$ = new Subject();
        this._startupLoop = true;
        this._isScrolledToMarked = false;
        this._scrollToEndFired = false;
        this._disposeScrollListener = function () { };
        this._disposeDocumentResizeListener = function () { };
        this._dropdown = _elementRef.nativeElement;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.handleMousedown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = /** @type {?} */ ($event.target);
        if (target.tagName === 'INPUT') {
            return;
        }
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._select = this._dropdown.parentElement;
        this._handleScroll();
        if (this._document) {
            merge(fromEvent(this._document, 'touchstart', { capture: true }), fromEvent(this._document, 'mousedown', { capture: true }))
                .pipe(takeUntil(this._destroy$))
                .subscribe(function ($event) { return _this._handleOutsideClick($event); });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["items"]) {
            this._isScrolledToMarked = false;
            this._handleItemsChange(changes["items"]);
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._disposeDocumentResizeListener();
        this._disposeScrollListener();
        this._destroy$.next();
        this._destroy$.complete();
        this._destroy$.unsubscribe();
        if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._whenContentReady().then(function () {
            if (_this._destroy$.closed) {
                return;
            }
            if (_this.appendTo) {
                _this._appendDropdown();
                _this._handleDocumentResize();
            }
            _this.updateDropdownPosition();
        });
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._zone.runOutsideAngular(function () {
                _this._window.requestAnimationFrame(function () {
                    _this._updateItems().then(resolve);
                });
            });
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.scrollInto = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item) {
            return;
        }
        /** @type {?} */
        var index = this.items.indexOf(item);
        if (index < 0 || index >= this.items.length) {
            return;
        }
        /** @type {?} */
        var d = this._calculateDimensions(this.virtualScroll ? 0 : index);
        /** @type {?} */
        var scrollEl = this.scrollElementRef.nativeElement;
        /** @type {?} */
        var buffer = Math.floor(d.viewHeight / d.childHeight) - 1;
        if (this.virtualScroll) {
            scrollEl.scrollTop = (index * d.childHeight) - (d.childHeight * Math.min(index, buffer));
        }
        else {
            /** @type {?} */
            var contentEl = this.contentElementRef.nativeElement;
            /** @type {?} */
            var childrenHeight = Array.from(contentEl.children).slice(0, index).reduce(function (c, n) { return c + n.clientHeight; }, 0);
            scrollEl.scrollTop = childrenHeight - (d.childHeight * Math.min(index, buffer));
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.scrollIntoTag = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.scrollElementRef.nativeElement;
        /** @type {?} */
        var d = this._calculateDimensions();
        el.scrollTop = d.childHeight * (d.itemsLength + 1);
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.updateDropdownPosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._window.setTimeout(function () {
            _this._currentPosition = _this._calculateCurrentPosition(_this._dropdown);
            if (_this._currentPosition === 'top') {
                _this._renderer.addClass(_this._dropdown, TOP_CSS_CLASS);
                _this._renderer.removeClass(_this._dropdown, BOTTOM_CSS_CLASS);
                _this._renderer.addClass(_this._select, TOP_CSS_CLASS);
                _this._renderer.removeClass(_this._select, BOTTOM_CSS_CLASS);
            }
            else {
                _this._renderer.addClass(_this._dropdown, BOTTOM_CSS_CLASS);
                _this._renderer.removeClass(_this._dropdown, TOP_CSS_CLASS);
                _this._renderer.addClass(_this._select, BOTTOM_CSS_CLASS);
                _this._renderer.removeClass(_this._select, TOP_CSS_CLASS);
            }
            if (_this.appendTo) {
                _this._updateAppendedDropdownPosition();
            }
            _this._dropdown.style.opacity = '1';
        }, 0);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleOutsideClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this._select.contains($event.target)) {
            return;
        }
        if (this._dropdown.contains($event.target)) {
            return;
        }
        /** @type {?} */
        var path = $event.path || ($event.composedPath && $event.composedPath());
        if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
        }
        this.outsideClick.emit();
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._disposeScrollListener = this._renderer.listen(this.scrollElementRef.nativeElement, 'scroll', function () {
            _this.refresh();
            _this._fireScrollToEnd();
        });
    };
    /**
     * @param {?} items
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleItemsChange = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        this._scrollToEndFired = false;
        this._previousStart = undefined;
        this._previousEnd = undefined;
        if (items !== undefined && items.previousValue === undefined ||
            (items.previousValue !== undefined && items.previousValue.length === 0)) {
            this._startupLoop = true;
        }
        this.items = items.currentValue || [];
        this.refresh().then(function () {
            if (_this.appendTo && _this._currentPosition === 'top') {
                _this._updateAppendedDropdownPosition();
            }
        });
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        NgZone.assertNotInAngularZone();
        if (!this.virtualScroll) {
            this._zone.run(function () {
                _this.update.emit(_this.items.slice());
                _this._scrollToMarked();
            });
            return Promise.resolve();
        }
        /** @type {?} */
        var loop = function (resolve) {
            /** @type {?} */
            var d = _this._calculateDimensions();
            /** @type {?} */
            var res = _this._virtualScrollService.calculateItems(d, _this.scrollElementRef.nativeElement, _this.bufferAmount || 0);
            (/** @type {?} */ (_this.paddingElementRef.nativeElement)).style.height = res.scrollHeight + "px";
            (/** @type {?} */ (_this.contentElementRef.nativeElement)).style.transform = 'translateY(' + res.topPadding + 'px)';
            if (res.start !== _this._previousStart || res.end !== _this._previousEnd) {
                _this._zone.run(function () {
                    _this.update.emit(_this.items.slice(res.start, res.end));
                    _this.scroll.emit({ start: res.start, end: res.end });
                });
                _this._previousStart = res.start;
                _this._previousEnd = res.end;
                if (_this._startupLoop === true) {
                    loop(resolve);
                }
            }
            else if (_this._startupLoop === true) {
                _this._startupLoop = false;
                _this._scrollToMarked();
                resolve();
            }
        };
        return new Promise(function (resolve) { return loop(resolve); });
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._fireScrollToEnd = /**
     * @return {?}
     */
    function () {
        if (this._scrollToEndFired) {
            return;
        }
        /** @type {?} */
        var scroll = this.scrollElementRef.nativeElement;
        /** @type {?} */
        var padding = this.virtualScroll ?
            this.paddingElementRef.nativeElement :
            this.contentElementRef.nativeElement;
        if (scroll.scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this.scrollToEnd.emit();
            this._scrollToEndFired = true;
        }
    };
    /**
     * @param {?=} index
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._calculateDimensions = /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        if (index === void 0) { index = 0; }
        return this._virtualScrollService.calculateDimensions(this.items.length, index, this.scrollElementRef.nativeElement, this.contentElementRef.nativeElement);
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleDocumentResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.appendTo) {
            return;
        }
        this._disposeDocumentResizeListener = this._renderer.listen('window', 'resize', function () {
            _this._updateAppendedDropdownPosition();
        });
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._scrollToMarked = /**
     * @return {?}
     */
    function () {
        if (this._isScrolledToMarked || !this.markedItem) {
            return;
        }
        this._isScrolledToMarked = true;
        this.scrollInto(this.markedItem);
    };
    /**
     * @param {?} dropdownEl
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._calculateCurrentPosition = /**
     * @param {?} dropdownEl
     * @return {?}
     */
    function (dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        /** @type {?} */
        var selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        /** @type {?} */
        var offsetTop = selectRect.top + window.pageYOffset;
        /** @type {?} */
        var height = selectRect.height;
        /** @type {?} */
        var dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._appendDropdown = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = document.querySelector(this.appendTo);
        if (!parent) {
            throw new Error("appendTo selector " + this.appendTo + " did not found any parent element");
        }
        parent.appendChild(this._dropdown);
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateAppendedDropdownPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = document.querySelector(this.appendTo) || document.body;
        this._dropdown.style.display = 'none';
        /** @type {?} */
        var selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        var boundingRect = parent.getBoundingClientRect();
        this._dropdown.style.display = '';
        /** @type {?} */
        var offsetTop = selectRect.top - boundingRect.top;
        /** @type {?} */
        var offsetLeft = selectRect.left - boundingRect.left;
        /** @type {?} */
        var topDelta = this._currentPosition === 'bottom' ? selectRect.height : -this._dropdown.clientHeight;
        this._dropdown.style.top = offsetTop + topDelta + 'px';
        this._dropdown.style.bottom = 'auto';
        this._dropdown.style.left = offsetLeft + 'px';
        this._dropdown.style.width = selectRect.width + 'px';
        this._dropdown.style.minWidth = selectRect.width + 'px';
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._whenContentReady = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.items.length === 0) {
            return Promise.resolve();
        }
        /** @type {?} */
        var ready = function (resolve) {
            /** @type {?} */
            var ngOption = _this._dropdown.querySelector('.ng-option');
            if (ngOption) {
                resolve();
                return;
            }
            _this._zone.runOutsideAngular(function () {
                setTimeout(function () { return ready(resolve); }, 5);
            });
        };
        return new Promise(function (resolve) { return ready(resolve); });
    };
    NgDropdownPanelComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'ng-dropdown-panel',
                    template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length > 0\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    NgDropdownPanelComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NgZone },
        { type: VirtualScrollService },
        { type: WindowService },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    NgDropdownPanelComponent.propDecorators = {
        items: [{ type: Input }],
        markedItem: [{ type: Input }],
        position: [{ type: Input }],
        appendTo: [{ type: Input }],
        bufferAmount: [{ type: Input }],
        virtualScroll: [{ type: Input }],
        headerTemplate: [{ type: Input }],
        footerTemplate: [{ type: Input }],
        filterValue: [{ type: Input }],
        update: [{ type: Output }],
        scroll: [{ type: Output }],
        scrollToEnd: [{ type: Output }],
        outsideClick: [{ type: Output }],
        contentElementRef: [{ type: ViewChild, args: ['content', { read: ElementRef },] }],
        scrollElementRef: [{ type: ViewChild, args: ['scroll', { read: ElementRef },] }],
        paddingElementRef: [{ type: ViewChild, args: ['padding', { read: ElementRef },] }],
        handleMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }]
    };
    return NgDropdownPanelComponent;
}());
export { NgDropdownPanelComponent };
if (false) {
    /** @type {?} */
    NgDropdownPanelComponent.prototype.items;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.markedItem;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.position;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.appendTo;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.bufferAmount;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.virtualScroll;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.headerTemplate;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.footerTemplate;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.filterValue;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.update;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.scroll;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.scrollToEnd;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.outsideClick;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.contentElementRef;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.scrollElementRef;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.paddingElementRef;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._destroy$;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._dropdown;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._select;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._previousStart;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._previousEnd;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._startupLoop;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._isScrolledToMarked;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._scrollToEndFired;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._currentPosition;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._disposeScrollListener;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._disposeDocumentResizeListener;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._renderer;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._zone;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._virtualScrollService;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._window;
    /** @type {?} */
    NgDropdownPanelComponent.prototype._document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3QvIiwic291cmNlcyI6WyJuZy1zZWxlY3QvbmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUVULFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBQ04sU0FBUyxFQUVULE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUl2QixZQUFZLEVBQ1osUUFBUSxFQUNSLE1BQU0sRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRWpELElBQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQzs7QUFDdEMsSUFBTSxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQzs7SUFzRHhDLGtDQUNZLFdBQ0EsT0FDQSx1QkFDQSxTQUNSLFdBQXVCLEVBQ2UsU0FBYztRQUw1QyxjQUFTLEdBQVQsU0FBUztRQUNULFVBQUssR0FBTCxLQUFLO1FBQ0wsMEJBQXFCLEdBQXJCLHFCQUFxQjtRQUNyQixZQUFPLEdBQVAsT0FBTztRQUV1QixjQUFTLEdBQVQsU0FBUyxDQUFLO3FCQXJDM0IsRUFBRTt3QkFFTyxNQUFNOzRCQUVwQixDQUFDOzZCQUNBLEtBQUs7MkJBR0MsSUFBSTtzQkFFaEIsSUFBSSxZQUFZLEVBQVM7c0JBQ3pCLElBQUksWUFBWSxFQUFrQzsyQkFDN0MsSUFBSSxZQUFZLEVBQVE7NEJBQ3ZCLElBQUksWUFBWSxFQUFRO3lCQU1wQixJQUFJLE9BQU8sRUFBUTs0QkFLekIsSUFBSTttQ0FDRyxLQUFLO2lDQUNQLEtBQUs7c0NBRUEsZUFBUzs4Q0FDRCxlQUFTO1FBVTlDLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztLQUM5Qzs7Ozs7SUFHRCxrREFBZTs7OztJQURmLFVBQ2dCLE1BQWtCOztRQUM5QixJQUFNLE1BQU0scUJBQUcsTUFBTSxDQUFDLE1BQXFCLEVBQUM7UUFDNUMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUM1QixPQUFPO1NBQ1Y7UUFDRCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQzVCOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsS0FBSyxDQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUMxRCxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDNUQ7aUJBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQy9CLFNBQVMsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1NBQ2hFO0tBQ0o7Ozs7O0lBRUQsOENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQzlCLElBQUksT0FBTyxXQUFRO1lBQ2YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxVQUFPLENBQUM7U0FDMUM7S0FDSjs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RTtLQUNKOzs7O0lBRUQscURBQWtCOzs7SUFBbEI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQztZQUMxQixJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUN2QixPQUFPO2FBQ1Y7WUFDRCxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN2QixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzthQUNoQztZQUNELEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ2pDLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsMENBQU87OztJQUFQO1FBQUEsaUJBUUM7UUFQRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN0QixLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO2dCQUN6QixLQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDO29CQUMvQixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNyQyxDQUFDLENBQUM7YUFDTixDQUFDLENBQUM7U0FDTixDQUFDLENBQUE7S0FDTDs7Ozs7SUFFRCw2Q0FBVTs7OztJQUFWLFVBQVcsSUFBYztRQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTztTQUNWOztRQUNELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDekMsT0FBTztTQUNWOztRQUVELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUNwRSxJQUFNLFFBQVEsR0FBWSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDOztRQUM5RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDNUY7YUFBTTs7WUFDSCxJQUFNLFNBQVMsR0FBZ0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQzs7WUFDcEUsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQWxCLENBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUcsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDbkY7S0FDSjs7OztJQUVELGdEQUFhOzs7SUFBYjs7UUFDSSxJQUFNLEVBQUUsR0FBWSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDOztRQUN4RCxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN0QyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3REOzs7O0lBRUQseURBQXNCOzs7SUFBdEI7UUFBQSxpQkFxQkM7UUFwQkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDcEIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkUsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxFQUFFO2dCQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUN2RCxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQzdELEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQ3JELEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTthQUM3RDtpQkFBTTtnQkFDSCxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQzFELEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQzFELEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDeEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQzthQUMzRDtZQUVELElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixLQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQzthQUMxQztZQUVELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNUOzs7OztJQUVPLHNEQUFtQjs7OztjQUFDLE1BQVc7UUFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEMsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNWOztRQUVELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hHLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0lBR3JCLGdEQUFhOzs7OztRQUNqQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUU7WUFDL0YsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0IsQ0FBQyxDQUFDOzs7Ozs7SUFHQyxxREFBa0I7Ozs7Y0FBQyxLQUE4RDs7UUFDckYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUM5QixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGFBQWEsS0FBSyxTQUFTO1lBQ3hELENBQUMsS0FBSyxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxLQUFJLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLEVBQUU7Z0JBQ2xELEtBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDO2FBQzFDO1NBQ0osQ0FBQyxDQUFDOzs7OztJQUdDLCtDQUFZOzs7OztRQUNoQixNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUVoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDWCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUMxQixDQUFDLENBQUM7WUFDSCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM1Qjs7UUFFRCxJQUFNLElBQUksR0FBRyxVQUFDLE9BQU87O1lBQ2pCLElBQU0sQ0FBQyxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDOztZQUN0QyxJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFdEgsbUJBQWMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sR0FBRyxDQUFDLFlBQVksT0FBSSxDQUFDO1lBQzNGLG1CQUFjLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGFBQWEsR0FBRyxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUU3RyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssS0FBSSxDQUFDLGNBQWMsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BFLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUNYLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2lCQUN4RCxDQUFDLENBQUM7Z0JBQ0gsS0FBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBRTVCLElBQUksS0FBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtpQkFDaEI7YUFFSjtpQkFBTSxJQUFJLEtBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUNuQyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN2QixPQUFPLEVBQUUsQ0FBQzthQUNiO1NBQ0osQ0FBQztRQUNGLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUE7Ozs7O0lBRzFDLG1EQUFnQjs7OztRQUNwQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixPQUFPO1NBQ1Y7O1FBQ0QsSUFBTSxNQUFNLEdBQWdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7O1FBQ2hFLElBQU0sT0FBTyxHQUFnQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7UUFFekMsSUFBSSxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1NBQ2pDOzs7Ozs7SUFHRyx1REFBb0I7Ozs7Y0FBQyxLQUFTO1FBQVQsc0JBQUEsRUFBQSxTQUFTO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDakIsS0FBSyxFQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQ3ZDLENBQUE7Ozs7O0lBR0csd0RBQXFCOzs7OztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsOEJBQThCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtZQUM1RSxLQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQztTQUMxQyxDQUFDLENBQUM7Ozs7O0lBR0Msa0RBQWU7Ozs7UUFDbkIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzlDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7OztJQUc3Qiw0REFBeUI7Ozs7Y0FBQyxVQUF1QjtRQUNyRCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN4Qjs7UUFDRCxJQUFNLFVBQVUsR0FBZSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7O1FBQ3BFLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOztRQUNoRixJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7O1FBQ3RELElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7O1FBQ2pDLElBQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNqRSxJQUFJLFNBQVMsR0FBRyxNQUFNLEdBQUcsY0FBYyxHQUFHLFNBQVMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRTtZQUN6RixPQUFPLEtBQUssQ0FBQztTQUNoQjthQUFNO1lBQ0gsT0FBTyxRQUFRLENBQUM7U0FDbkI7Ozs7O0lBR0csa0RBQWU7Ozs7O1FBQ25CLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUFxQixJQUFJLENBQUMsUUFBUSxzQ0FBbUMsQ0FBQyxDQUFBO1NBQ3pGO1FBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7O0lBRy9CLGtFQUErQjs7Ozs7UUFDbkMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQztRQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOztRQUN0QyxJQUFNLFVBQVUsR0FBZSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7O1FBQ3BFLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7O1FBQ2xDLElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQzs7UUFDcEQsSUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDOztRQUN2RCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Ozs7O0lBR3BELG9EQUFpQjs7Ozs7UUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDNUI7O1FBQ0QsSUFBTSxLQUFLLEdBQUcsVUFBQyxPQUFPOztZQUNsQixJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM1RCxJQUFJLFFBQVEsRUFBRTtnQkFDVixPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPO2FBQ1Y7WUFDRCxLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO2dCQUN6QixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBZCxDQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdkMsQ0FBQyxDQUFDO1NBQ04sQ0FBQztRQUNGLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUE7OztnQkEvVnRELFNBQVMsU0FBQztvQkFDUCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxtd0JBYVQ7aUJBQ0o7Ozs7Z0JBaERHLFNBQVM7Z0JBT1QsTUFBTTtnQkFnQkQsb0JBQW9CO2dCQURwQixhQUFhO2dCQXJCbEIsVUFBVTtnREF1RkwsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7d0JBckMvQixLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFFTCxNQUFNO3lCQUNOLE1BQU07OEJBQ04sTUFBTTsrQkFDTixNQUFNO29DQUVOLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO21DQUN6QyxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtvQ0FDeEMsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7a0NBeUJ6QyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzttQ0FoR3pDOztTQW9EYSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgUmVuZGVyZXIyLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIE91dHB1dCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBOZ1pvbmUsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBPbkluaXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBPcHRpb25hbCxcbiAgICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5nT3B0aW9uIH0gZnJvbSAnLi9uZy1zZWxlY3QudHlwZXMnO1xuaW1wb3J0IHsgRHJvcGRvd25Qb3NpdGlvbiB9IGZyb20gJy4vbmctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi93aW5kb3cuc2VydmljZSc7XG5pbXBvcnQgeyBWaXJ0dWFsU2Nyb2xsU2VydmljZSB9IGZyb20gJy4vdmlydHVhbC1zY3JvbGwuc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IFRPUF9DU1NfQ0xBU1MgPSAnbmctc2VsZWN0LXRvcCc7XG5jb25zdCBCT1RUT01fQ1NTX0NMQVNTID0gJ25nLXNlbGVjdC1ib3R0b20nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHNlbGVjdG9yOiAnbmctZHJvcGRvd24tcGFuZWwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKm5nSWY9XCJoZWFkZXJUZW1wbGF0ZVwiIGNsYXNzPVwibmctZHJvcGRvd24taGVhZGVyXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImhlYWRlclRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgc2VhcmNoVGVybTogZmlsdGVyVmFsdWUgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAjc2Nyb2xsIGNsYXNzPVwibmctZHJvcGRvd24tcGFuZWwtaXRlbXMgc2Nyb2xsLWhvc3RcIj5cbiAgICAgICAgICAgIDxkaXYgI3BhZGRpbmcgW2NsYXNzLnRvdGFsLXBhZGRpbmddPVwidmlydHVhbFNjcm9sbFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiAjY29udGVudCBbY2xhc3Muc2Nyb2xsYWJsZS1jb250ZW50XT1cInZpcnR1YWxTY3JvbGwgJiYgaXRlbXMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImZvb3RlclRlbXBsYXRlXCIgY2xhc3M9XCJuZy1kcm9wZG93bi1mb290ZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZm9vdGVyVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBzZWFyY2hUZXJtOiBmaWx0ZXJWYWx1ZSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgICBASW5wdXQoKSBpdGVtczogTmdPcHRpb25bXSA9IFtdO1xuICAgIEBJbnB1dCgpIG1hcmtlZEl0ZW06IE5nT3B0aW9uO1xuICAgIEBJbnB1dCgpIHBvc2l0aW9uOiBEcm9wZG93blBvc2l0aW9uID0gJ2F1dG8nO1xuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYnVmZmVyQW1vdW50ID0gNDtcbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQElucHV0KCkgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQElucHV0KCkgZmlsdGVyVmFsdWU6IHN0cmluZyA9IG51bGw7XG5cbiAgICBAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgICBAT3V0cHV0KCkgc2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyIH0+KCk7XG4gICAgQE91dHB1dCgpIHNjcm9sbFRvRW5kID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgIEBPdXRwdXQoKSBvdXRzaWRlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdjb250ZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGNvbnRlbnRFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzY3JvbGxFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3BhZGRpbmcnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgcGFkZGluZ0VsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfZHJvcGRvd246IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgX3NlbGVjdDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfcHJldmlvdXNTdGFydDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3ByZXZpb3VzRW5kOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc3RhcnR1cExvb3AgPSB0cnVlO1xuICAgIHByaXZhdGUgX2lzU2Nyb2xsZWRUb01hcmtlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3Njcm9sbFRvRW5kRmlyZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9jdXJyZW50UG9zaXRpb246IERyb3Bkb3duUG9zaXRpb247XG4gICAgcHJpdmF0ZSBfZGlzcG9zZVNjcm9sbExpc3RlbmVyID0gKCkgPT4geyB9O1xuICAgIHByaXZhdGUgX2Rpc3Bvc2VEb2N1bWVudFJlc2l6ZUxpc3RlbmVyID0gKCkgPT4geyB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJpdmF0ZSBfdmlydHVhbFNjcm9sbFNlcnZpY2U6IFZpcnR1YWxTY3JvbGxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF93aW5kb3c6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55XG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duID0gX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICAgIGhhbmRsZU1vdXNlZG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gJGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ID0gdGhpcy5fZHJvcGRvd24ucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5faGFuZGxlU2Nyb2xsKCk7XG4gICAgICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAndG91Y2hzdGFydCcsIHsgY2FwdHVyZTogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICdtb3VzZWRvd24nLCB7IGNhcHR1cmU6IHRydWUgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCRldmVudCkgPT4gdGhpcy5faGFuZGxlT3V0c2lkZUNsaWNrKCRldmVudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5pdGVtcykge1xuICAgICAgICAgICAgdGhpcy5faXNTY3JvbGxlZFRvTWFya2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVJdGVtc0NoYW5nZShjaGFuZ2VzLml0ZW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9kaXNwb3NlRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLl9kaXNwb3NlU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgICAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICAgICAgICBpZiAodGhpcy5hcHBlbmRUbykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fZHJvcGRvd24ucGFyZW50Tm9kZSwgdGhpcy5fZHJvcGRvd24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLl93aGVuQ29udGVudFJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZGVzdHJveSQuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmREcm9wZG93bigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZURvY3VtZW50UmVzaXplKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duUG9zaXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUl0ZW1zKCkudGhlbihyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNjcm9sbEludG8oaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLl9jYWxjdWxhdGVEaW1lbnNpb25zKHRoaXMudmlydHVhbFNjcm9sbCA/IDAgOiBpbmRleCk7XG4gICAgICAgIGNvbnN0IHNjcm9sbEVsOiBFbGVtZW50ID0gdGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IE1hdGguZmxvb3IoZC52aWV3SGVpZ2h0IC8gZC5jaGlsZEhlaWdodCkgLSAxO1xuICAgICAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG4gICAgICAgICAgICBzY3JvbGxFbC5zY3JvbGxUb3AgPSAoaW5kZXggKiBkLmNoaWxkSGVpZ2h0KSAtIChkLmNoaWxkSGVpZ2h0ICogTWF0aC5taW4oaW5kZXgsIGJ1ZmZlcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY29udGVudEVsOiBIVE1MRWxlbWVudCA9IHRoaXMuY29udGVudEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuSGVpZ2h0ID0gQXJyYXkuZnJvbShjb250ZW50RWwuY2hpbGRyZW4pLnNsaWNlKDAsIGluZGV4KS5yZWR1Y2UoKGMsIG4pID0+IGMgKyBuLmNsaWVudEhlaWdodCwgMCk7XG4gICAgICAgICAgICBzY3JvbGxFbC5zY3JvbGxUb3AgPSBjaGlsZHJlbkhlaWdodCAtIChkLmNoaWxkSGVpZ2h0ICogTWF0aC5taW4oaW5kZXgsIGJ1ZmZlcikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsSW50b1RhZygpIHtcbiAgICAgICAgY29uc3QgZWw6IEVsZW1lbnQgPSB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuX2NhbGN1bGF0ZURpbWVuc2lvbnMoKTtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gZC5jaGlsZEhlaWdodCAqIChkLml0ZW1zTGVuZ3RoICsgMSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRHJvcGRvd25Qb3NpdGlvbigpIHtcbiAgICAgICAgdGhpcy5fd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBvc2l0aW9uID0gdGhpcy5fY2FsY3VsYXRlQ3VycmVudFBvc2l0aW9uKHRoaXMuX2Ryb3Bkb3duKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50UG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZHJvcGRvd24sIFRPUF9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2Ryb3Bkb3duLCBCT1RUT01fQ1NTX0NMQVNTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9zZWxlY3QsIFRPUF9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX3NlbGVjdCwgQk9UVE9NX0NTU19DTEFTUylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZHJvcGRvd24sIEJPVFRPTV9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2Ryb3Bkb3duLCBUT1BfQ1NTX0NMQVNTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9zZWxlY3QsIEJPVFRPTV9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX3NlbGVjdCwgVE9QX0NTU19DTEFTUyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQXBwZW5kZWREcm9wZG93blBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZU91dHNpZGVDbGljaygkZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0LmNvbnRhaW5zKCRldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZHJvcGRvd24uY29udGFpbnMoJGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhdGggPSAkZXZlbnQucGF0aCB8fCAoJGV2ZW50LmNvbXBvc2VkUGF0aCAmJiAkZXZlbnQuY29tcG9zZWRQYXRoKCkpO1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldCAmJiAkZXZlbnQudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgcGF0aCAmJiBwYXRoWzBdICYmIHRoaXMuX3NlbGVjdC5jb250YWlucyhwYXRoWzBdKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vdXRzaWRlQ2xpY2suZW1pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZVNjcm9sbCgpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZVNjcm9sbExpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLl9maXJlU2Nyb2xsVG9FbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlSXRlbXNDaGFuZ2UoaXRlbXM6IHsgcHJldmlvdXNWYWx1ZTogTmdPcHRpb25bXSwgY3VycmVudFZhbHVlOiBOZ09wdGlvbltdIH0pIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVG9FbmRGaXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1N0YXJ0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wcmV2aW91c0VuZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGl0ZW1zICE9PSB1bmRlZmluZWQgJiYgaXRlbXMucHJldmlvdXNWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAoaXRlbXMucHJldmlvdXNWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGl0ZW1zLnByZXZpb3VzVmFsdWUubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnR1cExvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcy5jdXJyZW50VmFsdWUgfHwgW107XG4gICAgICAgIHRoaXMucmVmcmVzaCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8gJiYgdGhpcy5fY3VycmVudFBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFwcGVuZGVkRHJvcGRvd25Qb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVJdGVtcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgTmdab25lLmFzc2VydE5vdEluQW5ndWxhclpvbmUoKTtcblxuICAgICAgICBpZiAoIXRoaXMudmlydHVhbFNjcm9sbCkge1xuICAgICAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5pdGVtcy5zbGljZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxUb01hcmtlZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb29wID0gKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLl9jYWxjdWxhdGVEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLl92aXJ0dWFsU2Nyb2xsU2VydmljZS5jYWxjdWxhdGVJdGVtcyhkLCB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5idWZmZXJBbW91bnQgfHwgMCk7XG5cbiAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+dGhpcy5wYWRkaW5nRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5zdHlsZS5oZWlnaHQgPSBgJHtyZXMuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+dGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgnICsgcmVzLnRvcFBhZGRpbmcgKyAncHgpJztcblxuICAgICAgICAgICAgaWYgKHJlcy5zdGFydCAhPT0gdGhpcy5fcHJldmlvdXNTdGFydCB8fCByZXMuZW5kICE9PSB0aGlzLl9wcmV2aW91c0VuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLml0ZW1zLnNsaWNlKHJlcy5zdGFydCwgcmVzLmVuZCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5lbWl0KHsgc3RhcnQ6IHJlcy5zdGFydCwgZW5kOiByZXMuZW5kIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzU3RhcnQgPSByZXMuc3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNFbmQgPSByZXMuZW5kO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXJ0dXBMb29wID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvb3AocmVzb2x2ZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhcnR1cExvb3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydHVwTG9vcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWFya2VkKCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGxvb3AocmVzb2x2ZSkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmlyZVNjcm9sbFRvRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVG9FbmRGaXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNjcm9sbDogSFRNTEVsZW1lbnQgPSB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgcGFkZGluZzogSFRNTEVsZW1lbnQgPSB0aGlzLnZpcnR1YWxTY3JvbGwgP1xuICAgICAgICAgICAgdGhpcy5wYWRkaW5nRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDpcbiAgICAgICAgICAgIHRoaXMuY29udGVudEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBpZiAoc2Nyb2xsLnNjcm9sbFRvcCArIHRoaXMuX2Ryb3Bkb3duLmNsaWVudEhlaWdodCA+PSBwYWRkaW5nLmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0VuZC5lbWl0KCk7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUb0VuZEZpcmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZURpbWVuc2lvbnMoaW5kZXggPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU2Nyb2xsU2VydmljZS5jYWxjdWxhdGVEaW1lbnNpb25zKFxuICAgICAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgdGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVEb2N1bWVudFJlc2l6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGlzcG9zZURvY3VtZW50UmVzaXplTGlzdGVuZXIgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVBcHBlbmRlZERyb3Bkb3duUG9zaXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9NYXJrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Njcm9sbGVkVG9NYXJrZWQgfHwgIXRoaXMubWFya2VkSXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzU2Nyb2xsZWRUb01hcmtlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2Nyb2xsSW50byh0aGlzLm1hcmtlZEl0ZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUN1cnJlbnRQb3NpdGlvbihkcm9wZG93bkVsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiAhPT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5fc2VsZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSBzZWxlY3RSZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2VsZWN0UmVjdC5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duSGVpZ2h0ID0gZHJvcGRvd25FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgIGlmIChvZmZzZXRUb3AgKyBoZWlnaHQgKyBkcm9wZG93bkhlaWdodCA+IHNjcm9sbFRvcCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiAndG9wJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnYm90dG9tJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2FwcGVuZERyb3Bkb3duKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuYXBwZW5kVG8pO1xuICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhcHBlbmRUbyBzZWxlY3RvciAke3RoaXMuYXBwZW5kVG99IGRpZCBub3QgZm91bmQgYW55IHBhcmVudCBlbGVtZW50YClcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5fZHJvcGRvd24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUFwcGVuZGVkRHJvcGRvd25Qb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmFwcGVuZFRvKSB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb25zdCBzZWxlY3RSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5fc2VsZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBib3VuZGluZ1JlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gc2VsZWN0UmVjdC50b3AgLSBib3VuZGluZ1JlY3QudG9wO1xuICAgICAgICBjb25zdCBvZmZzZXRMZWZ0ID0gc2VsZWN0UmVjdC5sZWZ0IC0gYm91bmRpbmdSZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IHRvcERlbHRhID0gdGhpcy5fY3VycmVudFBvc2l0aW9uID09PSAnYm90dG9tJyA/IHNlbGVjdFJlY3QuaGVpZ2h0IDogLXRoaXMuX2Ryb3Bkb3duLmNsaWVudEhlaWdodDtcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUudG9wID0gb2Zmc2V0VG9wICsgdG9wRGVsdGEgKyAncHgnO1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS5ib3R0b20gPSAnYXV0byc7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmxlZnQgPSBvZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUud2lkdGggPSBzZWxlY3RSZWN0LndpZHRoICsgJ3B4JztcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUubWluV2lkdGggPSBzZWxlY3RSZWN0LndpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBwcml2YXRlIF93aGVuQ29udGVudFJlYWR5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWFkeSA9IChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZ09wdGlvbiA9IHRoaXMuX2Ryb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJy5uZy1vcHRpb24nKTtcbiAgICAgICAgICAgIGlmIChuZ09wdGlvbikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlYWR5KHJlc29sdmUpLCA1KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlYWR5KHJlc29sdmUpKVxuICAgIH1cbn1cbiJdfQ==