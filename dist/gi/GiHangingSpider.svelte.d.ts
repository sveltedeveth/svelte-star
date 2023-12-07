import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiHangingSpiderProps = typeof __propDef.props;
export type GiHangingSpiderEvents = typeof __propDef.events;
export type GiHangingSpiderSlots = typeof __propDef.slots;
export default class GiHangingSpider extends SvelteComponentTyped<GiHangingSpiderProps, GiHangingSpiderEvents, GiHangingSpiderSlots> {
}
export {};
