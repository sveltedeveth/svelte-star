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
export type GiFinchProps = typeof __propDef.props;
export type GiFinchEvents = typeof __propDef.events;
export type GiFinchSlots = typeof __propDef.slots;
export default class GiFinch extends SvelteComponentTyped<GiFinchProps, GiFinchEvents, GiFinchSlots> {
}
export {};
