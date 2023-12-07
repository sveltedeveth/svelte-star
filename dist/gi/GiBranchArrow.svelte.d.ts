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
export type GiBranchArrowProps = typeof __propDef.props;
export type GiBranchArrowEvents = typeof __propDef.events;
export type GiBranchArrowSlots = typeof __propDef.slots;
export default class GiBranchArrow extends SvelteComponentTyped<GiBranchArrowProps, GiBranchArrowEvents, GiBranchArrowSlots> {
}
export {};
