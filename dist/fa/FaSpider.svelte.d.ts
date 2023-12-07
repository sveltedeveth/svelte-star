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
export type FaSpiderProps = typeof __propDef.props;
export type FaSpiderEvents = typeof __propDef.events;
export type FaSpiderSlots = typeof __propDef.slots;
export default class FaSpider extends SvelteComponentTyped<FaSpiderProps, FaSpiderEvents, FaSpiderSlots> {
}
export {};
