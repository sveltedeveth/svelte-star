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
export type MdTabletProps = typeof __propDef.props;
export type MdTabletEvents = typeof __propDef.events;
export type MdTabletSlots = typeof __propDef.slots;
export default class MdTablet extends SvelteComponentTyped<MdTabletProps, MdTabletEvents, MdTabletSlots> {
}
export {};
