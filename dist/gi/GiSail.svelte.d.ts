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
export type GiSailProps = typeof __propDef.props;
export type GiSailEvents = typeof __propDef.events;
export type GiSailSlots = typeof __propDef.slots;
export default class GiSail extends SvelteComponentTyped<GiSailProps, GiSailEvents, GiSailSlots> {
}
export {};
