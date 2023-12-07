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
export type DiMsqlServerProps = typeof __propDef.props;
export type DiMsqlServerEvents = typeof __propDef.events;
export type DiMsqlServerSlots = typeof __propDef.slots;
export default class DiMsqlServer extends SvelteComponentTyped<DiMsqlServerProps, DiMsqlServerEvents, DiMsqlServerSlots> {
}
export {};
