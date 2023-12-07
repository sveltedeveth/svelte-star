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
export type GiMaskedSpiderProps = typeof __propDef.props;
export type GiMaskedSpiderEvents = typeof __propDef.events;
export type GiMaskedSpiderSlots = typeof __propDef.slots;
export default class GiMaskedSpider extends SvelteComponentTyped<GiMaskedSpiderProps, GiMaskedSpiderEvents, GiMaskedSpiderSlots> {
}
export {};
