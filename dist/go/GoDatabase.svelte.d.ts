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
export type GoDatabaseProps = typeof __propDef.props;
export type GoDatabaseEvents = typeof __propDef.events;
export type GoDatabaseSlots = typeof __propDef.slots;
export default class GoDatabase extends SvelteComponentTyped<GoDatabaseProps, GoDatabaseEvents, GoDatabaseSlots> {
}
export {};
