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
export type GiHeadphonesProps = typeof __propDef.props;
export type GiHeadphonesEvents = typeof __propDef.events;
export type GiHeadphonesSlots = typeof __propDef.slots;
export default class GiHeadphones extends SvelteComponentTyped<GiHeadphonesProps, GiHeadphonesEvents, GiHeadphonesSlots> {
}
export {};
