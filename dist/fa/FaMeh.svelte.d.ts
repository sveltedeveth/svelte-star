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
export type FaMehProps = typeof __propDef.props;
export type FaMehEvents = typeof __propDef.events;
export type FaMehSlots = typeof __propDef.slots;
export default class FaMeh extends SvelteComponentTyped<FaMehProps, FaMehEvents, FaMehSlots> {
}
export {};
