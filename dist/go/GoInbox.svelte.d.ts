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
export type GoInboxProps = typeof __propDef.props;
export type GoInboxEvents = typeof __propDef.events;
export type GoInboxSlots = typeof __propDef.slots;
export default class GoInbox extends SvelteComponentTyped<GoInboxProps, GoInboxEvents, GoInboxSlots> {
}
export {};
