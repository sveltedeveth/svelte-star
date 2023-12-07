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
export type FaFeatherAltProps = typeof __propDef.props;
export type FaFeatherAltEvents = typeof __propDef.events;
export type FaFeatherAltSlots = typeof __propDef.slots;
export default class FaFeatherAlt extends SvelteComponentTyped<FaFeatherAltProps, FaFeatherAltEvents, FaFeatherAltSlots> {
}
export {};
