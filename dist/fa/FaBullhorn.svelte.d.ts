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
export type FaBullhornProps = typeof __propDef.props;
export type FaBullhornEvents = typeof __propDef.events;
export type FaBullhornSlots = typeof __propDef.slots;
export default class FaBullhorn extends SvelteComponentTyped<FaBullhornProps, FaBullhornEvents, FaBullhornSlots> {
}
export {};
