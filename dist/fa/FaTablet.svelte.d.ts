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
export type FaTabletProps = typeof __propDef.props;
export type FaTabletEvents = typeof __propDef.events;
export type FaTabletSlots = typeof __propDef.slots;
export default class FaTablet extends SvelteComponentTyped<FaTabletProps, FaTabletEvents, FaTabletSlots> {
}
export {};
