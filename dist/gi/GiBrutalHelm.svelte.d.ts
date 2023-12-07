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
export type GiBrutalHelmProps = typeof __propDef.props;
export type GiBrutalHelmEvents = typeof __propDef.events;
export type GiBrutalHelmSlots = typeof __propDef.slots;
export default class GiBrutalHelm extends SvelteComponentTyped<GiBrutalHelmProps, GiBrutalHelmEvents, GiBrutalHelmSlots> {
}
export {};
