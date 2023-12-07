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
export type TiHeadphonesProps = typeof __propDef.props;
export type TiHeadphonesEvents = typeof __propDef.events;
export type TiHeadphonesSlots = typeof __propDef.slots;
export default class TiHeadphones extends SvelteComponentTyped<TiHeadphonesProps, TiHeadphonesEvents, TiHeadphonesSlots> {
}
export {};
