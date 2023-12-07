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
export type FaCodeBranchProps = typeof __propDef.props;
export type FaCodeBranchEvents = typeof __propDef.events;
export type FaCodeBranchSlots = typeof __propDef.slots;
export default class FaCodeBranch extends SvelteComponentTyped<FaCodeBranchProps, FaCodeBranchEvents, FaCodeBranchSlots> {
}
export {};
