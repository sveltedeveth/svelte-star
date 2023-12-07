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
export type GiSwitzerlandProps = typeof __propDef.props;
export type GiSwitzerlandEvents = typeof __propDef.events;
export type GiSwitzerlandSlots = typeof __propDef.slots;
export default class GiSwitzerland extends SvelteComponentTyped<GiSwitzerlandProps, GiSwitzerlandEvents, GiSwitzerlandSlots> {
}
export {};
