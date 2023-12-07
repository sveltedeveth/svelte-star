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
export type GiMammothProps = typeof __propDef.props;
export type GiMammothEvents = typeof __propDef.events;
export type GiMammothSlots = typeof __propDef.slots;
export default class GiMammoth extends SvelteComponentTyped<GiMammothProps, GiMammothEvents, GiMammothSlots> {
}
export {};
