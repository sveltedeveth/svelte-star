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
export type FaHeadphonesProps = typeof __propDef.props;
export type FaHeadphonesEvents = typeof __propDef.events;
export type FaHeadphonesSlots = typeof __propDef.slots;
export default class FaHeadphones extends SvelteComponentTyped<FaHeadphonesProps, FaHeadphonesEvents, FaHeadphonesSlots> {
}
export {};
