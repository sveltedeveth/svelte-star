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
export type GiAriesProps = typeof __propDef.props;
export type GiAriesEvents = typeof __propDef.events;
export type GiAriesSlots = typeof __propDef.slots;
export default class GiAries extends SvelteComponentTyped<GiAriesProps, GiAriesEvents, GiAriesSlots> {
}
export {};
