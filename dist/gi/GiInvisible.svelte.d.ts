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
export type GiInvisibleProps = typeof __propDef.props;
export type GiInvisibleEvents = typeof __propDef.events;
export type GiInvisibleSlots = typeof __propDef.slots;
export default class GiInvisible extends SvelteComponentTyped<GiInvisibleProps, GiInvisibleEvents, GiInvisibleSlots> {
}
export {};
