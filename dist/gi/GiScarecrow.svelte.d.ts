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
export type GiScarecrowProps = typeof __propDef.props;
export type GiScarecrowEvents = typeof __propDef.events;
export type GiScarecrowSlots = typeof __propDef.slots;
export default class GiScarecrow extends SvelteComponentTyped<GiScarecrowProps, GiScarecrowEvents, GiScarecrowSlots> {
}
export {};
