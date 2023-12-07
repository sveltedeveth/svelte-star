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
export type GiEdgeCrackProps = typeof __propDef.props;
export type GiEdgeCrackEvents = typeof __propDef.events;
export type GiEdgeCrackSlots = typeof __propDef.slots;
export default class GiEdgeCrack extends SvelteComponentTyped<GiEdgeCrackProps, GiEdgeCrackEvents, GiEdgeCrackSlots> {
}
export {};
