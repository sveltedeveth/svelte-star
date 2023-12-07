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
export type GiHeadshotProps = typeof __propDef.props;
export type GiHeadshotEvents = typeof __propDef.events;
export type GiHeadshotSlots = typeof __propDef.slots;
export default class GiHeadshot extends SvelteComponentTyped<GiHeadshotProps, GiHeadshotEvents, GiHeadshotSlots> {
}
export {};
