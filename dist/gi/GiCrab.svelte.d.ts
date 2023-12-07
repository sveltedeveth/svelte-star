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
export type GiCrabProps = typeof __propDef.props;
export type GiCrabEvents = typeof __propDef.events;
export type GiCrabSlots = typeof __propDef.slots;
export default class GiCrab extends SvelteComponentTyped<GiCrabProps, GiCrabEvents, GiCrabSlots> {
}
export {};
