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
export type DiDatabaseProps = typeof __propDef.props;
export type DiDatabaseEvents = typeof __propDef.events;
export type DiDatabaseSlots = typeof __propDef.slots;
export default class DiDatabase extends SvelteComponentTyped<DiDatabaseProps, DiDatabaseEvents, DiDatabaseSlots> {
}
export {};
