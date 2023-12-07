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
export type FaBloggerProps = typeof __propDef.props;
export type FaBloggerEvents = typeof __propDef.events;
export type FaBloggerSlots = typeof __propDef.slots;
export default class FaBlogger extends SvelteComponentTyped<FaBloggerProps, FaBloggerEvents, FaBloggerSlots> {
}
export {};
