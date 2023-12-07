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
export type GiAngularSpiderProps = typeof __propDef.props;
export type GiAngularSpiderEvents = typeof __propDef.events;
export type GiAngularSpiderSlots = typeof __propDef.slots;
export default class GiAngularSpider extends SvelteComponentTyped<GiAngularSpiderProps, GiAngularSpiderEvents, GiAngularSpiderSlots> {
}
export {};
