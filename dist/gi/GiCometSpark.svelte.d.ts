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
export type GiCometSparkProps = typeof __propDef.props;
export type GiCometSparkEvents = typeof __propDef.events;
export type GiCometSparkSlots = typeof __propDef.slots;
export default class GiCometSpark extends SvelteComponentTyped<GiCometSparkProps, GiCometSparkEvents, GiCometSparkSlots> {
}
export {};
