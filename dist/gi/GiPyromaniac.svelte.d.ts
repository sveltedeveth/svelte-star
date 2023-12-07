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
export type GiPyromaniacProps = typeof __propDef.props;
export type GiPyromaniacEvents = typeof __propDef.events;
export type GiPyromaniacSlots = typeof __propDef.slots;
export default class GiPyromaniac extends SvelteComponentTyped<GiPyromaniacProps, GiPyromaniacEvents, GiPyromaniacSlots> {
}
export {};
