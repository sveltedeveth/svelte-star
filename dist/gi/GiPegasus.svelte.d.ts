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
export type GiPegasusProps = typeof __propDef.props;
export type GiPegasusEvents = typeof __propDef.events;
export type GiPegasusSlots = typeof __propDef.slots;
export default class GiPegasus extends SvelteComponentTyped<GiPegasusProps, GiPegasusEvents, GiPegasusSlots> {
}
export {};
