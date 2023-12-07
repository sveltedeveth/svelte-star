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
export type GiAutogunProps = typeof __propDef.props;
export type GiAutogunEvents = typeof __propDef.events;
export type GiAutogunSlots = typeof __propDef.slots;
export default class GiAutogun extends SvelteComponentTyped<GiAutogunProps, GiAutogunEvents, GiAutogunSlots> {
}
export {};
