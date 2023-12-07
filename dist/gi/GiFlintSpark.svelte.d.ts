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
export type GiFlintSparkProps = typeof __propDef.props;
export type GiFlintSparkEvents = typeof __propDef.events;
export type GiFlintSparkSlots = typeof __propDef.slots;
export default class GiFlintSpark extends SvelteComponentTyped<GiFlintSparkProps, GiFlintSparkEvents, GiFlintSparkSlots> {
}
export {};
