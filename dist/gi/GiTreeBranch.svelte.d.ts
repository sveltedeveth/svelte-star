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
export type GiTreeBranchProps = typeof __propDef.props;
export type GiTreeBranchEvents = typeof __propDef.events;
export type GiTreeBranchSlots = typeof __propDef.slots;
export default class GiTreeBranch extends SvelteComponentTyped<GiTreeBranchProps, GiTreeBranchEvents, GiTreeBranchSlots> {
}
export {};
