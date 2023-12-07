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
export type DiPostgresqlProps = typeof __propDef.props;
export type DiPostgresqlEvents = typeof __propDef.events;
export type DiPostgresqlSlots = typeof __propDef.slots;
export default class DiPostgresql extends SvelteComponentTyped<DiPostgresqlProps, DiPostgresqlEvents, DiPostgresqlSlots> {
}
export {};
