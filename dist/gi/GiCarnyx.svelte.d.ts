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
export type GiCarnyxProps = typeof __propDef.props;
export type GiCarnyxEvents = typeof __propDef.events;
export type GiCarnyxSlots = typeof __propDef.slots;
export default class GiCarnyx extends SvelteComponentTyped<GiCarnyxProps, GiCarnyxEvents, GiCarnyxSlots> {
}
export {};
