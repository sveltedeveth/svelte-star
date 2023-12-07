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
export type DiSparkProps = typeof __propDef.props;
export type DiSparkEvents = typeof __propDef.events;
export type DiSparkSlots = typeof __propDef.slots;
export default class DiSpark extends SvelteComponentTyped<DiSparkProps, DiSparkEvents, DiSparkSlots> {
}
export {};
