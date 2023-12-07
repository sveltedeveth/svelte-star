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
export type DiScalaProps = typeof __propDef.props;
export type DiScalaEvents = typeof __propDef.events;
export type DiScalaSlots = typeof __propDef.slots;
export default class DiScala extends SvelteComponentTyped<DiScalaProps, DiScalaEvents, DiScalaSlots> {
}
export {};
