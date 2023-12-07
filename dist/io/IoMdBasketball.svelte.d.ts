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
export type IoMdBasketballProps = typeof __propDef.props;
export type IoMdBasketballEvents = typeof __propDef.events;
export type IoMdBasketballSlots = typeof __propDef.slots;
export default class IoMdBasketball extends SvelteComponentTyped<IoMdBasketballProps, IoMdBasketballEvents, IoMdBasketballSlots> {
}
export {};
