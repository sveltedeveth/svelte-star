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
export type GiThreeLeavesProps = typeof __propDef.props;
export type GiThreeLeavesEvents = typeof __propDef.events;
export type GiThreeLeavesSlots = typeof __propDef.slots;
export default class GiThreeLeaves extends SvelteComponentTyped<GiThreeLeavesProps, GiThreeLeavesEvents, GiThreeLeavesSlots> {
}
export {};
