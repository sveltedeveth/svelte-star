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
export type GiFlowersProps = typeof __propDef.props;
export type GiFlowersEvents = typeof __propDef.events;
export type GiFlowersSlots = typeof __propDef.slots;
export default class GiFlowers extends SvelteComponentTyped<GiFlowersProps, GiFlowersEvents, GiFlowersSlots> {
}
export {};
