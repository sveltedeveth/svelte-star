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
export type GiBruteProps = typeof __propDef.props;
export type GiBruteEvents = typeof __propDef.events;
export type GiBruteSlots = typeof __propDef.slots;
export default class GiBrute extends SvelteComponentTyped<GiBruteProps, GiBruteEvents, GiBruteSlots> {
}
export {};
